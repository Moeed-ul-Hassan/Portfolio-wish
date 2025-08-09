import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Please fill in all fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(form);
  };

  return (
    <section id="contact" className="py-40">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-32 items-start">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-serif font-medium text-shadow" data-testid="text-contact-title">
                Send me a message!
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-lg" data-testid="text-contact-subtitle">
                Got a question or proposal, or just want to say hello? Go ahead.
              </p>
            </div>
            
            <div className="space-y-8 text-base text-muted-foreground">
              <div data-testid="contact-email">
                <p className="font-medium text-foreground mb-2 text-sm uppercase tracking-wider">Email</p>
                <a href="mailto:moeed@example.com" className="hover:text-foreground transition-all duration-500 border-b border-foreground/20 pb-1">
                  moeed@example.com
                </a>
              </div>
              <div data-testid="contact-location">
                <p className="font-medium text-foreground mb-2 text-sm uppercase tracking-wider">Location</p>
                <p className="font-light">Gujrat, Pakistan</p>
              </div>
              <div data-testid="contact-social">
                <p className="font-medium text-foreground mb-3 text-sm uppercase tracking-wider">Social</p>
                <div className="space-y-2">
                  <a href="https://github.com/moeed" className="block hover:text-foreground transition-all duration-500 border-b border-foreground/20 pb-1 w-fit">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/moeed" className="block hover:text-foreground transition-all duration-500 border-b border-foreground/20 pb-1 w-fit">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8" data-testid="form-contact">
              <div className="space-y-3">
                <label htmlFor="name" className="block text-sm font-medium uppercase tracking-wider">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border-0 border-b-2 border-border rounded-none px-0 pb-4 focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-lg transition-all duration-500"
                  placeholder="Enter your name"
                  data-testid="input-contact-name"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="block text-sm font-medium uppercase tracking-wider">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border-0 border-b-2 border-border rounded-none px-0 pb-4 focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-lg transition-all duration-500"
                  placeholder="Enter your email"
                  data-testid="input-contact-email"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="block text-sm font-medium uppercase tracking-wider">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="border-0 border-b-2 border-border rounded-none px-0 pb-4 focus-visible:ring-0 focus-visible:border-foreground resize-none bg-transparent text-lg transition-all duration-500"
                  placeholder="Tell me about your project..."
                  data-testid="textarea-contact-message"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full mt-12 rounded-none h-14 text-base font-medium hover:opacity-80 transition-all duration-500"
                disabled={contactMutation.isPending}
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? "Sending..." : "Shoot"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
