import type { Metadata } from 'next';
import Image from 'next/image';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';

export const metadata: Metadata = {
  title: 'Estimation gratuite à Saint-Étienne — Diamants, bijoux signés, or, montres',
  description:
    "Demandez une estimation gratuite et confidentielle à notre diamantaire à Saint-Étienne. Réponse sous 24 h, sans engagement. Diamants, bijoux signés, or, montres de luxe, perles.",
  alternates: { canonical: '/estimation-gratuite' },
};

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/photos/diamants-precision.jpg" alt="Estimation gratuite à Saint-Étienne" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/75 to-ink-900/90" />
        </div>
        <div className="container-x pt-20 pb-16 md:pt-28">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 text-ink-50">
              <p className="label text-gold-300">Service confidentiel</p>
              <h1 className="h1 mt-4 text-ink-50">Estimation gratuite, réponse sous 24 h.</h1>
              <p className="lead mt-5 text-ink-200">
                Décrivez votre pièce — diamant, bijou signé, montre, or, perle — et joignez quelques photos. Notre diamantaire à Saint-Étienne vous propose une fourchette d’estimation transparente, sans engagement.
              </p>
              <ul className="mt-8 space-y-3 text-ink-100">
                {[
                  '100 % confidentiel — aucun usage commercial de vos photos',
                  'Réponse sous 24 h ouvrées',
                  'Fourchette d’estimation gratuite, sans engagement',
                  'Rendez-vous au bureau d’échange à Saint-Étienne uniquement après estimation',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-gold-400/20 text-gold-300">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-2xl">
                <ContactForm
                  variant="estimation"
                  category="Estimation gratuite"
                  defaultSubject="Demande d’estimation gratuite"
                  source="estimation-page"
                  headline="Formulaire d’estimation gratuite"
                  intro="Tous les champs marqués d’un * sont requis. Plus vous donnez d’informations, plus l’estimation est précise."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <Section>
        <SectionHeading
          eyebrow="Ce que vous pouvez nous envoyer"
          title="Toutes les pièces précieuses sont éligibles à une estimation"
          intro="Plus vous joignez d’éléments (photos nettes recto/verso, certificat, poinçons, écrin), plus notre fourchette d’estimation est resserrée."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: 'Diamants', d: 'Pierres nues ou montées, certifiées ou non, à partir de 0,30 ct.' },
            { t: 'Bijoux signés', d: 'Cartier, Van Cleef, Bulgari, Chopard, Tiffany, Boucheron, Chaumet…' },
            { t: 'Or & alliances', d: 'Or 18k, 22k, 24k, lingots, pièces, dentaire, débris.' },
            { t: 'Montres de luxe', d: 'Rolex, Patek, AP, Cartier, Omega, Breitling, JLC, IWC…' },
            { t: 'Perles', d: 'Akoya, Tahiti, Mers du Sud, perles fines, rangs et parures.' },
            { t: 'Bijoux anciens', d: 'Art nouveau, Belle Époque, Art déco, parures de famille.' },
          ].map((c) => (
            <div key={c.t} className="card p-6">
              <h3 className="font-display text-2xl text-ink-900">{c.t}</h3>
              <p className="mt-2 text-ink-600 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
