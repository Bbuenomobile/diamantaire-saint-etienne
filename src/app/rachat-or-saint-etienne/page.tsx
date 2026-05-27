import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';

export const metadata: Metadata = {
  title: 'Rachat d’or à Saint-Étienne — Or 18k, 22k, 24k au cours du jour',
  description:
    "Rachat d’or à Saint-Étienne au cours du jour : alliances, chaînes, lingots, pièces, dentaire, or industriel. Pesée précise, paiement immédiat, conformité légale totale.",
  alternates: { canonical: '/rachat-or-saint-etienne' },
};

export default function Page() {
  return (
    <ServicePage
      slug="rachat-or-saint-etienne"
      category="Rachat d’or"
      defaultSubject="Rachat or"
      defaultItemType="Or (chaîne, alliance, etc.)"
      hero={{
        eyebrow: 'Rachat d’or',
        title: 'Rachat d’or à Saint-Étienne',
        titleHighlight: 'au cours du jour',
        intro:
          "Or 18 carats, 22 carats, 24 carats : alliances, chaînes, gourmettes, pièces, lingots, dentaire, or industriel. Pesée précise, prix indexé sur les cours LBMA, paiement le jour même.",
        image: '/photos/bijou-precieux.jpg',
        imageAlt: 'Rachat d’or à Saint-Étienne',
      }}
      introBlock={{
        eyebrow: 'Cours du jour',
        title: 'Un prix indexé sur le cours réel de l’or',
        paragraphs: [
          "Le prix de rachat de l’or à Saint-Étienne évolue chaque jour selon les cours fixés à Londres (LBMA Gold Price). Nous appliquons ce cours réel, sans marge cachée, et nous le mettons à jour quotidiennement.",
          "La méthode est simple : nous identifions le titre exact de votre or (poinçon ou test), nous le pesons précisément (au gramme près sur balance certifiée), nous appliquons le cours du jour. Tout est transparent.",
          "Sont rachetés : bijoux en or 18k, 22k, 24k, alliances, chaînes brisées ou dépareillées, gourmettes, lingots, lingotins, pièces Napoléon, souverain, Krugerrand, Vreneli, or dentaire, débris d’or.",
        ],
      }}
      criteria={{
        title: 'Comment nous évaluons votre or',
        items: [
          { label: 'Poinçon', text: 'Tête d’aigle (18k 750/1000), coquille (14k 585), feuille de trèfle (or étranger). Le poinçon atteste du titre.' },
          { label: 'Test acide', text: 'En l’absence de poinçon, test à l’acide ou au spectromètre pour vérifier la teneur réelle.' },
          { label: 'Pesée', text: 'Balance certifiée, précision au centième de gramme, devant vous.' },
          { label: 'Cours du jour', text: 'Application du cours LBMA actualisé chaque matin, avec une marge transparente.' },
        ],
      }}
      process={{
        title: 'Un rachat d’or en 4 étapes',
        steps: [
          { title: 'Pré-évaluation', body: 'Photos et descriptif. Indication du cours du jour et estimation rapide.' },
          { title: 'Rendez-vous à Saint-Étienne', body: 'Vérification poinçon, test acide si besoin, pesée précise.' },
          { title: 'Offre ferme', body: 'Cours du jour appliqué, prix expliqué gramme par gramme.' },
          { title: 'Paiement', body: 'Virement bancaire immédiat, contrat de cession en règle, livre de police.' },
        ],
      }}
      gallery={[
        '/photos/bijou-precieux.jpg',
        '/photos/bijou-ancien.jpg',
        '/photos/bijoux-rachat.jpg',
        '/photos/atelier-3.jpg',
        '/photos/bijoux-monte.jpg',
      ]}
      longContent={[
        {
          heading: 'Quel est le cours de l’or aujourd’hui ?',
          html: `<p>Le cours de l’or est exprimé en euros par gramme d’or fin (24 carats). Pour calculer la valeur d’un bijou en or 18 carats, on applique le ratio <strong>750/1000</strong> (750 grammes d’or pur par kilo). Pour de l’or 22 carats : 916/1000.</p>
          <p>Exemple indicatif : pour un cours d’or fin à 70 € le gramme, un bijou en or 18k pèse 10 g contient 7,5 g d’or pur, soit environ 525 € de matière. Notre offre tient compte de ce calcul et de la marge professionnelle.</p>`,
        },
        {
          heading: 'Or dentaire, débris, lingots — tout est racheté',
          html: `<ul>
            <li><strong>Or dentaire</strong> : couronnes, bridges, alliages dentaires. Test de teneur systématique.</li>
            <li><strong>Lingots et lingotins</strong> : poids et certificat vérifiés (Umicore, Heraeus, Argor, PAMP).</li>
            <li><strong>Pièces d’or</strong> : Napoléon 20F, 10F, Souverain, Krugerrand, Vreneli, 20 dollars or, 100 schilling, 50 pesos.</li>
            <li><strong>Bijoux brisés ou dépareillés</strong> : un maillon, une boucle d’oreille seule, une chaîne cassée — la valeur du métal demeure.</li>
          </ul>`,
        },
      ]}
      faqs={[
        { q: 'Quelle est la différence entre or 18k et or 24k ?', a: "L’or 24 carats est de l’or pur (999/1000). L’or 18 carats contient 750/1000 d’or pur, allié à du cuivre, de l’argent ou du palladium. La quasi-totalité des bijoux modernes sont en 18 carats." },
        { q: 'Le cours de l’or change-t-il pendant la transaction ?', a: "Nous fixons le cours au moment de l’accord. Une fois l’offre acceptée, le prix est ferme, indépendamment des variations ultérieures." },
        { q: 'Y a-t-il un poids minimum ?', a: "Non, nous rachetons à partir d’un gramme. Pour les petites quantités, il peut être judicieux de grouper plusieurs bijoux." },
        { q: 'Quels documents dois-je apporter ?', a: "Une pièce d’identité en cours de validité (CNI, passeport). Conformément à la loi, toute cession est inscrite au livre de police professionnel." },
        { q: 'Le paiement en liquide est-il possible ?', a: "Non. La loi française interdit le paiement en espèces pour le rachat d’or auprès d’un professionnel. Le règlement se fait par virement bancaire (chèque banque possible)." },
      ]}
      related={[
        { label: 'Rachat de diamants', href: '/rachat-de-diamants-saint-etienne' },
        { label: 'Rachat de bijoux', href: '/rachat-de-bijoux-saint-etienne' },
        { label: 'Rachat de bijoux signés', href: '/rachat-bijoux-signes-saint-etienne' },
        { label: 'Rachat de montres', href: '/rachat-montres-luxe-saint-etienne' },
      ]}
    />
  );
}
