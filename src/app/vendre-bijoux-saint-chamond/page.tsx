import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';

export const metadata: Metadata = {
  title: 'Vendre bijoux Saint-Chamond — Rachat de diamants & bijoux signés',
  description: "Vendre vos bijoux à Saint-Chamond : expertise gratuite et rachat de diamants, bijoux signés, or et montres. Bureau d’échange à Saint-Étienne, sur rendez-vous.",
  alternates: { canonical: '/vendre-bijoux-saint-chamond' },
};

export default function Page() {
  return (
    <LocalPage
      slug="vendre-bijoux-saint-chamond"
      cityName="Saint-Chamond"
      context="Saint-Étienne Métropole — deuxième commune"
      image="/photos/atelier-2.jpg"
      neighborhoods={['Centre Saint-Chamond', 'Izieux', 'Saint-Julien-en-Jarez', 'La Varizelle', 'Lavieu']}
      introParagraphs={[
        "Saint-Chamond, deuxième ville la plus peuplée de Saint-Étienne Métropole, accueille une clientèle aisée souvent détentrice de pièces de joaillerie héritées : diamants montés, parures, bijoux signés, montres de manufactures suisses.",
        "Notre réseau de négociants se déplace pour vous recevoir dans un bureau d’échange privé à Saint-Étienne, à seulement 15 minutes en voiture de Saint-Chamond. Expertise gratuite, paiement immédiat sur acceptation.",
        "Nous estimons aussi bien les diamants nus que les bijoux Cartier, Van Cleef, Bulgari ou les montres Rolex, Patek Philippe, Audemars Piguet.",
      ]}
    />
  );
}
