import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

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
    <section id="contact" className="py-32">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-medium" data-testid="text-contact-title">
                Send me a message!
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-contact-subtitle">
                Got a question or proposal, or just want to say hello? Go ahead.
              </p>
            </div>
            
            <div className="space-y-6 text-sm text-muted-foreground">
              <div data-testid="contact-email">
                <p className="font-medium text-foreground mb-1">Email</p>
                <a href="mailto:moeed@example.com" className="hover:text-foreground transition-colors duration-300">
                  moeed@example.com
                </a>
              </div>
              <div data-testid="contact-location">
                <p className="font-medium text-foreground mb-1">Location</p>
                <p>Gujrat, Pakistan</p>
              </div>
              <div data-testid="contact-social">
                <p className="font-medium text-foreground mb-1">Social</p>
                <div className="space-y-1">
                  <a href="https://github.com/moeed" className="block hover:text-foreground transition-colors duration-300">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/moeed" className="block hover:text-foreground transition-colors duration-300">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border-0 border-b border-border rounded-none px-0 pb-2 focus-visible:ring-0 focus-visible:border-foreground bg-transparent"
                  placeholder="Enter your name"
                  data-testid="input-contact-name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border-0 border-b border-border rounded-none px-0 pb-2 focus-visible:ring-0 focus-visible:border-foreground bg-transparent"
                  placeholder="Enter your email"
                  data-testid="input-contact-email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="border-0 border-b border-border rounded-none px-0 pb-2 focus-visible:ring-0 focus-visible:border-foreground resize-none bg-transparent"
                  placeholder="Tell me about your project..."
                  data-testid="textarea-contact-message"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full mt-8 rounded-none h-12"
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
