import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Join the Crew
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get 10% off your first order and exclusive access to new releases
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-primary-foreground text-accent border-0 h-12 rounded-full px-6"
              required
            />
            <Button
              type="submit"
              variant="hero-outline"
              size="lg"
              className="rounded-full px-8"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-sm mt-4 opacity-75">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
