import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Github } from "lucide-react";
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "moeed@example.com",
      href: "mailto:moeed@example.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gujrat, Pakistan",
      href: null
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/moeed",
      href: "https://github.com/moeed"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-contact-title">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Looking for a developer who delivers complete products, not just features? Let's discuss your next project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6" data-testid="text-get-in-touch">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4" data-testid={`item-contact-info-${index}`}>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium" data-testid={`text-contact-info-title-${index}`}>{info.title}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-gray-300 hover:text-primary transition-colors"
                        data-testid={`link-contact-info-${index}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300" data-testid={`text-contact-info-value-${index}`}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-gray-700 border-gray-600 text-white focus:border-primary"
                      placeholder="Your name"
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-gray-700 border-gray-600 text-white focus:border-primary"
                      placeholder="your.email@example.com"
                      data-testid="input-contact-email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="bg-gray-700 border-gray-600 text-white focus:border-primary resize-none"
                      placeholder="Tell me about your project..."
                      data-testid="textarea-contact-message"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={contactMutation.isPending}
                    data-testid="button-send-message"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
