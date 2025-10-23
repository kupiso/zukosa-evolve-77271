import { Button } from "@/components/ui/button";
import { Music, Mic2, Radio, Guitar } from "lucide-react";
import heroImage from "@/assets/hero-artist.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated musical icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Music className="absolute top-20 left-10 h-12 w-12 text-accent/20 animate-float" />
        <Mic2 className="absolute top-40 right-20 h-16 w-16 text-primary/20 animate-float" style={{
        animationDelay: "1s"
      }} />
        <Radio className="absolute bottom-40 left-20 h-14 w-14 text-accent/20 animate-float" style={{
        animationDelay: "2s"
      }} />
        <Guitar className="absolute bottom-20 right-40 h-12 w-12 text-primary/20 animate-float" style={{
        animationDelay: "1.5s"
      }} />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">MULTI AWARD WINNING MUSICIAN• PRODUCER & PERFORMER</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Zuko SA's
              </span>{" "}
              World
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg">
              Afro-soul & Afro-pop artist bringing healing and inspiration through music. 
              Experience the sound that touches souls.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" onClick={() => scrollToSection("music")} className="group">
                <Music className="mr-2 h-5 w-5 group-hover:animate-pulse-glow" />
                Listen Now
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("booking")}>
                Book Zuko
              </Button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <img src={heroImage} alt="Zuko SA" className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;