import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Music = () => {
  const platforms = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/0LHMSltleAi3zHyRU8gYSt",
      color: "hover:text-[#1DB954]",
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/za/artist/zuko-sa/1330232874",
      color: "hover:text-[#FA243C]",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCjCb0u0fMnfyqyB4d_2VZtQ",
      color: "hover:text-[#FF0000]",
    },
  ];

  const albums = [
    {
      title: "ONDITHUMILEYO",
      subtitle: "Latest Release",
      url: "https://cca.ffm.to/zukosaondithumileyo",
    },
    {
      title: "UMKHONTO",
      subtitle: "Chart-topping Album",
      url: "https://cca.ffm.to/umkhonto",
    },
  ];

  return (
    <section id="music" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Listen on Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Favorite Platform
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Stream Zuko SA's music wherever you are
            </p>
          </div>

          {/* Streaming Platforms */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {platforms.map((platform) => (
              <Button
                key={platform.name}
                variant="outline"
                size="lg"
                asChild
                className={`transition-all ${platform.color}`}
              >
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                  {platform.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>

          {/* Featured Albums */}
          <div className="grid md:grid-cols-2 gap-8">
            {albums.map((album) => (
              <Card
                key={album.title}
                className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)] transition-all duration-300"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-accent mb-2">{album.subtitle}</p>
                    <h3 className="text-2xl font-bold">{album.title}</h3>
                  </div>
                  <Button variant="hero" className="w-full" asChild>
                    <a href={album.url} target="_blank" rel="noopener noreferrer">
                      Stream Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Top Songs Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Top Songs</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50 backdrop-blur border-primary/20">
                <h4 className="font-semibold mb-2">Ndim Endinguye</h4>
                <p className="text-sm text-muted-foreground">
                  A powerful declaration of identity and purpose
                </p>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur border-primary/20">
                <h4 className="font-semibold mb-2">
                  Qhawe Lam <span className="text-accent text-xs">ft Nwabisa G</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Double Platinum hit featured on Showmax's The Wife
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
