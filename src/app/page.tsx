import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';
import { ServiceCard } from '@/components/service-card';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Diamantaire à Saint-Étienne — Rachat de diamants & bijoux signés au juste prix',
  description:
    "Diamantaire à Saint-Étienne spécialisé dans le rachat de diamants, bijoux signés (Cartier, Van Cleef, Bulgari…), or et montres de luxe. Expertise gratuite, paiement immédiat, sur rendez-vous dans notre bureau d’échange à Saint-Étienne.",
  alternates: { canonical: '/' },
};

const services = [
  {
    title: 'Rachat de diamants',
    description: "Diamants montés ou nus, certifiés GIA, HRD ou non. Estimation transparente selon les 4C, paiement au juste prix.",
    href: '/rachat-de-diamants-saint-etienne',
    image: '/photos/diamants-collection.jpg',
    alt: 'Diamants à racheter à Saint-Étienne',
  },
  {
    title: 'Rachat de bijoux signés',
    description: 'Cartier, Van Cleef & Arpels, Bulgari, Chopard, Tiffany, Boucheron : expertise spécialisée des grandes maisons.',
    href: '/rachat-bijoux-signes-saint-etienne',
    image: '/photos/bijoux-obagem.jpg',
    alt: 'Rachat de bijoux signés à Saint-Étienne',
  },
  {
    title: 'Rachat de bijoux',
    description: 'Bagues, colliers, bracelets, boucles d’oreilles : bijoux anciens, modernes, sertis ou non, en or ou platine.',
    href: '/rachat-de-bijoux-saint-etienne',
    image: '/photos/bijoux-monte.jpg',
    alt: 'Rachat de bijoux anciens et modernes à Saint-Étienne',
  },
  {
    title: 'Rachat d’or',
    description: 'Or 18 carats, 22 carats, 24 carats — au cours du jour, pesée précise et paiement immédiat.',
    href: '/rachat-or-saint-etienne',
    image: '/photos/bijou-precieux.jpg',
    alt: 'Rachat d’or à Saint-Étienne',
  },
  {
    title: 'Montres de luxe',
    description: 'Rolex, Patek Philippe, Audemars Piguet, Cartier, Omega, Breitling : expertise et rachat horloger.',
    href: '/rachat-montres-luxe-saint-etienne',
    image: '/photos/atelier-1.jpg',
    alt: 'Rachat de montres de luxe à Saint-Étienne',
  },
  {
    title: 'Perles & objets précieux',
    description: 'Perles fines, perles de culture, pièces de joaillerie ancienne et objets de collection.',
    href: '/rachat-perles-saint-etienne',
    image: '/photos/bague-saphir.jpg',
    alt: 'Rachat de perles à Saint-Étienne',
  },
];

const steps = [
  {
    n: '01',
    title: 'Prenez rendez-vous',
    body: 'Par téléphone, email ou formulaire. Vous décrivez votre pièce (photos bienvenues) et nous fixons un créneau confidentiel à Saint-Étienne.',
  },
  {
    n: '02',
    title: 'Expertise gratuite',
    body: 'Notre diamantaire examine votre bijou (loupe 10x, balance certifiée, lecture de certificat). Tout est expliqué, rien n’est imposé.',
  },
  {
    n: '03',
    title: 'Offre transparente',
    body: 'Vous recevez une proposition de rachat ferme, basée sur les cours réels et la rareté de la pièce. Sans engagement.',
  },
  {
    n: '04',
    title: 'Paiement sécurisé',
    body: 'Si vous acceptez, paiement immédiat par virement bancaire. Discrétion absolue, traçabilité complète.',
  },
];

const reasons = [
  { t: 'Diamantaire indépendant', d: 'Pas d’intermédiaire : vous traitez directement avec l’expert qui estime votre pièce.' },
  { t: 'Cours réel du marché', d: 'Indexation sur les cours Rapaport (diamants) et LBMA (or), réévalués chaque jour.' },
  { t: 'Confidentialité totale', d: 'Rendez-vous discrets, aucune trace publique, aucune mise en vitrine.' },
  { t: 'Paiement immédiat', d: 'Virement bancaire le jour même de l’accord, justificatif fourni.' },
  { t: 'Conformité légale', d: 'Livre de police, contrat de cession, identité vérifiée — tout est en règle.' },
  { t: 'Toute la métropole', d: 'Saint-Étienne, Centre Saint-Étienne, Saint-Chamond, Firminy, Le Chambon-Feugerolles, Saint-Priest-en-Jarez, Saint-Étienne Quartier Bellevue…' },
];

