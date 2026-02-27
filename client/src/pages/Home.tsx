import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Heart, Trophy, Gamepad2, Wind, Sparkles } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Playful Enchantment
 * - Dark mystical background (#0F172A) with purple (#6B46C1) and orange (#F97316) accents
 * - Smooth animations and glowing effects to create magical atmosphere
 * - Game-centric layout with prominent hero section
 * - Responsive design optimized for all devices
 */

export default function Home() {
  const [gameLoaded, setGameLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Run Witch Run
            </span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">
              Features
            </a>
            <a href="#how-to-play" className="text-sm font-medium hover:text-accent transition-colors">
              How to Play
            </a>
            <a href="#gallery" className="text-sm font-medium hover:text-accent transition-colors">
              Gallery
            </a>
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-accent/50 transition-all"
              onClick={() => document.getElementById('game-frame')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Play Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Run Witch Run
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  An endless runner adventure through a magical night sky. Dodge obstacles, collect power-ups, and chase the highest score!
                </p>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-accent/50 text-primary-foreground font-semibold"
                  onClick={() => document.getElementById('game-frame')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Gamepad2 className="w-5 h-5 mr-2" />
                  Play Game
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-accent">∞</p>
                  <p className="text-sm text-muted-foreground">Endless Fun</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-accent">🎮</p>
                  <p className="text-sm text-muted-foreground">Play Anywhere</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-accent">⚡</p>
                  <p className="text-sm text-muted-foreground">Fast Paced</p>
                </div>
              </div>
            </div>

            {/* Right: Game Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <div className="relative bg-card rounded-2xl p-1 border border-primary/30 shadow-2xl">
                <div className="bg-black rounded-xl overflow-hidden aspect-square md:aspect-video flex items-center justify-center">
                  <img 
                    src="/screenshots/1.png" 
                    alt="Game Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Game Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience an action-packed endless runner with challenging gameplay and magical visuals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-primary/30 bg-background/50 hover:border-accent/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Fast-Paced Action</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dodge obstacles and enemies as the difficulty increases. Test your reflexes in this thrilling endless runner.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-primary/30 bg-background/50 hover:border-accent/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                  <Heart className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle>Health System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manage your health as you navigate through the magical night. Collect hearts to restore your energy.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-primary/30 bg-background/50 hover:border-accent/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>High Score Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Compete for the highest score and see how far you can run. Each playthrough is a new adventure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Embed Section */}
      <section id="game-frame" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Play Now
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to run? Start your magical adventure below!
            </p>
          </div>

          {/* Game Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl" />
            <div className="relative bg-black rounded-3xl overflow-hidden border border-primary/30 shadow-2xl aspect-video md:aspect-auto md:h-[600px]">
              <iframe
                src="/game/index.html"
                title="Run Witch Run Game"
                className="w-full h-full border-none"
                allowFullScreen
                onLoad={() => setGameLoaded(true)}
              />
              {!gameLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="animate-spin mb-4">
                      <Sparkles className="w-12 h-12 text-accent" />
                    </div>
                    <p className="text-white font-semibold">Loading game...</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Game Instructions */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="border-primary/30 bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="w-5 h-5 text-accent" />
                  How to Play
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Arrow Keys / WASD:</span> Move left and right
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Space:</span> Jump over obstacles
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Avoid:</span> Enemies and obstacles
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Collect:</span> Hearts and power-ups
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/30 bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  Tips & Tricks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Stay Focused:</span> The game gets faster as you progress
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Plan Ahead:</span> Anticipate obstacles before they arrive
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Use Power-ups:</span> Collect special items for advantages
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Practice:</span> Each run teaches you the patterns
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Game Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore the magical world of Run Witch Run
            </p>
          </div>

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-semibold">Gameplay Moment {num}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Run Witch Run</h3>
              <p className="text-muted-foreground text-sm">
                An endless runner game featuring magical adventures and challenging gameplay.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
                <li><a href="#how-to-play" className="hover:text-accent transition-colors">How to Play</a></li>
                <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Game</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#game-frame" className="hover:text-accent transition-colors">Play Game</a></li>
                <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Built With</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>React & Tailwind CSS</li>
                <li>Construct 3 Engine</li>
                <li>HTML5 & WebGL</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Run Witch Run. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
