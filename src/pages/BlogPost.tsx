import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";
import { getBreadcrumbSchema } from "@/utils/structuredData";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", url: "https://velasportita.lovable.app" },
    { name: "Blog", url: "https://velasportita.lovable.app/blog" },
    { name: post.title, url: `https://velasportita.lovable.app/blog/${post.slug}` }
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://velasportita.lovable.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vela Sport Italia",
      "logo": {
        "@type": "ImageObject",
        "url": "https://storage.googleapis.com/gpt-engineer-file-uploads/QxExOJ4yh3e1JRofxzSZAhvHLGr2/uploads/1762775987723-logovela_upscayl_4x_upscayl_4x.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://velasportita.lovable.app/blog/${post.slug}`
    },
    "keywords": post.keywords.join(", ")
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${post.title} | Blog Vela Sport Italia`}
        description={post.excerpt}
        keywords={post.keywords.join(", ")}
        url={`https://velasportita.lovable.app/blog/${post.slug}`}
        image={post.image}
        type="article"
        structuredData={[breadcrumbData, articleSchema]}
      />
      <Header />
      <main>
        <article className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t('blog.back_to_blog')}
                </Button>
              </Link>

              <div className="mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>

              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('it-IT', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <p className="text-xl text-muted-foreground">
                  {post.excerpt}
                </p>
              </header>

              <div 
                className="prose prose-lg max-w-none
                  prose-headings:font-heading prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-strong:text-primary prose-strong:font-semibold
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content.split('\n').map(line => {
                  if (line.startsWith('## ')) {
                    return `<h2>${line.substring(3)}</h2>`;
                  } else if (line.startsWith('### ')) {
                    return `<h3>${line.substring(4)}</h3>`;
                  } else if (line.trim() === '') {
                    return '';
                  } else {
                    return `<p>${line}</p>`;
                  }
                }).join('') }}
              />

              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  {post.keywords.slice(0, 6).map((keyword, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
