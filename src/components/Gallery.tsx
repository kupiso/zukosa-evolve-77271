import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Using placeholder images for demonstration
  const images = [
    { id: 1, alt: "Zuko SA Performance 1" },
    { id: 2, alt: "Zuko SA Studio 2" },
    { id: 3, alt: "Zuko SA Portrait 3" },
    { id: 4, alt: "Zuko SA Performance 4" },
    { id: 5, alt: "Zuko SA Event 5" },
    { id: 6, alt: "Zuko SA Recording 6" },
  ];

  return (
    <section id="gallery" className="py-24 relative bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-accent bg-clip-text text-transparent">Gallery</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Moments captured on and off stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card
                key={image.id}
                className="group overflow-hidden border-primary/20 hover:border-accent/50 transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="text-muted-foreground relative z-10">
                    {image.alt}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Connect with original images from{" "}
            <a
              href="http://www.zukosa.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              zukosa.co.za
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
