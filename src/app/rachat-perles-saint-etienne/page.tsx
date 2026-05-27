import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';

export const metadata: Metadata = {
  title: 'Rachat de perles à Saint-Étienne — Perles fines, Akoya, Tahiti, Mikimoto',
  description:
    "Rachat de perles à Saint-Étienne : perles fines, perles de culture Akoya, Tahiti, Mers du Sud, Mikimoto. Expertise gemmologique gratuite, paiement immédiat.",
  alternates: { canonical: '/rachat-perles-saint-etienne' },
};

export default function Page() {
  return (
    <ServicePage
      slug="rachat-perles-saint-etienne"
      category="Rachat de perles"
      defaultSubject="Rachat perles"
      defaultItemType="Perles"
      hero={{
        eyebrow: 'Joaillerie ancienne & perles',
        title: 'Rachat de perles & objets précieux',
        titleHighlight: 'à Saint-Étienne',
        intro:
          "Perles fines, perles de culture (Akoya, Tahiti, Mers du Sud), colliers Mikimoto, parures anciennes, objets de joaillerie de collection : notre diamantaire à Saint-Étienne expertise et rachète vos pièces.",
        image: '/photos/bague-saphir.jpg',
        imageAlt: 'Rachat de perles fines et de culture à Saint-Étienne',
      }}
      introBlock={{
        eyebrow: 'Une expertise rare',
        title: 'Les perles : un savoir-faire spécialisé',
        paragraphs: [
          "Le marché de la perle est complexe. Une perle fine (naturelle) peut valoir vingt à cent fois plus qu’une perle de culture de même apparence. Il faut donc savoir distinguer les deux à l’œil expert, à la radioscopie ou par certification de laboratoire.",
          "Notre réseau à Saint-Étienne est partenaire de gemmologues spécialisés en perles : si votre collier ou votre parure le justifie, nous pouvons proposer une expertise complémentaire en laboratoire (CGL, GIA).",
          "Sont rachetés : colliers, sautoirs, parures, rangs de perles, bagues et boucles d’oreilles à perles. Toutes origines (Akoya, Tahiti, Australie, Mers du Sud) et perles fines naturelles d’eau douce ou d’eau de mer.",
        ],
      }}
      criteria={{
        title: 'Les critères d’évaluation des perles',
        items: [
          { label: 'Nature', text: 'Perle fine (naturelle) vs perle de culture : différence de valeur considérable.' },
          { label: 'Origine', text: 'Akoya (Japon), Tahiti, Mers du Sud (Australie), eau douce (Chine).' },
          { label: 'Qualité', text: 'Forme, lustre, orient, surface, couleur : tous notés par les laboratoires.' },
          { label: 'Calibre', text: 'Diamètre en mm : un rang 9-9,5 mm vaut bien plus qu’un rang 6-6,5 mm.' },
        ],
      }}
      process={{
        title: 'Le rachat de perles, en pratique',
        steps: [
          { title: 'Photos', body: 'Décrivez votre rang ou votre parure, joignez de bonnes photos.' },
          { title: 'Expertise', body: 'À Saint-Étienne : examen visuel, vérification du fermoir et des nœuds, test si nécessaire.' },
          { title: 'Estimation', body: 'Offre transparente fondée sur la valeur réelle et la liquidité du marché.' },
          { title: 'Paiement', body: 'Virement immédiat après accord, contrat de cession en règle.' },
        ],
      }}
      gallery={['/photos/bague-saphir.jpg', '/photos/bijoux-obagem.jpg', '/photos/bijou-precieux.jpg', '/photos/bijou-ancien.jpg']}
      longContent={[
        {
          heading: 'Perle fine ou perle de culture ?',
          html: `<p>La perle fine se forme naturellement à l’intérieur d’une huître, sans intervention humaine. Devenues rarissimes depuis le XXe siècle, elles sont aujourd’hui essentiellement issues d’héritage. Leur valeur peut être considérable.</p>
          <p>La perle de culture est produite après insertion d’un nucléus dans l’huître. Très qualitative pour les meilleures (Akoya Hanadama, Tahiti AAA, South Sea), elle reste néanmoins largement plus accessible que la perle fine.</p>
          <p>La radioscopie est la méthode de référence pour distinguer les deux. Un certificat de laboratoire est conseillé pour les pièces importantes.</p>`,
        },
      ]}
      faqs={[
        { q: 'Comment savoir si mes perles sont fines ou de culture ?', a: "À l’œil, c’est très difficile. Indices : ancienneté de la pièce (avant 1920, plus probablement fines), poids, irrégularités. Seule la radioscopie en laboratoire certifie l’une ou l’autre catégorie." },
        { q: 'Rachetez-vous les rangs Mikimoto ?', a: "Oui. Les colliers Mikimoto sont très recherchés, surtout les pièces complètes avec fermoir signé et écrin d’origine." },
        { q: 'Les perles abîmées ont-elles de la valeur ?', a: "Une perle dont le lustre est très altéré perd l’essentiel de sa valeur. En revanche, un rang peut souvent être réenfilé pour redonner de la cohérence visuelle." },
        { q: 'Combien vaut un rang Akoya en bonne qualité ?', a: "Un rang Akoya 7-7,5 mm de bonne qualité commence à plusieurs centaines d’euros. Les rangs Hanadama (la plus haute qualité Akoya) peuvent atteindre plusieurs milliers." },
      ]}
      related={[
        { label: 'Rachat de bijoux', href: '/rachat-de-bijoux-saint-etienne' },
        { label: 'Rachat de diamants', href: '/rachat-de-diamants-saint-etienne' },
        { label: 'Rachat de bijoux signés', href: '/rachat-bijoux-signes-saint-etienne' },
      ]}
    />
  );
}
