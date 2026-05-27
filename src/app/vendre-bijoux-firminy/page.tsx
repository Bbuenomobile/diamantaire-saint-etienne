import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';

export const metadata: Metadata = {
  title: 'Vendre bijoux Firminy — Rachat de diamants & bijoux signés',
  description: "Vendre vos bijoux à Firminy : rachat de diamants, bijoux signés Cartier, Van Cleef, Bulgari, or et montres. Expertise gratuite à Saint-Étienne, sur rendez-vous.",
  alternates: { canonical: '/vendre-bijoux-firminy' },
};

export default function Page() {
  return (
    <LocalPage
      slug="vendre-bijoux-firminy"
      cityName="Firminy"
      context="Saint-Étienne Métropole — au sud-ouest"
      image="/photos/atelier-3.jpg"
      neighborhoods={['Centre Firminy', 'Firminy-Vert', 'Le Mas', 'Layat', 'Le Chambon-Feugerolles proche']}
      introParagraphs={[
        "Firminy, commune emblématique de la Loire avec son Site Le Corbusier inscrit à l’UNESCO, attire une clientèle exigeante détentrice de pièces de qualité : solitaires de marque, parures de famille, bijoux Cartier ou Van Cleef, montres horlogères.",
        "Notre réseau de négociants se déplace pour vous recevoir dans un bureau d’échange privé à Saint-Étienne, à 20 minutes en voiture de Firminy. Expertise gratuite, fourchette de prix sous 24 h, paiement immédiat le jour de l’accord.",
      ]}
    />
  );
}
