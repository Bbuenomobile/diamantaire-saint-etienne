import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';

export const metadata: Metadata = {
  title: 'À propos — Notre maison de diamantaire à Saint-Étienne',
  description: "Diamantaire indépendant à Saint-Étienne, expert en rachat de diamants, bijoux signés, or et montres. 20+ années d’expérience, exigence de transparence.",
  alternates: { canonical: '/a-propos' },
};

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/photos/expertise-en-cours.jpg" alt="Diamantaire indépendant à Saint-Étienne" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/70 to-ink-900/85" />
        </div>
        <div className="container-x pt-20 pb-16 md:pt-28 text-ink-50">
          <p className="label text-gold-300">La maison</p>
          <h1 className="h1 mt-4 text-ink-50">Un diamantaire indépendant<br/>au cœur de Saint-Étienne</h1>
          <p className="lead mt-5 max-w-2xl text-ink-200">
            Notre métier : expertiser et racheter les diamants, bijoux signés, or et montres au juste prix du marché. Sans intermédiaire, sans pression, sans approximation.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-ink-700 leading-relaxed text-[17px]">
            <p>Depuis plus de vingt ans, nous accompagnons des particuliers et des familles dans la cession de leurs pièces les plus précieuses. Un héritage à liquider, un divorce, un changement de vie, une volonté de monétiser un bijou peu porté : chaque situation est singulière, et mérite une écoute attentive.</p>
            <p>Notre engagement est triple : <strong>transparence</strong> (chaque euro proposé est expliqué et documenté), <strong>compétence</strong> (formation continue en gemmologie, veille sur les cours Rapaport et LBMA, partenariats avec des laboratoires GIA/HRD), et <strong>confidentialité</strong> (rendez-vous privés, aucune communication publique, livre de police strictement professionnel).</p>
            <p>Notre réseau de négociants se déplace pour vous recevoir dans un bureau d’échange privé à Saint-Étienne, exclusivement sur rendez-vous. Nous recevons une clientèle métropolitaine — Centre Saint-Étienne, Saint-Chamond, Firminy, Le Chambon-Feugerolles, Saint-Priest-en-Jarez — et venue de toute la région Auvergne-Rhône-Alpes.</p>
            <p>Nous sommes diamantaires de métier : nous ne vendons pas de bijoux neufs, nous ne sommes pas un comptoir d’or anonyme. Notre seule activité est l’<em>expertise et le rachat</em> de pièces précieuses. C’est notre métier, c’est notre signature.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden col-span-2">
              <Image src="/photos/expertise-en-cours.jpg" alt="Expertise en cours à Saint-Étienne" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/photos/diamants-precision.jpg" alt="Diamants" fill sizes="20vw" className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/photos/diamant-loupe.jpg" alt="Loupe diamantaire" fill sizes="20vw" className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-ink-50/60 border-y border-ink-900/5">
        <div className="container-x py-20">
          <SectionHeading eyebrow="Nos engagements" title="Quatre principes qui guident chaque transaction" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: 'Transparence', d: 'Prix justifié point par point, basé sur les cours réels du marché.' },
              { t: 'Indépendance', d: 'Aucun intermédiaire : vous traitez avec l’expert qui estime la pièce.' },
              { t: 'Confidentialité', d: 'Rendez-vous discrets, aucune vitrine, aucune trace publique.' },
              { t: 'Conformité', d: 'Livre de police, contrat de cession, identité vérifiée — tout est légal.' },
            ].map((v) => (
              <div key={v.t} className="card p-6">
                <h3 className="font-display text-2xl text-ink-900">{v.t}</h3>
                <p className="mt-2 text-ink-600 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading eyebrow="Travailler avec nous" title="Comment se déroule un premier contact" />
            <ol className="mt-8 space-y-4 text-ink-700">
              {[
                'Vous nous envoyez photos et description par formulaire, email ou WhatsApp.',
                'Nous accusons réception et vous proposons une fourchette d’estimation sous 24 h.',
                'Si vous souhaitez aller plus loin, un négociant de notre réseau vous reçoit dans un bureau d’échange à Saint-Étienne.',
                'Notre offre est ferme et écrite. Vous décidez à votre rythme, sans pression.',
                'Acceptation : paiement par virement le jour même, contrat de cession en règle.',
              ].map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display text-2xl text-gold-600">0{i + 1}</span>
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/estimation-gratuite" className="btn-gold">Demander une estimation</Link>
              <Link href="/comment-ca-marche" className="btn-outline">Voir le processus détaillé</Link>
            </div>
          </div>
          <div>
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-2xl">
              <ContactForm variant="full" category="Prise de contact" headline="Une question ?" source="a-propos" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
