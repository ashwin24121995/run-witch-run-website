import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, ArrowLeft, Mail, MessageSquare, MapPin } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Back to Home</span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contact Us
            </span>
          </div>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions, feedback, or just want to say hello? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <Card className="border-primary/30 bg-card/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">For general inquiries</p>
                <a href="mailto:support@runwitchrun.com" className="text-accent hover:underline font-semibold">
                  support@runwitchrun.com
                </a>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="border-primary/30 bg-card/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">Technical issues or bugs</p>
                <a href="mailto:support@runwitchrun.com" className="text-accent hover:underline font-semibold">
                  support@runwitchrun.com
                </a>
              </CardContent>
            </Card>

            {/* Business Card */}
            <Card className="border-primary/30 bg-card/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Business</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">Partnerships & collaborations</p>
                <a href="mailto:business@runwitchrun.com" className="text-accent hover:underline font-semibold">
                  business@runwitchrun.com
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-primary/30 bg-card/50">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 focus:border-accent focus:outline-none transition-colors text-foreground"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 focus:border-accent focus:outline-none transition-colors text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 focus:border-accent focus:outline-none transition-colors text-foreground"
                      placeholder="What is this about?"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 focus:border-accent focus:outline-none transition-colors text-foreground resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-accent/50 text-primary-foreground font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-background/50 rounded-lg border border-primary/30">
                <h3 className="font-semibold text-lg mb-2">How can I report a bug?</h3>
                <p className="text-muted-foreground">
                  Please email us at support@runwitchrun.com with a detailed description of the bug, including screenshots if possible.
                </p>
              </div>

              <div className="p-6 bg-background/50 rounded-lg border border-primary/30">
                <h3 className="font-semibold text-lg mb-2">Is Run Witch Run free to play?</h3>
                <p className="text-muted-foreground">
                  Yes! Run Witch Run is completely free to play. No ads, no in-app purchases, just pure gaming fun.
                </p>
              </div>

              <div className="p-6 bg-background/50 rounded-lg border border-primary/30">
                <h3 className="font-semibold text-lg mb-2">Can I play on mobile?</h3>
                <p className="text-muted-foreground">
                  Absolutely! Run Witch Run is fully optimized for both desktop and mobile devices with responsive touch controls.
                </p>
              </div>

              <div className="p-6 bg-background/50 rounded-lg border border-primary/30">
                <h3 className="font-semibold text-lg mb-2">How do I improve my score?</h3>
                <p className="text-muted-foreground">
                  Practice makes perfect! Focus on dodging obstacles, collecting hearts, and learning the game patterns. Each run teaches you something new.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Run Witch Run. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
