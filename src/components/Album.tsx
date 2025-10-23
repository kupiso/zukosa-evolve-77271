import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Music, Sparkles, Heart } from "lucide-react";
import albumCover from "@/assets/album-cover.jpg";

const Album = () => {
  return (
    <section id="album" className="py-24 relative bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Latest Album
            </h2>
            <p className="text-muted-foreground text-lg">
              A testament to faith, calling, and resilience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <img
                src={albumCover}
                alt="Ondithumileyo Album Cover"
                className="relative rounded-3xl shadow-2xl w-full animate-pulse-glow"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="bg-gradient-accent bg-clip-text text-transparent">
                    Ondithumileyo
                  </span>
                </h3>
                <p className="text-accent text-lg">(He Who Sent Me)</p>
              </div>

              <p className="text-lg leading-relaxed">
                'Ondithumileyo', meaning 'He Who Sent Me' in isiXhosa, is a testament to 
                Zuko S.A.'s calling, faith, and resilience. This project masterfully fuses 
                Afro-soul with gospel tones, traditional African influences, and modern rhythms.
              </p>

              <div className="space-y-4 pt-4">
                <Card className="p-4 border-l-4 border-l-accent bg-card/50">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Key Feature</h4>
                      <p className="text-sm text-muted-foreground">
                        Soul-stirring ballads with deep lyrical storytelling
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-l-primary bg-card/50">
                  <div className="flex items-start gap-3">
                    <Music className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Sound</h4>
                      <p className="text-sm text-muted-foreground">
                        Bridges tradition and modern Afro-soul
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-l-accent bg-card/50">
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Collaborations</h4>
                      <p className="text-sm text-muted-foreground">
                        Features with top South African talents
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="pt-6">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full md:w-auto"
                  asChild
                >
                  <a
                    href="https://cca.ffm.to/zukosaondithumileyo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stream ONDITHUMILEYO
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Released: 17 October 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Album;
