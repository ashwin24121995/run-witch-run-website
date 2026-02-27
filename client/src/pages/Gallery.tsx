import { Button } from "@/components/ui/button";
import { Sparkles, ArrowLeft, Gamepad2 } from "lucide-react";
import { Link } from "wouter";

export default function Gallery() {
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
              Gallery
            </span>
          </div>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Game Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the magical world of Run Witch Run through these stunning screenshots
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div 
                key={num}
                className="group relative overflow-hidden rounded-xl border border-primary/30 hover:border-accent/50 transition-all cursor-pointer"
              >
                <div className="aspect-video bg-black overflow-hidden">
                  <img
                    src={`/screenshots/${num}.png`}
                    alt={`Screenshot ${num}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <p className="text-white font-semibold text-lg">Gameplay Moment {num}</p>
                    <p className="text-gray-300 text-sm mt-1">Experience the magical adventure</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About These Screenshots</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                These screenshots showcase the beautiful pixel art graphics and engaging gameplay of Run Witch Run. Each image captures a different moment from the game, showing the witch character navigating through magical landscapes filled with obstacles, enemies, and collectible items.
              </p>
              <p>
                The game features a stunning night-time setting with glowing moons, mystical trees, and atmospheric effects. The colorful design combined with smooth animations creates an immersive gaming experience that's fun for players of all skill levels.
              </p>
              <p>
                From the initial moments of the game to high-speed runs with intense action, these screenshots give you a glimpse into the variety and excitement that awaits you in Run Witch Run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            These screenshots only show a fraction of what Run Witch Run has to offer. Play the game now to experience the full adventure!
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
