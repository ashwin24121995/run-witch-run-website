import { Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Privacy() {
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
              Privacy Policy
            </span>
          </div>
          <div className="w-20" />
        </div>
      </header>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Introduction</h2>
              <p>
                Welcome to Run Witch Run ("we," "us," "our," or "Company"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our game.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong>Personal Data:</strong> Voluntarily provided when you contact us</li>
                <li><strong>Device Information:</strong> Browser type, IP address, operating system</li>
                <li><strong>Game Data:</strong> Game scores, progress, and gameplay statistics</li>
                <li><strong>Cookies:</strong> Information stored on your device for improved experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Use of Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Generate a personal profile about you so that future visits to the site will be personalized</li>
                <li>Improve our website and services</li>
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Send you promotional and marketing communications</li>
                <li>Monitor and analyze usage and trends to improve your experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Disclosure of Your Information</h2>
              <p>We may share information we have collected about you in certain situations:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong>By Law or to Protect Rights:</strong> If required by law or to protect our rights</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with vendors, consultants, and service providers</li>
                <li><strong>Business Transfers:</strong> Your information may be transferred as part of a merger or acquisition</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-3 p-4 bg-card/50 rounded-lg border border-primary/30">
                <p><strong>Run Witch Run</strong></p>
                <p>Email: privacy@runwitchrun.com</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border/50">
              <p className="text-sm">
                Last updated: February 2026
              </p>
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