const testimonials = [
  { name: 'Hélène D.', role: 'Centre Saint-Étienne', q: 'J’ai vendu un solitaire hérité de ma grand-mère. L’expert a pris le temps d’expliquer chaque étape, l’offre était nettement au-dessus des bijoutiers classiques.' },
  { name: 'Marc L.', role: 'Saint-Priest-en-Jarez', q: 'Très professionnel pour le rachat d’une Rolex Datejust. Rendez-vous rapide, paiement le jour même.' },
  { name: 'Sophie B.', role: 'Le Chambon-Feugerolles', q: 'Estimation gratuite et sans pression. J’ai été rassurée par la transparence sur les cours du diamant.' },
  { name: 'Patrick V.', role: 'Saint-Chamond', q: 'Rachat d’une parure Van Cleef. Expertise pointue, prix juste — je recommande sans hésiter.' },
];

const faqs = [
  {
    q: 'Comment se déroule l’estimation d’un diamant à Saint-Étienne ?',
    a: "L’expertise se fait en rendez-vous privé dans notre bureau d’échange à Saint-Étienne. Notre diamantaire examine votre pierre à la loupe 10x, vérifie le certificat (GIA, HRD, IGI) si disponible, et estime les 4C (carat, couleur, pureté, taille). L’estimation est gratuite et sans engagement.",
  },
  {
    q: 'Sur quels critères est calculé le prix de rachat d’un diamant ?',
    a: "Le prix repose sur les cours Rapaport en vigueur, ajustés selon la couleur (D à Z), la pureté (IF à I3), la taille (Excellent à Poor), le carat exact et la fluorescence. Les diamants certifiés GIA bénéficient d’une meilleure liquidité.",
  },
  {
    q: 'Rachetez-vous les bijoux signés Cartier, Van Cleef, Bulgari ?',
    a: "Oui, nous sommes spécialisés dans le rachat de bijoux des grandes maisons : Cartier, Van Cleef & Arpels, Bulgari, Tiffany, Chopard, Boucheron, Chaumet, Messika, Fred… La signature, l’état, le poinçon et la présence de l’écrin/certificat valorisent fortement la pièce.",
  },
  {
    q: 'Faut-il un certificat GIA pour vendre un diamant ?',
    a: "Non, vous pouvez vendre un diamant sans certificat — notre expert effectue alors une estimation visuelle. Toutefois, un certificat GIA ou HRD permet une transaction plus rapide et souvent un meilleur prix, car il garantit objectivement les caractéristiques.",
  },
  {
    q: 'Le paiement se fait-il immédiatement ?',
    a: "Oui. Une fois notre offre acceptée, le paiement est effectué par virement bancaire le jour même de la transaction. Vous repartez avec un contrat de cession en règle et un justificatif.",
  },
  {
    q: 'Vos services couvrent-ils toute la métropole saint-etiennenaise ?',
    a: "Oui, nous recevons sur rendez-vous dans notre bureau d’échange à Saint-Étienne des clients de toute la métropole : Centre Saint-Étienne, Saint-Chamond, Firminy, Le Chambon-Feugerolles, Saint-Priest-en-Jarez, Saint-Étienne Saint-Genest-Lerpt, Saint-Étienne Quartier Bellevue, Roche-la-Molière…",
  },
];

