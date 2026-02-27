import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, ArrowLeft, Volume2, VolumeX, Maximize2, Wind, Trophy } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";

/**
 * Game Page - Responsive Design
 * - Desktop: Full-screen game with side controls
 * - Mobile: Optimized touch controls with vertical layout
 * - Responsive iframe that adapts to screen size
 * - Instructions and tips for both platforms
 */

export default function Game() {
  const [gameLoaded, setGameLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFullscreen = () => {
    if (gameContainerRef.current) {
      if (!isFullscreen) {
        gameContainerRef.current.requestFullscreen?.();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen?.();
        setIsFullscreen(false);
      }
    }
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
              Play Game
            </span>
          </div>
          <div className="w-20" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Main Game Area */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Game Container - Takes full width on mobile, 3 columns on desktop */}
          <div className="md:col-span-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <div 
                ref={gameContainerRef}
                className="relative bg-black rounded-2xl overflow-hidden border border-primary/30 shadow-2xl"
              >
                {/* Game Iframe */}
                <div className={`relative ${isMobile ? 'aspect-video' : 'aspect-video md:aspect-auto'} md:h-[600px]`}>
                  <iframe
                    ref={iframeRef}
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

                {/* Game Controls */}
                <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                  <button
                    onClick={handleFullscreen}
                    className="p-2 rounded-lg bg-accent/20 hover:bg-accent/40 transition-colors border border-accent/50"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-5 h-5 text-accent" />
                  </button>
                </div>
              </div>
            </div>

            {/* Game Info */}
            <div className="mt-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Run Witch Run</h1>
              <p className="text-muted-foreground">
                An endless runner adventure through a magical night sky
              </p>
            </div>
          </div>

          {/* Sidebar - Controls & Instructions */}
          <div className="md:col-span-1 space-y-6">
            {/* Controls Card */}
            <Card className="border-primary/30 bg-card/50 sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Wind className="w-5 h-5 text-accent" />
                  {isMobile ? 'Mobile Controls' : 'Controls'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {isMobile ? (
                  <>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Tap Left</p>
                      <p className="text-xs text-muted-foreground">Move left</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Tap Right</p>
                      <p className="text-xs text-muted-foreground">Move right</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Tap Center</p>
                      <p className="text-xs text-muted-foreground">Jump</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">← →</p>
                      <p className="text-xs text-muted-foreground">Move left/right</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">W / A / D</p>
                      <p className="text-xs text-muted-foreground">Alternative movement</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Space</p>
                      <p className="text-xs text-muted-foreground">Jump</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Tips Card */}
            <Card className="border-accent/30 bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Trophy className="w-5 h-5 text-accent" />
                  Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-1">🎯 Stay Focused</p>
                  <p className="text-xs text-muted-foreground">Game gets faster as you progress</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">📍 Plan Ahead</p>
                  <p className="text-xs text-muted-foreground">Anticipate obstacles before they arrive</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">❤️ Collect Hearts</p>
                  <p className="text-xs text-muted-foreground">Restore health when needed</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">⭐ Get Power-ups</p>
                  <p className="text-xs text-muted-foreground">Use special items for advantages</p>
                </div>
              </CardContent>
            </Card>

            {/* Back Button */}
            <Link href="/">
              <Button 
                variant="outline" 
                className="w-full border-primary/50 hover:bg-primary/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Full Width Instructions Section */}
      <section className="py-12 md:py-16 bg-card/30 border-t border-border/50 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Game Guide</h2>
            <p className="text-muted-foreground">Master the game with these helpful tips</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Objective */}
            <Card className="border-primary/30 bg-background/50">
              <CardHeader>
                <CardTitle>🎮 Objective</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Run as far as you can while dodging obstacles and enemies. Collect hearts and power-ups to survive longer and score higher.</p>
              </CardContent>
            </Card>

            {/* Gameplay */}
            <Card className="border-primary/30 bg-background/50">
              <CardHeader>
                <CardTitle>⚡ Gameplay</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Difficulty increases:</span> Game speeds up as you progress</p>
                <p><span className="font-semibold text-foreground">Health system:</span> Lose health on collision, gain from hearts</p>
              </CardContent>
            </Card>

            {/* Scoring */}
            <Card className="border-primary/30 bg-background/50">
              <CardHeader>
                <CardTitle>🏆 Scoring</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Distance:</span> Points for running far</p>
                <p><span className="font-semibold text-foreground">Collectibles:</span> Bonus points for items</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 py-8 mt-12">
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
