import Header from "@/components/Header";
import Footer from "@/components/Footer";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Our Story
              </h1>
              <p className="text-xl text-muted-foreground">
                Where Italian craftsmanship meets modern athletic innovation
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl font-heading font-bold mb-6">
                  Born in Italy, Built for Performance
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded in the heart of Italy, Vela Sport Italia represents the perfect fusion of centuries-old artisan traditions and cutting-edge athletic technology. Every shoe we create is a testament to our commitment to excellence.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Our master craftsmen use only the finest materials, ensuring each pair meets the highest standards of quality, comfort, and durability. From the first stitch to the final inspection, we never compromise.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe that performance and style should never be mutually exclusive. That's why every Vela shoe is designed to help you achieve your goals while looking your absolute best.
                </p>
              </div>
              
              <div>
                <img
                  src={craftsmanshipImage}
                  alt="Italian craftsmanship"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-heading font-bold text-center mb-12">
                Our Values
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">Quality First</h3>
                  <p className="text-muted-foreground">
                    We use only premium materials and meticulous craftsmanship to ensure every pair exceeds expectations.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously push boundaries, integrating the latest technology with traditional techniques.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We're committed to reducing our environmental impact through responsible sourcing and production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
