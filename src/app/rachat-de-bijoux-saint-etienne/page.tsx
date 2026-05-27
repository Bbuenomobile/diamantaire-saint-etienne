import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';

export const metadata: Metadata = {
  title: 'Rachat de bijoux à Saint-Étienne — Bagues, colliers, bracelets, anciens & modernes',
  description:
    "Rachat de bijoux à Saint-Étienne : bagues, colliers, bracelets, boucles d’oreilles, alliances, bijoux anciens, Art déco, Belle Époque. Expertise gratuite, paiement immédiat.",
  alternates: { canonical: '/rachat-de-bijoux-saint-etienne' },
};

export default function Page() {
  return (
    <ServicePage
      slug="rachat-de-bijoux-saint-etienne"
      category="Rachat de bijoux"
      defaultSubject="Rachat de bijou"
      defaultItemType="Bague diamant"
      hero={{
        eyebrow: 'Bijoux anciens & modernes',
        title: 'Rachat de bijoux',
        titleHighlight: 'à Saint-Étienne',
        intro:
          "Bagues, colliers, bracelets, boucles d’oreilles, alliances, parures, bijoux anciens, Art nouveau, Belle Époque ou Art déco : notre diamantaire à Saint-Étienne rachète toutes vos pièces en or, platine ou argent sertis ou non.",
        image: '/photos/bijoux-monte.jpg',
        imageAlt: 'Rachat de bijoux à Saint-Étienne',
      }}
      introBlock={{
        eyebrow: 'Notre savoir-faire',
        title: 'Un seul interlocuteur pour estimer toute votre joaillerie',
        paragraphs: [
          "Chez nous, le rachat d’un bijou ne se résume jamais au seul poids de l’or. Nous examinons le bijou dans son ensemble : la qualité de fabrication, la signature ou poinçon de maître, l’époque, les pierres serties, la rareté du modèle.",
          "Une alliance simple en or 18 carats sera rachetée au cours du jour de l’or fin. Mais un bijou ancien Art déco, un solitaire de marque, une parure de famille ou un pendentif serti de diamants méritent une expertise détaillée — et donc un prix nettement supérieur au seul prix du métal.",
          "Un négociant de notre réseau vous reçoit en rendez-vous privé dans un bureau d’échange à Saint-Étienne. L’expertise est gratuite, transparente et sans engagement. Vous décidez à chaque instant.",
        ],
      }}
      criteria={{
        title: 'Les éléments que nous expertisons',
        items: [
          { label: 'Poinçons', text: 'Or 750 (18k), 916 (22k), 999 (24k), platine 950, argent 925 : authentification et titrage précis.' },
          { label: 'Pierres', text: 'Diamants, saphirs, rubis, émeraudes, perles : estimées une à une lorsqu’elles ont une valeur propre.' },
          { label: 'Signature', text: 'Maisons (Cartier, Van Cleef…) ou ateliers (Mellerio, Boucheron, Falize) : la signature crée la rareté.' },
          { label: 'Époque', text: 'Art nouveau, Belle Époque, Art déco, années 50-60 : certaines périodes sont très recherchées.' },
        ],
      }}
      process={{
        title: 'Un rachat clair, étape par étape',
        steps: [
          { title: 'Décrivez', body: 'Photos détaillées + descriptif. Pré-estimation sous 24 h.' },
          { title: 'Rendez-vous', body: 'Examen en bureau d’échange privé à Saint-Étienne, devant vous.' },
          { title: 'Offre détaillée', body: 'Prix décomposé : métal + pierres + signature + époque.' },
          { title: 'Paiement', body: 'Virement bancaire immédiat après acceptation.' },
        ],
      }}
      gallery={[
        '/photos/bijoux-monte.jpg',
        '/photos/bijou-ancien.jpg',
        '/photos/bague-solitaire.jpg',
        '/photos/bague-saphir.jpg',
        '/photos/vendre-bijou-monte.jpg',
        '/photos/bijou-precieux.jpg',
        '/photos/bijoux-rachat.jpg',
        '/photos/atelier-2.jpg',
      ]}
      longContent={[
        {
          heading: 'Quels types de bijoux rachetons-nous ?',
          html: `<ul>
            <li><strong>Bagues</strong> : solitaires, trilogies, pavages, alliances, bagues de fiançailles, chevalières.</li>
            <li><strong>Colliers et pendentifs</strong> : sautoirs, rivières, parures.</li>
            <li><strong>Bracelets</strong> : gourmettes, joncs, manchettes, bracelets ligne.</li>
            <li><strong>Boucles d’oreilles</strong> : créoles, dormeuses, puces, pendantes.</li>
            <li><strong>Bijoux anciens</strong> : Art nouveau, Belle Époque, Art déco, Rétro (années 40-50).</li>
            <li><strong>Bijoux héritage</strong> : pièces de famille, écrins anciens, parures.</li>
          </ul>`,
        },
        {
          heading: 'Bijoux anciens : pourquoi méritent-ils une expertise spécifique ?',
          html: `<p>Un bijou ancien n’est pas seulement un poids d’or. Sa valeur peut être très supérieure au cours du métal quand :</p>
          <ul>
            <li>il est signé d’une grande maison (Cartier, Boucheron, Mellerio, Mauboussin) ;</li>
            <li>il appartient à une époque très demandée (Art déco, Belle Époque) ;</li>
            <li>il comporte des diamants taille ancienne (taille mine, rose, européenne ancienne) ;</li>
            <li>il est en bon état général avec son écrin d’origine.</li>
          </ul>
          <p>Notre diamantaire à Saint-Étienne distingue précisément ces critères pour vous proposer la valeur réelle de votre pièce.</p>`,
        },
      ]}
      faqs={[
        { q: 'Rachetez-vous les alliances anciennes ?', a: "Oui. Toute alliance en or, même usée ou cassée, est rachetée au cours du jour de l’or fin, après vérification du poinçon et pesée précise." },
        { q: 'Mon bijou n’a pas de poinçon — que faire ?', a: "Nous vérifions le métal avec un acide-test ou un spectromètre. Le bijou peut tout de même être racheté si la teneur est attestée." },
        { q: 'Comment connaître le titre de mon bijou ?', a: "Le poinçon donne le titre : tête d’aigle (or 18 carats), coquille (or 14k, étranger), tête de cheval (platine 950)…" },
        { q: 'Quelle différence avec un comptoir d’or ?', a: "Un comptoir d’or paye essentiellement au poids du métal. Un diamantaire valorise en plus les pierres, la signature et l’époque — donc souvent à un prix très supérieur." },
        { q: 'Acceptez-vous les bijoux abîmés ?', a: "Oui. Bijoux cassés, dépareillés, monobles : la valeur des pierres et du métal reste intacte. Nous estimons sans pénalité d’état pour les pièces destinées à la fonte." },
      ]}
      related={[
        { label: 'Rachat de diamants', href: '/rachat-de-diamants-saint-etienne' },
        { label: 'Rachat de bijoux signés', href: '/rachat-bijoux-signes-saint-etienne' },
        { label: 'Rachat d’or', href: '/rachat-or-saint-etienne' },
        { label: 'Rachat de perles', href: '/rachat-perles-saint-etienne' },
      ]}
    />
  );
}
