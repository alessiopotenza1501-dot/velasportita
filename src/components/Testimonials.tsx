import { Star } from "lucide-react";
const testimonials = [{
  id: 1,
  name: "Marco Rossi",
  location: "Milan, Italy",
  text: "Exceptional quality and timeless style. These shoes are perfect for the boardroom and beyond.",
  rating: 5
}, {
  id: 2,
  name: "Sofia Bianchi",
  location: "Rome, Italy",
  text: "Elegant, comfortable, and beautifully crafted. Vela has become my go-to for every occasion.",
  rating: 5
}, {
  id: 3,
  name: "Luca Ferrari",
  location: "Turin, Italy",
  text: "True Italian quality with refined design. These classic shoes are worth every euro.",
  rating: 5
}];
const Testimonials = () => {
  return <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">Cosa dicono i nostri clienti</h2>
          <p className="text-lg text-muted-foreground">
            Trusted by discerning professionals worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;