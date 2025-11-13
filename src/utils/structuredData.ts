export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vela Sport Italia",
  url: "https://velasportita.lovable.app",
  logo: "https://storage.googleapis.com/gpt-engineer-file-uploads/QxExOJ4yh3e1JRofxzSZAhvHLGr2/uploads/1762775987723-logovela_upscayl_4x_upscayl_4x.jpg",
  description: "Eleganza italiana senza tempo. Scarpe classiche in pelle per uomo e donna.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Strada Consortile, ASI – Polo UNICA – Lotto B16 Bis",
    addressLocality: "Carinaro",
    addressRegion: "CE",
    postalCode: "81032",
    addressCountry: "IT"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+39-081-502-14-47",
    email: "info@velasportitalia.it",
    contactType: "customer service",
    areaServed: "IT",
    availableLanguage: ["Italian", "English"]
  },
  sameAs: [
    "https://facebook.com/velasportitalia",
    "https://instagram.com/velasportitalia"
  ]
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vela Sport Italia",
  url: "https://velasportita.lovable.app",
  description: "Scarpe classiche italiane in pelle per uomo e donna",
  publisher: {
    "@type": "Organization",
    name: "Vela Sport Italia"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://velasportita.lovable.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const getProductSchema = (product: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.node.title,
  description: product.node.description,
  image: product.node.images?.edges?.[0]?.node?.url || "",
  brand: {
    "@type": "Brand",
    name: "Vela Sport Italia"
  },
  offers: {
    "@type": "Offer",
    url: `https://velasportita.lovable.app/product/${product.node.handle}`,
    priceCurrency: product.node.priceRange.minVariantPrice.currencyCode,
    price: product.node.priceRange.minVariantPrice.amount,
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Vela Sport Italia"
    }
  }
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});
