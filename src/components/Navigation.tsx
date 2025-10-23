import { useState, useEffect } from "react";
import { Music } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Zuko SA
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("album")}
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              Album
            </button>
            <button
              onClick={() => scrollToSection("music")}
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              Music
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
