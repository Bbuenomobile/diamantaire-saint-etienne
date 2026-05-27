import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact — Diamantaire à Saint-Étienne',
  description: "Contactez votre diamantaire à Saint-Étienne : téléphone, email, formulaire. Rendez-vous dans un bureau d’échange privé à Saint-Étienne, expertise gratuite et confidentielle.",
  alternates: { canonical: '/contact' },
};

export default function Page() {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact — ' + site.name,
    url: site.url + '/contact',
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/photos/atelier-3.jpg" alt="Contact diamantaire à Saint-Étienne" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/70 to-ink-900/90" />
        </div>
        <div className="container-x pt-20 pb-12 md:pt-28 text-ink-50">
          <p className="label text-gold-300">Diamantaire à Saint-Étienne</p>
          <h1 className="h1 mt-4 text-ink-50">Contact & rendez-vous</h1>
          <p className="lead mt-4 max-w-2xl text-ink-200">
            Trois manières de nous joindre : téléphone, email, ou formulaire. Nous répondons rapidement, sous 24 h ouvrées.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-5 space-y-6">
            <div className="card p-6">
              <p className="label">Téléphone</p>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="mt-2 block font-display text-3xl text-ink-900 hover:text-gold-700">{site.phoneDisplay}</a>
              <p className="mt-2 text-sm text-ink-600">Du lundi au samedi, 10 h – 19 h.</p>
            </div>
            <div className="card p-6">
              <p className="label">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block font-display text-2xl text-ink-900 hover:text-gold-700">{site.email}</a>
              <p className="mt-2 text-sm text-ink-600">Joignez photos & description : pré-estimation sous 24 h.</p>
            </div>
            <div className="card p-6">
              <p className="label">Adresse</p>
              <p className="mt-2 font-display text-xl text-ink-900">{site.address.street}</p>
              <p className="text-sm text-ink-700">{site.address.postalCode} {site.address.city}, {site.address.region}</p>
              <p className="mt-2 text-xs text-ink-500">Sur rendez-vous exclusivement. Confidentialité absolue.</p>
            </div>
            <div className="card p-6">
              <p className="label">Horaires</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-ink-700">
                    <span>{h.day}</span>
                    <span className={h.open === 'Fermé' ? 'text-ink-400' : ''}>
                      {h.open === 'Fermé' ? 'Fermé' : `${h.open} – ${h.close}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="lg:col-span-7">
            <div className="card p-6 md:p-8">
              <ContactForm
                variant="full"
                category="Contact"
                defaultSubject="Prise de contact"
                source="contact-page"
                headline="Envoyer un message"
                intro="Notre diamantaire vous répond personnellement."
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Plan d’accès" title="Bureau d’échange à Saint-Étienne, sur rendez-vous" intro="Adresse précise communiquée à la confirmation du rendez-vous, pour préserver la confidentialité de tous les clients." />
        <div className="mt-8 overflow-hidden rounded-2xl border border-ink-900/5">
          <iframe
            title="Plan Saint-Étienne"
            src="https://www.openstreetmap.org/export/embed.html?bbox=3.026%2C50.620%2C3.088%2C50.640&layer=mapnik&marker=50.6292%2C3.0573"
            width="100%"
            height="420"
            loading="lazy"
            style={{ border: 0 }}
          />
        </div>
      </Section>

      <Script id="ld-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
    </>
  );
}
