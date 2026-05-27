import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';

export const metadata: Metadata = {
  title: 'Rachat de diamants à Saint-Étienne — Expertise gratuite, prix Rapaport',
  description:
    "Rachat de diamants à Saint-Étienne : pierres nues ou serties, certifiées GIA, HRD, IGI ou non. Expertise gratuite par un diamantaire indépendant, paiement immédiat au cours Rapaport.",
  alternates: { canonical: '/rachat-de-diamants-saint-etienne' },
  openGraph: { title: 'Rachat de diamants à Saint-Étienne', description: 'Expertise gratuite, paiement immédiat, prix Rapaport.' },
};

export default function Page() {
  return (
    <ServicePage
      slug="rachat-de-diamants-saint-etienne"
      category="Rachat de diamants"
      defaultSubject="Rachat de diamant"
      defaultItemType="Diamant nu"
      hero={{
        eyebrow: 'Diamantaire à Saint-Étienne',
        title: 'Rachat de diamants',
        titleHighlight: 'au cours Rapaport',
        intro:
          "Vous souhaitez vendre un diamant à Saint-Étienne ? Notre diamantaire expert estime gratuitement vos pierres — montées ou en vrac, certifiées ou non — et vous propose un prix de rachat indexé sur les cours internationaux du diamant.",
        image: '/photos/diamant-loupe.jpg',
        imageAlt: 'Rachat de diamant à Saint-Étienne — expertise à la loupe',
      }}
      introBlock={{
        eyebrow: 'Notre spécialité',
        title: 'L’expertise de votre diamant, par un professionnel installé à Saint-Étienne',
        paragraphs: [
          "Le rachat de diamants est un métier d’expert. Chaque pierre est unique, et son prix dépend de critères techniques précis : les fameux 4C — Carat, Color, Clarity, Cut — auxquels s’ajoutent la fluorescence, le polissage, la symétrie et la présence ou non d’un certificat GIA, HRD ou IGI.",
          "Notre diamantaire à Saint-Étienne évalue votre diamant en rendez-vous privé. Loupe 10x, balance certifiée, lecture du certificat lorsqu’il existe, comparaison aux derniers cours Rapaport : tout est vérifié devant vous. Vous repartez avec une estimation transparente, sans aucun engagement.",
          "Que votre diamant soit serti sur une bague, un pendentif ou des boucles d’oreilles, ou qu’il soit en vrac, nous l’étudions au cas par cas. Les diamants taille brillant, princesse, ovale, poire, marquise, émeraude, cœur, radiant ou Asscher sont tous rachetés.",
        ],
      }}
      criteria={{
        title: 'Les critères de valeur d’un diamant (4C)',
        items: [
          { label: 'Carat', text: 'Le poids exact, mesuré sur balance certifiée. Au-delà d’1 carat, la valeur progresse plus que proportionnellement.' },
          { label: 'Color', text: 'L’échelle GIA va de D (incolore) à Z (jaunâtre). Les diamants D, E, F sont les plus recherchés.' },
          { label: 'Clarity', text: 'De IF (pur) à I3 (incl. visibles). Les pureté VS1, VS2, VVS sont les plus liquides.' },
          { label: 'Cut', text: 'La taille — Excellent, Very Good, Good, Fair, Poor — conditionne le feu et l’éclat de la pierre.' },
        ],
      }}
      process={{
        title: 'De la photo à la cession : 4 étapes',
        steps: [
          { title: 'Pré-estimation', body: 'Envoyez photos, certificat éventuel et description. Réponse sous 24 h ouvrées avec fourchette de prix.' },
          { title: 'Rendez-vous à Saint-Étienne', body: 'Examen physique du diamant : loupe, balance, vérification du certificat. Le tout en bureau d’échange privé.' },
          { title: 'Offre ferme', body: 'Proposition de rachat écrite, basée sur les cours Rapaport et la rareté de votre pierre.' },
          { title: 'Paiement', body: 'En cas d’accord : contrat de cession + virement bancaire le jour même.' },
        ],
      }}
      gallery={[
        '/photos/diamant-loupe.jpg',
        '/photos/diamants-collection.jpg',
        '/photos/diamants-expertise.jpg',
        '/photos/diamants-precision.jpg',
        '/photos/diamant-156ct.jpg',
        '/photos/diamant-bague-2ct.jpg',
        '/photos/diamant-poire.jpg',
        '/photos/diamant-zoom.jpg',
        '/photos/bague-poire-gia.jpg',
        '/photos/tailles-diamants.jpg',
      ]}
      longContent={[
        {
          heading: 'Comment est calculé le prix de rachat d’un diamant ?',
          html: `<p>Le prix d’un diamant repose sur une matrice publiée chaque semaine par <strong>Rapaport</strong>, la référence mondiale du marché du diamant. Cette matrice croise la couleur (D à L) et la pureté (IF à I3) pour chaque palier de carat. Notre diamantaire applique ensuite des décotes ou des primes selon :</p>
          <ul>
            <li>la qualité de taille (Excellent / Very Good / Good / Fair / Poor) ;</li>
            <li>la fluorescence (None, Faint, Medium, Strong) ;</li>
            <li>la présence et la fraîcheur du certificat (GIA &gt; HRD &gt; IGI &gt; autres) ;</li>
            <li>la liquidité du marché pour ce type de pierre ;</li>
            <li>l’état général (rayures, éclats, retouches).</li>
          </ul>
          <p>À titre indicatif, un diamant 1.00 ct, G, VS1, taille Excellent, certifié GIA, sans fluorescence, se rachète aujourd’hui autour de plusieurs milliers d’euros. Mais seul un examen physique permet de fixer un prix juste.</p>`,
        },
        {
          heading: 'Vendre un diamant avec ou sans certificat',
          html: `<p>Un diamant <strong>certifié</strong> (GIA, HRD, IGI) garantit objectivement la couleur, la pureté, la taille et le carat. Cela facilite la transaction et permet souvent un meilleur prix : l’acheteur n’a pas à re-vérifier ce qui est déjà attesté.</p>
          <p>Sans certificat, le diamant peut tout à fait être racheté : notre diamantaire procède à une <em>estimation visuelle expert</em>. Pour les pierres importantes (à partir de 0.50 ct), nous pouvons proposer un envoi en laboratoire pour certification — ce qui peut augmenter sensiblement le prix de revente.</p>`,
        },
        {
          heading: 'Diamant monté : faut-il dessertir pour vendre ?',
          html: `<p>Non. Nous rachetons indifféremment les <strong>diamants montés</strong> (bagues solitaires, alliances, pendentifs, boucles d’oreilles, parures) et les <strong>diamants nus</strong>. Lorsque la monture présente une valeur propre (signature, or 18 carats, platine, design), elle est valorisée en plus du diamant. Dans le cas contraire, l’or de la monture est repris au cours du jour.</p>`,
        },
      ]}
      faqs={[
        { q: 'Comment se déroule l’expertise d’un diamant à Saint-Étienne ?', a: "L’expertise se déroule en rendez-vous privé. Nous examinons votre diamant à la loupe 10x, le pesons sur balance certifiée et lisons le certificat lorsqu’il existe. Tout est expliqué, vous repartez avec une estimation chiffrée." },
        { q: 'Faut-il un certificat GIA pour vendre un diamant ?', a: "Non, vous pouvez vendre un diamant sans certificat ; nous procédons alors à une estimation visuelle. Toutefois, un certificat GIA augmente souvent le prix et la rapidité de la transaction." },
        { q: 'Rachetez-vous les petits diamants (< 0,30 ct) ?', a: "Oui, dans le cadre du rachat de bijoux sertis. Pour les diamants seuls, à partir de 0,30 ct nous proposons une estimation indépendante." },
        { q: 'Le prix est-il négociable ?', a: "Notre offre repose sur les cours réels du marché ; nous expliquons précisément comment elle est construite. Une légère négociation reste possible selon la qualité documentaire et la rareté de la pierre." },
        { q: 'Le paiement est-il immédiat ?', a: "Oui. Après acceptation, virement bancaire le jour même, contrat de cession et inscription au livre de police." },
        { q: 'Mon diamant est ancien — perd-il de la valeur ?', a: "Pas nécessairement. Les diamants anciens taille mine, taille rose ou taille européenne ancienne peuvent avoir un intérêt collectionneur supérieur à un diamant moderne équivalent." },
      ]}
      related={[
        { label: 'Rachat de bijoux signés', href: '/rachat-bijoux-signes-saint-etienne' },
        { label: 'Rachat de bijoux', href: '/rachat-de-bijoux-saint-etienne' },
        { label: 'Rachat d’or', href: '/rachat-or-saint-etienne' },
        { label: 'Comment ça marche', href: '/comment-ca-marche' },
        { label: 'Notre expertise', href: '/expertise-diamantaire-saint-etienne' },
      ]}
    />
  );
}
