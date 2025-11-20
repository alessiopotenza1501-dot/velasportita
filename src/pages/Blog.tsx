import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { getBreadcrumbSchema } from "@/utils/structuredData";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const { t } = useTranslation();
  
  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", url: "https://velasportita.lovable.app" },
    { name: "Blog", url: "https://velasportita.lovable.app/blog" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Blog - Storie e Consigli sulle Scarpe Italiane | Vela Sport Italia"
        description={t('blog.subtitle')}
        keywords="blog scarpe, stile italiano, cura scarpe pelle, tendenze calzature"
        url="https://velasportita.lovable.app/blog"
        structuredData={breadcrumbData}
      />
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                {t('blog.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('blog.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString('it-IT', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-heading line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                    <Link to={`/blog/${post.slug}`} className="w-full">
                      <Button variant="outline" className="w-full group">
                        {t('blog.read_more')}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
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
