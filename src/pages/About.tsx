import Header from "@/components/Header";
import Footer from "@/components/Footer";
import craftsmanshipImage from "@/assets/craftsmanship-formal.jpg";
const About = () => {
  return <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Our Heritage
              </h1>
              <p className="text-xl text-muted-foreground">
                Refined Italian craftsmanship meets timeless elegance
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl font-heading font-bold mb-6">Made in Italy, eleganza senza tempo</h2>
                <p className="text-lg text-muted-foreground mb-4">Vela Sport Italia rappresenta la migliore tradizione calzaturiera italiana, creando calzature classiche in pelle che incarnano un'eleganza senza tempo e uno stile sofisticato. Ogni scarpa è realizzata per soddisfare i rigorosi standard del moderno professionista.</p>
                <p className="text-lg text-muted-foreground mb-4">Utilizzando pellami italiani di prima qualità e tecniche consolidate, garantiamo che ogni paio offra qualità, comfort e durata eccezionali. Dalle eleganti Oxford ai raffinati stivaletti Chelsea, il nostro impegno per l'eccellenza non vacilla mai.</p>
                <p className="text-lg text-muted-foreground">Crediamo che il vero stile sia senza tempo. Ecco perché ogni scarpa Vela è progettata per completare il tuo guardaroba oggi e negli anni a venire: sofisticata, affidabile e inconfondibilmente italiana.</p>
              </div>
              
              <div>
                <img src={craftsmanshipImage} alt="Italian craftsmanship" className="w-full rounded-lg shadow-xl" />
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
                  <h3 className="text-2xl font-heading font-bold mb-3">Craftsmanship</h3>
                  <p className="text-muted-foreground">
                    Premium Italian leather and traditional techniques ensure exceptional quality in every pair.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">Timeless Design</h3>
                  <p className="text-muted-foreground">
                    Classic styles refined for contemporary elegance—shoes that never go out of fashion.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">Italian Heritage</h3>
                  <p className="text-muted-foreground">
                    Proudly Made in Italy with responsible sourcing and sustainable production practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;