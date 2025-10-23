import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Mail, Phone, Send } from "lucide-react";

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent! 🎵",
      description: "We'll get back to you soon to discuss your event.",
    });
    setFormData({ name: "", email: "", phone: "", eventType: "", details: "" });
  };

  return (
    <section id="booking" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Book <span className="bg-gradient-primary bg-clip-text text-transparent">Zuko SA</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Make your event unforgettable with live Afro-soul performances
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" />
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" />
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-accent" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+27 XX XXX XXXX"
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventType" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    Event Type
                  </Label>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                    required
                  >
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="party">Party</SelectItem>
                      <SelectItem value="graduation">Graduation</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Event Details</Label>
                <Textarea
                  id="details"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us about your event, date, location, and any special requirements..."
                  rows={5}
                  required
                  className="bg-background/50"
                />
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Booking Request
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;
