import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = [
    {
      title: "The Art of Italian Shoemaking",
      excerpt: "Discover the centuries-old traditions that make Italian footwear legendary.",
      date: "December 15, 2024",
      image: "/placeholder.svg",
    },
    {
      title: "Choosing the Right Running Shoe",
      excerpt: "Expert tips on finding the perfect pair for your running style and goals.",
      date: "December 10, 2024",
      image: "/placeholder.svg",
    },
    {
      title: "Performance Technology Explained",
      excerpt: "How modern innovation enhances traditional craftsmanship.",
      date: "December 5, 2024",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Our Blog
              </h1>
              <p className="text-xl text-muted-foreground">
                Stories, tips, and insights from the world of performance footwear
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post, index) => (
                <article key={index} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-secondary" />
                  <div className="p-6">
                    <p className="text-sm text-primary font-semibold mb-2">{post.date}</p>
                    <h2 className="text-2xl font-heading font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <a href="#" className="text-primary font-semibold hover:underline">
                      Read More →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
