import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marco Rossi",
    location: "Milan, Italy",
    text: "The best running shoes I've ever owned. The comfort and support are unmatched!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sofia Bianchi",
    location: "Rome, Italy",
    text: "Perfect blend of style and performance. I wear them for workouts and casual outings.",
    rating: 5,
  },
  {
    id: 3,
    name: "Luca Ferrari",
    location: "Turin, Italy",
    text: "True Italian quality. These shoes are worth every euro. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied athletes worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
