import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

export const SEO = ({
  title = "Vela Sport Italia - Scarpe Classiche Italiane in Pelle",
  description = "Eleganza italiana senza tempo. Scarpe classiche in pelle per uomo e donna. Scopri calzature italiane premium - scarpe eleganti, stivali, mocassini. Made in Italy.",
  keywords = "scarpe italiane, calzature classiche, scarpe pelle uomo, scarpe pelle donna, scarpe eleganti, stivali italiani, mocassini, made in italy, scarpe formali, calzature artigianali",
  image = "https://storage.googleapis.com/gpt-engineer-file-uploads/QxExOJ4yh3e1JRofxzSZAhvHLGr2/uploads/1762775987723-logovela_upscayl_4x_upscayl_4x.jpg",
  url = "https://velasportita.lovable.app",
  type = "website",
  structuredData,
}: SEOProps) => {
  const fullTitle = title.includes("Vela Sport Italia") ? title : `${title} | Vela Sport Italia`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
