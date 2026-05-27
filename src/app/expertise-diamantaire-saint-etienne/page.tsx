import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';

export const metadata: Metadata = {
  title: 'Expertise diamantaire à Saint-Étienne — Gemmologie, certification, cours Rapaport',
  description:
    "Expert diamantaire à Saint-Étienne : gemmologie, lecture de certificats GIA/HRD/IGI, application des cours Rapaport et LBMA. Méthode professionnelle pour une expertise fiable.",
  alternates: { canonical: '/expertise-diamantaire-saint-etienne' },
};

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/photos/diamants-expertise.jpg" alt="Expertise diamantaire à Saint-Étienne" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/70 to-ink-900/85" />
        </div>
        <div className="container-x pt-20 pb-16 md:pt-28 text-ink-50">
          <p className="label text-gold-300">Méthode</p>
          <h1 className="h1 mt-4 text-ink-50">Une expertise gemmologique de niveau professionnel</h1>
          <p className="lead mt-5 max-w-2xl text-ink-200">
            Nos outils, notre méthode et nos références : tout ce qu’il faut pour une estimation juste et défendable de votre diamant, bijou signé, montre ou or.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="Nos outils" title="Le matériel d’un diamantaire" intro="Estimer une pierre précieuse demande un équipement spécifique et une formation continue. Voici les instruments que nos négociants utilisent en bureau d’échange." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: 'Loupe 10x triplet aplanétique', d: 'Standard mondial des diamantaires pour l’examen visuel : pureté, taille, fluorescence visible.' },
            { t: 'Balance certifiée 0,001 g', d: 'Pesée précise des diamants et de l’or, étalonnée régulièrement.' },
            { t: 'Sonde diamant', d: 'Discrimination diamant vs imitations (zircone, moissanite, verre).' },
            { t: 'Lampe UV', d: 'Détection de fluorescence (None, Faint, Medium, Strong) : élément de cote.' },
            { t: 'Spectromètre XRF', d: 'Détermination de la teneur exacte des alliages d’or et de platine.' },
            { t: 'Cours Rapaport hebdo', d: 'Référence mondiale pour le prix du diamant taillé selon couleur, pureté, carat.' },
          ].map((tool) => (
            <div key={tool.t} className="card p-6">
              <h3 className="font-display text-xl text-ink-900">{tool.t}</h3>
              <p className="mt-2 text-ink-600 leading-relaxed">{tool.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-ink-50/60 border-y border-ink-900/5">
        <div className="container-x py-20">
          <SectionHeading eyebrow="Les 4C" title="La grille universelle d’évaluation des diamants" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { l: 'Carat', d: '1 ct = 0,2 g. La valeur progresse plus vite que linéairement.', img: '/photos/tailles-diamants.jpg' },
              { l: 'Color', d: 'Échelle D (incolore) → Z (jaune). D, E, F sont les plus recherchées.', img: '/photos/diamants-precision.jpg' },
              { l: 'Clarity', d: 'IF, VVS1, VVS2, VS1, VS2, SI1, SI2, I1, I2, I3.', img: '/photos/diamant-loupe.jpg' },
              { l: 'Cut', d: 'Excellent, Very Good, Good, Fair, Poor : qualité de la taille.', img: '/photos/diamants-collection.jpg' },
            ].map((c) => (
              <div key={c.l} className="card overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={c.img} alt={c.l} fill sizes="25vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-ink-900">{c.l}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeading eyebrow="Laboratoires de référence" title="Pourquoi le certificat compte" />
            <div className="mt-6 space-y-4 text-ink-700 leading-relaxed text-[17px]">
              <p>Un certificat émis par un laboratoire reconnu (GIA, HRD, IGI) atteste objectivement des caractéristiques d’un diamant. Cela facilite la transaction et garantit la transparence pour le vendeur comme pour l’acheteur.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>GIA</strong> — Gemological Institute of America. Référence mondiale, créateur des 4C. La cote la plus liquide.</li>
                <li><strong>HRD</strong> — Hoge Raad voor Diamant, Anvers. Très respecté en Europe.</li>
                <li><strong>IGI</strong> — International Gemological Institute. Largement utilisé, notamment pour les diamants synthétiques (LGD).</li>
              </ul>
              <p>Notre diamantaire lit chaque certificat (numéro, gravure laser sur la rondiste, qualités attestées) et peut, si vous le souhaitez, organiser une certification complémentaire pour valoriser votre pierre.</p>
            </div>
            <div className="mt-6">
              <Link href="/estimation-gratuite" className="btn-gold">Faire estimer mon diamant</Link>
            </div>
          </div>
          <div>
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-2xl">
              <ContactForm variant="estimation" category="Expertise gemmologique" defaultSubject="Expertise gemmologique" source="expertise-page" headline="Demande d’expertise" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
