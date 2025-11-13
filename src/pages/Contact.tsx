import { useTranslation } from "react-i18next";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SEO } from "@/components/SEO";
import { getBreadcrumbSchema } from "@/utils/structuredData";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", url: "https://velasportita.lovable.app" },
    { name: t('contact.title'), url: "https://velasportita.lovable.app/contact" }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:info@velasportitalia.it?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    toast.success(t('contact.title'), {
      description: "Il tuo client email si aprirà a breve."
    });
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${t('contact.title')} - Vela Sport Italia`}
        description={t('contact.subtitle')}
        keywords="contatti vela sport, scarpe italiane contatti, carinaro campania"
        url="https://velasportita.lovable.app/contact"
        structuredData={breadcrumbData}
      />
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-heading font-bold mb-6">{t('contact.form_title')}</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.name')}</label>
                    <Input 
                      placeholder={t('contact.name')}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.email')}</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.subject')}</label>
                    <Input 
                      placeholder={t('contact.subject')}
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
                    <Textarea 
                      placeholder={t('contact.message')}
                      className="min-h-[150px]"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    {t('contact.send')}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-6">{t('contact.info_title')}</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t('contact.address_title')}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {t('contact.address')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t('contact.phone_title')}</h3>
                        <a 
                          href="tel:+390815021447" 
                          className="text-muted-foreground hover:text-primary transition-colors block"
                        >
                          {t('contact.phone')}
                        </a>
                        <p className="text-muted-foreground text-sm mt-1">
                          {t('contact.fax')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t('contact.email_title')}</h3>
                        <a 
                          href="mailto:info@velasportitalia.it" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@velasportitalia.it
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-heading font-bold text-xl mb-3">{t('contact.hours_title')}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>{t('contact.hours_weekday')}</p>
                    <p>{t('contact.hours_saturday')}</p>
                    <p>{t('contact.hours_sunday')}</p>
                  </div>
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

export default Contact;
