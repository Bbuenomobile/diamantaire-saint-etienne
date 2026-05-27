import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';

export const metadata: Metadata = {
  title: 'FAQ — Vos questions sur le rachat de diamants et bijoux à Saint-Étienne',
  description: "Toutes les réponses sur le rachat de diamants, bijoux signés, or et montres à Saint-Étienne : prix, certificats, paiement, légalité, confidentialité.",
  alternates: { canonical: '/faq' },
};

const groups = [
  {
    title: 'Avant l’expertise',
    items: [
      { q: 'Combien coûte une estimation ?', a: 'L’estimation est totalement gratuite, qu’elle se fasse à distance (par photos) ou en bureau d’échange, et sans aucun engagement.' },
      { q: 'Faut-il prendre rendez-vous ?', a: 'Oui. Le bureau d’échange reçoit uniquement sur rendez-vous, pour préserver la confidentialité de chaque client et permettre à l’expert de prendre le temps nécessaire.' },
      { q: 'Combien de pièces puis-je apporter ?', a: 'Autant que vous le souhaitez. Pour une parure ou un lot important, prévenez-nous afin que nous bloquions un créneau plus long.' },
      { q: 'Quels documents apporter le jour du rendez-vous ?', a: 'Une pièce d’identité en cours de validité, et, s’ils existent, le certificat ou la facture d’origine, la boîte, l’écrin et tout document utile.' },
    ],
  },
  {
    title: 'Diamants',
    items: [
      { q: 'À partir de quelle taille rachetez-vous un diamant ?', a: 'À partir de 0,30 carat pour un diamant isolé. En dessous, le diamant est valorisé dans le cadre du rachat de bijou.' },
      { q: 'Faut-il un certificat GIA ?', a: 'Non, ce n’est pas obligatoire. Un certificat GIA, HRD ou IGI accélère la transaction et favorise un meilleur prix, mais l’expertise visuelle reste possible sans.' },
      { q: 'Mon diamant est synthétique (LGD), est-il rachetable ?', a: 'Oui, mais à un prix sensiblement inférieur aux diamants naturels. Nous distinguons systématiquement diamants naturels et synthétiques (lab-grown).' },
      { q: 'Et si le diamant est endommagé ?', a: 'Les éclats, rayures profondes ou cassures réduisent la valeur. Notre expert estime la pierre en l’état ou évalue la décote d’une éventuelle retaille.' },
    ],
  },
  {
    title: 'Bijoux & or',
    items: [
      { q: 'Quel est le cours de l’or appliqué ?', a: 'Nous appliquons le cours LBMA du jour, mis à jour quotidiennement, avec une marge professionnelle transparente.' },
      { q: 'Acceptez-vous l’or dentaire ?', a: 'Oui : couronnes, bridges, alliages dentaires. Test de teneur systématique pour fixer un prix juste.' },
      { q: 'Mon bijou est cassé ou sans poinçon, est-il rachetable ?', a: 'Oui. Un bijou cassé conserve la valeur de son métal et de ses pierres. En l’absence de poinçon, nous testons la teneur à l’acide ou au spectromètre.' },
      { q: 'Différence avec un comptoir d’or ?', a: 'Un comptoir d’or paye au poids du métal. Un diamantaire valorise en plus les pierres, la signature, l’époque — souvent à un prix bien supérieur.' },
    ],
  },
  {
    title: 'Bijoux signés',
    items: [
      { q: 'Rachetez-vous sans la boîte ?', a: 'Oui, à un prix légèrement inférieur. La boîte, les papiers et l’écrin d’origine valorisent jusqu’à +20 % la pièce.' },
      { q: 'Comment authentifiez-vous une pièce signée ?', a: 'Poinçons, gravures de signature et numéro de série, qualité de fabrication, finition typique de la maison. En cas de doute, nous faisons appel à un confrère expert de la maison.' },
      { q: 'Quelles marques sont les plus recherchées ?', a: 'Cartier, Van Cleef & Arpels, Bulgari, Chopard, Tiffany, Boucheron, Chaumet, Messika, Fred — particulièrement leurs collections iconiques.' },
    ],
  },
  {
    title: 'Paiement & légalité',
    items: [
      { q: 'Quand suis-je payé(e) ?', a: 'Le jour même de l’acceptation, par virement bancaire. Un contrat de cession vous est remis, et la transaction est inscrite au livre de police.' },
      { q: 'Le paiement en espèces est-il possible ?', a: 'Non. La loi française interdit le paiement en espèces pour le rachat de métaux précieux par un professionnel. Le règlement se fait par virement.' },
      { q: 'Est-ce que je dois déclarer la cession ?', a: 'Sauf cas particulier, les ventes ponctuelles de bijoux personnels par des particuliers ne sont pas soumises à imposition. Nous vous remettons en revanche tous les justificatifs utiles.' },
      { q: 'Confidentialité ?', a: 'Le rendez-vous est privé. Vos données sont utilisées uniquement pour la transaction et ne sont communiquées à aucun tiers.' },
    ],
  },
];

export default function Page() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: groups.flatMap((g) => g.items).map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/photos/diamants-precision.jpg" alt="FAQ diamantaire Saint-Étienne" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/70 to-ink-900/85" />
        </div>
        <div className="container-x pt-20 pb-16 md:pt-28 text-ink-50">
          <p className="label text-gold-300">Foire aux questions</p>
          <h1 className="h1 mt-4 text-ink-50">Tout savoir avant de vendre.</h1>
          <p className="lead mt-4 max-w-2xl text-ink-200">Les questions les plus fréquentes posées par nos clients de la métropole saint-etiennenaise.</p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {groups.map((g) => (
              <div key={g.title}>
                <SectionHeading eyebrow={g.title} title="" />
                <div className="mt-2 grid gap-4">
                  {g.items.map((f) => (
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
              </div>
            ))}
          </div>
          <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
            <div className="card p-6 md:p-8">
              <h3 className="h3">Votre question n’est pas listée ?</h3>
              <p className="mt-2 text-ink-600">Écrivez-nous, nous vous répondons sous 24 h ouvrées.</p>
              <div className="mt-5">
                <ContactForm variant="compact" category="Question FAQ" source="faq" />
              </div>
              <p className="mt-4 text-xs text-ink-500">
                Ou consultez aussi : <Link className="underline" href="/comment-ca-marche">le processus</Link> · <Link className="underline" href="/expertise-diamantaire-saint-etienne">notre expertise</Link>
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Script id="ld-faq-full" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
