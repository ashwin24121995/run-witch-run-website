import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, ArrowLeft, Zap, Heart, Trophy, Wind, Gamepad2, Palette } from "lucide-react";
import { Link } from "wouter";

export default function Features() {
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
              Features
            </span>
          </div>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Game Features</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Run Witch Run an exciting and engaging endless runner experience
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <Card className="border-primary/30 bg-card/50 hover:border-accent/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Fast-Paced Action</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Experience thrilling, non-stop action as you navigate through an endless magical landscape. The game progressively increases in difficulty, keeping you on your toes.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Progressive difficulty scaling</li>
                  <li>✓ Multiple obstacle types</li>
                  <li>✓ Dynamic enemy patterns</li>
                  <li>✓ Smooth, responsive controls</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-primary/30 bg-card/50 hover:border-accent/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                  <Heart className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Health Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Manage your health strategically as you run. Collect hearts to restore your energy and survive longer in the magical night.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Visual health indicator</li>
                  <li>✓ Collectible heart power-ups</li>
                  <li>✓ Strategic health management</li>
                  <li>✓ Game over detection</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-primary/30 bg-card/50 hover:border-accent/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Score Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Compete for the highest score and track your progress. Every run is a chance to beat your personal best.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Real-time score display</li>
                  <li>✓ Distance tracking</li>
                  <li>✓ Collectible bonuses</li>
                  <li>✓ Game over statistics</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-primary/30 bg-card/50 hover:border-accent/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                  <Palette className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Beautiful Graphics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Immerse yourself in a magical night sky with stunning pixel art graphics and smooth animations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ High-quality pixel art</li>
                  <li>✓ Smooth animations</li>
                  <li>✓ Magical visual effects</li>
                  <li>✓ Atmospheric background</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-primary/30 bg-card/50 hover:border-accent/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                  <Gamepad2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Cross-Platform</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Play on any device with optimized controls for both desktop and mobile platforms.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Desktop keyboard controls</li>
                  <li>✓ Mobile touch controls</li>
                  <li>✓ Responsive design</li>
                  <li>✓ Fullscreen support</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-primary/30 bg-card/50 hover:border-accent/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                  <Wind className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Sound & Music</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Enjoy immersive audio with background music and sound effects that enhance the gameplay experience.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Background music</li>
                  <li>✓ Sound effects</li>
                  <li>✓ Audio feedback</li>
                  <li>✓ Mutable controls</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start playing Run Witch Run now and discover all the exciting features firsthand
          </p>
          <Link href="/game">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-accent/50 text-primary-foreground font-semibold"
            >
              <Gamepad2 className="w-5 h-5 mr-2" />
              Play Game
            </Button>
          </Link>
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
