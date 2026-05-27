import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';

export const metadata: Metadata = {
  title: 'Comment ça marche — Rachat de bijoux & diamants à Saint-Étienne',
  description: "Le processus complet de rachat de bijoux et diamants à Saint-Étienne : prise de contact, expertise, offre, paiement. Transparent, confidentiel, conforme.",
  alternates: { canonical: '/comment-ca-marche' },
};

const steps = [
  {
    n: '01',
    t: 'Prise de contact',
    d: 'Vous nous envoyez photos et descriptif de votre pièce par formulaire, email ou WhatsApp. Indiquez si vous avez un certificat, une boîte ou des papiers.',
  },
  {
    n: '02',
    t: 'Pré-estimation',
    d: 'Sous 24 h ouvrées, vous recevez une première fourchette d’estimation basée sur les éléments transmis. Cette pré-estimation est gratuite et sans engagement.',
  },
  {
    n: '03',
    t: 'Rendez-vous à Saint-Étienne',
    d: 'Si vous souhaitez aller plus loin, nous organisons un rendez-vous avec un négociant de notre réseau dans un bureau d’échange à Saint-Étienne. Confidentialité totale, créneaux espacés pour préserver votre intimité.',
  },
  {
    n: '04',
    t: 'Expertise physique',
    d: 'Devant vous : examen à la loupe, pesée, test de teneur, lecture de certificat. Nous expliquons chaque vérification.',
  },
  {
    n: '05',
    t: 'Offre ferme',
    d: 'Nous établissons une offre écrite, détaillée poste par poste : valeur des pierres, du métal, de la signature, de l’époque. Vous décidez à votre rythme.',
  },
  {
    n: '06',
    t: 'Paiement immédiat',
    d: 'En cas d’acceptation : virement bancaire le jour même, contrat de cession en règle, inscription au livre de police. Tout est conforme à la législation française.',
  },
];

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/photos/atelier-2.jpg" alt="Processus de rachat à Saint-Étienne" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/70 to-ink-900/85" />
        </div>
        <div className="container-x pt-20 pb-16 md:pt-28 text-ink-50">
          <p className="label text-gold-300">Méthode</p>
          <h1 className="h1 mt-4 text-ink-50">Le rachat, étape par étape</h1>
          <p className="lead mt-5 max-w-2xl text-ink-200">Six étapes, du premier contact au paiement. Tout est clair, écrit, vérifiable.</p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <ol className="lg:col-span-7 space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="card p-6 md:p-8 grid grid-cols-[auto_1fr] gap-6">
                <span className="font-display text-5xl text-gold-500 leading-none">{s.n}</span>
                <div>
                  <h2 className="font-display text-2xl text-ink-900">{s.t}</h2>
                  <p className="mt-2 text-ink-600 leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-6 h-fit">
            <div className="card p-6">
              <p className="label">Documents requis</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                <li>· Pièce d’identité en cours de validité</li>
                <li>· Certificat / facture (si disponible)</li>
                <li>· Boîte, papiers, écrin (pour bijoux signés)</li>
                <li>· Coordonnées bancaires (RIB)</li>
              </ul>
            </div>
            <div className="card p-6">
              <p className="label">Engagements</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                <li>· Estimation gratuite, sans engagement</li>
                <li>· Confidentialité totale</li>
                <li>· Conformité légale (livre de police)</li>
                <li>· Paiement par virement le jour même</li>
              </ul>
            </div>
            <div className="card p-6">
              <p className="label">Démarrer</p>
              <p className="mt-2 text-sm text-ink-700">Une fourchette de prix sous 24 h ouvrées.</p>
              <Link href="/estimation-gratuite" className="btn-gold mt-4 w-full justify-center">Demander une estimation</Link>
            </div>
          </aside>
        </div>
      </Section>

      <section className="bg-ink-900 text-ink-50">
        <div className="container-x py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="label text-gold-300">Une dernière question ?</p>
              <h2 className="h2 mt-3 text-ink-50">Le diamantaire vous répond personnellement.</h2>
              <p className="lead mt-4 text-ink-200">Nous répondons toujours par retour ou par téléphone, généralement le jour même.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 md:p-8 text-ink-900 shadow-2xl">
              <ContactForm variant="full" category="Question méthode" source="comment-ca-marche" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
