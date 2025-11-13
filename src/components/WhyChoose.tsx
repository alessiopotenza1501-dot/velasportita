import { Award, Shield, Sparkles, ThumbsUp } from "lucide-react";

const WhyChoose = () => {
  const benefits = [
    {
      icon: Award,
      title: "Qualità Premium Certificata",
      points: [
        "Pelle italiana naturale selezionata",
        "Controllo qualità rigoroso su ogni paio",
        "Materiali certificati e sostenibili"
      ]
    },
    {
      icon: Sparkles,
      title: "Artigianato Tradizionale",
      points: [
        "Lavorazione manuale esperta",
        "Tecniche calzaturiere storiche",
        "Maestri artigiani italiani"
      ]
    },
    {
      icon: Shield,
      title: "Garanzia e Durabilità",
      points: [
        "Costruzione robusta e resistente",
        "Suole in cuoio di alta qualità",
        "Investimento che dura negli anni"
      ]
    },
    {
      icon: ThumbsUp,
      title: "Stile Senza Tempo",
      points: [
        "Design classico italiano",
        "Eleganza per ogni occasione",
        "Comfort superiore garantito"
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Perché Scegliere le Nostre <strong>Scarpe Italiane</strong>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <strong>Calzature artigianali</strong> che uniscono tradizione, qualità e stile. Scopri cosa rende uniche le nostre <strong>scarpe classiche Made in Italy</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-center text-foreground">
                  {benefit.title}
                </h3>
                <ul className="space-y-2">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>{point.split(' ')[0]}</strong> {point.split(' ').slice(1).join(' ')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Le nostre <strong>scarpe in pelle italiana</strong> sono la scelta perfetta per chi cerca <strong>eleganza classica</strong>, <strong>comfort duraturo</strong> e <strong>qualità artigianale</strong>. 
            Ogni paio racconta una storia di <strong>tradizione calzaturiera</strong> e <strong>maestria italiana</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