export default function HomePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/photos/diamant-loupe.jpg"
            alt="Expertise diamant à Saint-Étienne"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/75 to-ink-900/90" />
        </div>

        <div className="container-x pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-ink-50 animate-fade-in">
              <p className="label text-gold-300">Diamantaire à Saint-Étienne — Auvergne-Rhône-Alpes</p>
              <h1 className="h1 mt-4 text-ink-50">
                Rachat de <em className="not-italic text-gold-300">diamants</em> et bijoux signés
                <br className="hidden md:block" />
                <span className="text-ink-200">au juste prix, à Saint-Étienne.</span>
              </h1>
              <p className="lead mt-5 text-ink-200 max-w-2xl">
                Expertise gratuite, paiement immédiat, confidentialité absolue. Spécialiste indépendant du rachat de diamants, bijoux Cartier, Van Cleef, Bulgari, Chopard, montres Rolex et or de tous carats — sur rendez-vous dans notre bureau d’échange à Saint-Étienne.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/estimation-gratuite" className="btn-gold">
                  Demander une estimation gratuite
                </Link>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-outline text-ink-50 border-ink-100/30 hover:bg-white/10">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.4 12.4 0 0 0 .68 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.4 12.4 0 0 0 2.81.68A2 2 0 0 1 22 16.92z"/></svg>
                  {site.phoneDisplay}
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-200">
                <li>· Rendez-vous sous 24 h</li>
                <li>· Paiement le jour même</li>
                <li>· Diamantaire indépendant</li>
                <li>· Cours Rapaport / LBMA</li>
              </ul>
            </div>

            <div className="lg:col-span-5 animate-rise">
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-2xl border border-ink-900/5">
                <ContactForm
                  variant="estimation"
                  category="Estimation (Home Hero)"
                  defaultSubject="Estimation gratuite"
                  source="home-hero"
                  headline="Estimation gratuite en 24 h"
                  intro="Décrivez votre pièce, notre diamantaire à Saint-Étienne vous rappelle avec une fourchette de prix."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES */}
      <Section id="services">
        <SectionHeading
          eyebrow="Nos rachats"
          title="Diamants, bijoux signés, or et montres de luxe"
          intro="Un seul interlocuteur, expert diamantaire à Saint-Étienne, pour estimer et racheter toutes vos pièces précieuses au juste prix du marché."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.href} {...s} />
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <section className="bg-ink-900 text-ink-100 relative overflow-hidden">
        <div className="absolute inset-0 -z-0 opacity-10">
          <Image src="/photos/diamants-precision.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="container-x py-20 md:py-28 relative">
          <SectionHeading
            eyebrow="Comment ça marche"
            title="Un parcours simple, transparent et confidentiel"
            intro="De la prise de contact au paiement, chaque étape est claire. Vous décidez à chaque instant."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl bg-ink-800/60 border border-white/5 p-6">
                <div className="font-display text-3xl text-gold-300">{s.n}</div>
                <h3 className="mt-3 font-display text-xl text-ink-50">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-300 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/comment-ca-marche" className="btn-gold">Voir le détail de notre processus</Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Pourquoi nous choisir"
              title="L’expertise d’un diamantaire indépendant à Saint-Étienne"
              intro="Nous ne sommes ni un comptoir d’or ni une bijouterie de quartier. Nous sommes un diamantaire, partenaire des plus grandes maisons, basé à Saint-Étienne."
            />
            <div className="mt-8 relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src="/photos/expertise-en-cours.jpg" alt="Diamantaire expert à Saint-Étienne" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.t} className="card p-6">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-100 text-gold-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7 7 .8-5.3 4.8L18 22l-6-3.6L6 22l1.3-7.4L2 9.8 9 9z"/></svg>
                </div>
                <h3 className="mt-4 font-display text-xl text-ink-900">{r.t}</h3>
                <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* BRANDS */}
      <section className="border-y border-ink-900/5 bg-ink-50/60">
        <div className="container-x py-14">
          <p className="label text-center">Maisons régulièrement rachetées</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-ink-700 font-display">
            {[...site.brands, ...site.watchBrands.slice(0, 6)].map((b) => (
              <span key={b} className="text-lg md:text-xl tracking-wide">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Section>
        <SectionHeading
          eyebrow="Quelques pièces rachetées"
          title="Notre savoir-faire en images"
          intro="Diamants taillés brillant, poire, ovale, émeraude ; bagues signées, parures et solitaires. Chaque pièce est expertisée individuellement."
        />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {[
            '/photos/bague-poire-gia.jpg',
            '/photos/diamant-poire.jpg',
            '/photos/diamant-bague-2ct.jpg',
            '/photos/diamant-156ct.jpg',
            '/photos/bague-solitaire.jpg',
            '/photos/solitaire-diamant.jpg',
            '/photos/bijou-ancien.jpg',
            '/photos/bague-saphir.jpg',
            '/photos/atelier-2.jpg',
            '/photos/atelier-3.jpg',
            '/photos/bijoux-rachat.jpg',
            '/photos/diamant-zoom.jpg',
          ].map((src, i) => (
            <div key={src} className={`relative overflow-hidden rounded-xl group ${i % 5 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}>
              <Image src={src} alt="Bijou rachaté à Saint-Étienne" fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <section className="bg-ink-50/60 border-y border-ink-900/5">
        <div className="container-x py-20">
          <SectionHeading eyebrow="Ils ont vendu chez nous" title="L’avis de nos clients de la métropole saint-etiennenaise" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <figure key={t.name} className="card p-6">
                <div className="flex gap-1 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431L24 9.75l-6 5.847 1.416 8.253L12 19.897 4.584 23.85 6 15.597 0 9.75l8.332-1.732z"/></svg>
                  ))}
                </div>
                <blockquote className="mt-3 text-ink-700 leading-relaxed">« {t.q} »</blockquote>
                <figcaption className="mt-4 text-sm text-ink-500">
                  <strong className="text-ink-900">{t.name}</strong> · {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Présents partout dans la métropole" title="Un diamantaire à Saint-Étienne, au service de toute la Loire" />
            <p className="lead mt-4">
              Que vous soyez à Saint-Étienne intra-muros ou dans une commune de la Loire, nos négociants vous reçoivent en rendez-vous privé dans un bureau d’échange à Saint-Étienne pour estimer vos diamants, bijoux signés et montres.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { name: 'Centre Saint-Étienne', href: '/vendre-bijoux-centre-saint-etienne' },
                { name: 'Saint-Chamond', href: '/vendre-bijoux-saint-chamond' },
                { name: 'Firminy', href: '/vendre-bijoux-firminy' },
                { name: 'Le Chambon-Feugerolles', href: '/vendre-bijoux-le-chambon-feugerolles' },
                { name: 'Saint-Priest-en-Jarez', href: '/vendre-bijoux-saint-priest-en-jarez' },
                { name: 'Saint-Genest-Lerpt', href: '/vendre-bijoux-saint-genest-lerpt' },
                { name: 'Quartier Bellevue', href: '/vendre-bijoux-bellevue' },
                { name: 'Roche-la-Molière', href: '/vendre-bijoux-roche-la-moliere' },
              ].map((q) => (
                <Link key={q.href} href={q.href} className="rounded-lg border border-ink-900/10 px-4 py-2.5 text-sm hover:border-gold-400 hover:bg-gold-50/40 transition-colors">
                  {q.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-[5/4] rounded-2xl overflow-hidden">
              <Image src="/photos/atelier-1.jpg" alt="Cabinet de diamantaire à Saint-Étienne" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="Vos questions" title="Tout savoir sur le rachat de diamants à Saint-Étienne" />
        <div className="mt-10 grid gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="group card p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h3 className="font-display text-lg md:text-xl text-ink-900">{f.q}</h3>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink-50 text-ink-700 transition-transform group-open:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                </span>
              </summary>
              <p className="mt-3 text-ink-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/faq" className="btn-outline">Voir toutes les questions</Link>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-ink-900 to-ink-800 text-ink-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-0 opacity-30">
          <Image src="/photos/diamants-collection.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="container-x py-20 md:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="label text-gold-300">Estimation gratuite à Saint-Étienne</p>
              <h2 className="h2 mt-3 text-ink-50">Combien vaut réellement votre diamant ou bijou signé ?</h2>
              <p className="lead mt-4 text-ink-200">
                Envoyez-nous photos et descriptif : sous 24 h ouvrées, vous recevez une fourchette d’estimation transparente, sans engagement.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/estimation-gratuite" className="btn-gold">Estimation en 24 h</Link>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-outline text-ink-50 border-white/30 hover:bg-white/10">
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-2xl text-ink-900">
              <ContactForm variant="full" category="Demande générale" source="home-bottom" headline="Une question ?" intro="Le diamantaire vous répond personnellement." />
            </div>
          </div>
        </div>
      </section>

      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
