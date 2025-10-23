import { Award, Music, TrendingUp, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const achievements = [
    { icon: Trophy, label: "SAMA Nominee", value: "2024" },
    { icon: Award, label: "Metro FM Award", value: "Winner" },
    { icon: Music, label: "Double Platinum", value: "iQhawe Lam" },
    { icon: TrendingUp, label: "Netflix", value: "2 Series" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet <span className="bg-gradient-accent bg-clip-text text-transparent">Zuko SA</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From Idutywa, Eastern Cape, to stages across South Africa
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {achievements.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300 bg-card/50 backdrop-blur border-primary/20"
              >
                <item.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-bold text-accent mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </Card>
            ))}
          </div>

          {/* Bio */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Zuko SA (born Zuko Kupiso) is a South African Afro-soul artist whose musical career 
                was shaped by his pastor father and exposure to music in church. His parents' 
                encouragement and prayers, along with life experiences, have been major inspirations 
                for his music.
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                <div>
                  <h3 className="text-accent font-semibold mb-3 text-lg">Latest Release</h3>
                  <p className="text-foreground/90">
                    <strong>ONDITHUMILEYO</strong> (He Who Sent Me) Album
                    <br />
                    <span className="text-muted-foreground text-sm">Released 17 October 2025</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-accent font-semibold mb-3 text-lg">Breakout Single</h3>
                  <p className="text-foreground/90">
                    <strong>"iQhawe Lam"</strong> - Double Platinum
                    <br />
                    <span className="text-muted-foreground text-sm">Featured on Showmax's The Wife</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-accent font-semibold mb-3 text-lg">Recognition</h3>
                  <p className="text-foreground/90">
                    <strong>SAMA Nominee 2024</strong>
                    <br />
                    <span className="text-muted-foreground text-sm">Best Afro-Pop Album (Umkhonto)</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-accent font-semibold mb-3 text-lg">Collaboration</h3>
                  <p className="text-foreground/90">
                    <strong>"Andikalibali"</strong> with Vusi Nova
                    <br />
                    <span className="text-muted-foreground text-sm">Metro FM Award Winner - Best Afro Soul</span>
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed pt-6 border-t border-border italic">
                His music blends Afro-soul and Afro-pop, inspired by faith, hope, and real-life stories. 
                Zuko aims to heal and inspire listeners with every song.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
