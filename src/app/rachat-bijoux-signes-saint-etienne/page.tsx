import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';

export const metadata: Metadata = {
  title: 'Rachat de bijoux signés à Saint-Étienne — Cartier, Van Cleef, Bulgari',
  description:
    "Rachat de bijoux signés à Saint-Étienne : Cartier, Van Cleef & Arpels, Bulgari, Chopard, Tiffany, Boucheron, Chaumet, Messika. Expertise spécialisée des grandes maisons, paiement immédiat.",
  alternates: { canonical: '/rachat-bijoux-signes-saint-etienne' },
};

export default function Page() {
  return (
    <ServicePage
      slug="rachat-bijoux-signes-saint-etienne"
      category="Rachat bijoux signés"
      defaultSubject="Rachat bijou signé"
      defaultItemType="Bijou signé (Cartier, Van Cleef…)"
      hero={{
        eyebrow: 'Maisons de joaillerie',
        title: 'Rachat de bijoux signés',
        titleHighlight: 'à Saint-Étienne',
        intro:
          "Cartier, Van Cleef & Arpels, Bulgari, Chopard, Tiffany, Boucheron, Chaumet, Messika, Fred… Nous expertisons et rachetons les bijoux des grandes maisons au juste prix du marché secondaire.",
        image: '/photos/bijoux-obagem.jpg',
        imageAlt: 'Rachat de bijoux signés Cartier Van Cleef Bulgari à Saint-Étienne',
      }}
      introBlock={{
        eyebrow: 'Notre expertise',
        title: 'Une cote de revente très spécifique aux grandes maisons',
        paragraphs: [
          "Un bijou signé Cartier, Van Cleef & Arpels ou Bulgari ne se rachète pas comme un bijou anonyme : la signature, la collection, l’année de production, l’écrin et le certificat d’origine ont un impact direct sur la valeur de revente.",
          "Notre diamantaire à Saint-Étienne connaît parfaitement la cote du marché secondaire : Trinity, Love, Juste un Clou, Panthère pour Cartier ; Alhambra, Frivole, Magic, Perlée pour Van Cleef ; B.zero1, Serpenti, Diva’s Dream pour Bulgari ; Happy Diamonds, Mille Miglia pour Chopard ; et toutes les collections iconiques.",
          "Nous achetons les pièces complètes (avec boîte et papiers) comme les pièces seules, sans documentation. Plus la pièce est complète et en bon état, plus l’offre sera élevée.",
        ],
      }}
      criteria={{
        title: 'Ce qui valorise un bijou signé',
        items: [
          { label: 'Maison', text: 'Cartier, Van Cleef et Bulgari arrivent en tête, suivis de Chopard, Tiffany, Boucheron, Chaumet, Messika, Fred…' },
          { label: 'Modèle', text: 'Pièces iconiques (Love, Trinity, Alhambra, B.zero1, Serpenti) : forte demande mondiale et cote stable.' },
          { label: 'Complétude', text: 'Boîte d’origine, certificat, facture, écrin : chaque élément manquant peut réduire de 5 à 15 % la valeur.' },
          { label: 'État', text: 'Polissage, gravures lisibles, sertis intacts. Une révision en maison récente est un vrai plus.' },
        ],
      }}
      process={{
        title: 'Un rachat sécurisé en quatre étapes',
        steps: [
          { title: 'Photos & description', body: 'Envoyez photos détaillées, poinçons, numéro de série, boîte/papiers. Pré-estimation sous 24 h.' },
          { title: 'Rendez-vous à Saint-Étienne', body: 'Examen physique : poinçons, signature, gravures, sertis. Authentification garantie.' },
          { title: 'Offre transparente', body: 'Prix basé sur la cote du marché secondaire, expliqué point par point.' },
          { title: 'Paiement immédiat', body: 'Virement bancaire le jour même, contrat de cession, confidentialité totale.' },
        ],
      }}
      gallery={[
        '/photos/bijoux-obagem.jpg',
        '/photos/bague-saphir.jpg',
        '/photos/bague-solitaire.jpg',
        '/photos/bague-poire-gia.jpg',
        '/photos/bijoux-monte.jpg',
        '/photos/bijou-precieux.jpg',
        '/photos/atelier-1.jpg',
        '/photos/bijou-ancien.jpg',
      ]}
      longContent={[
        {
          heading: 'Les maisons que nous rachetons en priorité',
          html: `<ul>
            <li><strong>Cartier</strong> — Trinity, Love, Juste un Clou, Panthère, Tank, Santos, Ballon Bleu, Clash…</li>
            <li><strong>Van Cleef & Arpels</strong> — Alhambra, Magic, Frivole, Perlée, Lotus, Two Butterfly, Socrate…</li>
            <li><strong>Bulgari</strong> — B.zero1, Serpenti, Diva’s Dream, Tubogas, Parentesi, Monete, BB…</li>
            <li><strong>Chopard</strong> — Happy Diamonds, Happy Sport, Ice Cube, Mille Miglia, Magical Setting…</li>
            <li><strong>Tiffany & Co.</strong> — T, HardWear, Schlumberger, Atlas, Return to Tiffany…</li>
            <li><strong>Boucheron</strong> — Quatre, Serpent Bohème, Plume de Paon, Vendôme Liseré, Jack…</li>
            <li><strong>Chaumet</strong> — Liens, Bee My Love, Joséphine, Jeux de Liens, Bourbon Parme…</li>
            <li><strong>Messika</strong> — Move, Lucky Move, Skinny, My Twin, Glam’Azone…</li>
            <li><strong>Fred</strong> — Force 10, Pain de Sucre, Mouvementé, Chance Infinie, Pretty Woman…</li>
          </ul>
          <p>Également : Buccellati, Mauboussin, Mellerio, Mikimoto, Dinh Van, Pomellato, Graff, Harry Winston, Piaget.</p>`,
        },
        {
          heading: 'Authentification : un savoir-faire essentiel',
          html: `<p>Le marché du bijou signé compte de nombreuses contrefaçons. Notre diamantaire procède systématiquement à une vérification rigoureuse :</p>
          <ul>
            <li><strong>Poinçons</strong> de maître et de titre (or 750/1000, platine 950/1000) ;</li>
            <li><strong>Gravures</strong> de signature et numéro de série ;</li>
            <li><strong>Qualité des sertis</strong> et finition typique de la maison ;</li>
            <li>Lecture du certificat d’origine ou de la facture, si disponible.</li>
          </ul>
          <p>Si nous avons un doute, nous pouvons faire appel à un confrère spécialiste de la maison concernée. Aucun bijou contrefait n’entre dans notre stock.</p>`,
        },
      ]}
      faqs={[
        { q: 'Que se passe-t-il si je n’ai plus la boîte ni les papiers ?', a: "La pièce reste rachetable. La cote sera légèrement inférieure à une pièce complète, mais l’authentification se fait sur les poinçons, gravures et qualité de fabrication." },
        { q: 'Mon bijou est ancien — a-t-il encore de la valeur ?', a: "Oui, et parfois davantage. Les pièces anciennes Cartier, Van Cleef ou Bulgari issues de collections arrêtées peuvent valoir nettement plus que leur prix d’origine, surtout en pièces de collection." },
        { q: 'Rachetez-vous les bijoux fantaisie signés ?', a: "Nous achetons les pièces en or, platine, argent massif avec sertis précieux. Les pièces costume (laiton plaqué, métal commun) ne sont rachetées qu’à titre exceptionnel pour les marques très collectionnées." },
        { q: 'Que valorisez-vous le plus ?', a: "L’association : pièce iconique + état neuf ou très bon + boîte et papiers + signature lisible. Une bague Trinity Cartier complète, par exemple, atteint un prix de rachat très proche de sa valeur boutique." },
        { q: 'Pouvez-vous racheter une parure complète ?', a: "Oui, et c’est souvent dans notre intérêt comme dans le vôtre : une parure (collier + boucles + bracelet + bague) se valorise mieux que les pièces séparées." },
      ]}
      related={[
        { label: 'Rachat de diamants', href: '/rachat-de-diamants-saint-etienne' },
        { label: 'Rachat de bijoux', href: '/rachat-de-bijoux-saint-etienne' },
        { label: 'Rachat de montres de luxe', href: '/rachat-montres-luxe-saint-etienne' },
        { label: 'Notre expertise', href: '/expertise-diamantaire-saint-etienne' },
      ]}
    />
  );
}
