import { Music, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/ZukoSAmusic", label: "Facebook" },
    { icon: Instagram, url: "https://www.instagram.com/zuko_sa", label: "Instagram" },
    { icon: Twitter, url: "https://twitter.com/Zuko_SA", label: "Twitter" },
    { icon: Youtube, url: "https://www.youtube.com/channel/UCjCb0u0fMnfyqyB4d_2VZtQ", label: "YouTube" },
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Music className="h-8 w-8 text-accent" />
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Zuko SA
                </span>
              </div>
              <p className="text-muted-foreground">
                Afro-soul & Afro-pop artist bringing healing and inspiration through music.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-accent">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#album" className="hover:text-accent transition-colors">
                    Album
                  </a>
                </li>
                <li>
                  <a href="#music" className="hover:text-accent transition-colors">
                    Music
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-accent transition-colors">
                    Booking
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-accent">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2025 Zuko SA. All rights reserved.</p>
            <p className="mt-2">
              Website redesigned with{" "}
              <span className="text-accent">modern elegance</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
