import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';

export const metadata: Metadata = {
  title: 'Vendre bijoux Bellevue — Rachat de diamants & bijoux signés à Saint-Étienne',
  description: "Vendre vos bijoux dans le quartier Bellevue à Saint-Étienne : expertise et rachat de diamants, bijoux signés, or et montres de luxe. Bureau d’échange privé.",
  alternates: { canonical: '/vendre-bijoux-bellevue' },
};

export default function Page() {
  return (
    <LocalPage
      slug="vendre-bijoux-bellevue"
      cityName="quartier Bellevue"
      context="Saint-Étienne — quartier résidentiel prestigieux"
      image="/photos/bijoux-monte.jpg"
      neighborhoods={['Avenue de la Libération', 'Rue Bergson', 'Cours Fauriel', 'Côte Chaude', 'Crêt-de-Roch']}
      introParagraphs={[
        "Bellevue, l’un des quartiers les plus prisés et résidentiels de Saint-Étienne, accueille une clientèle joaillière historique : familles installées de longue date, héritages d’hôtels particuliers, parures de grandes maisons.",
        "Notre réseau de négociants se déplace pour vous recevoir dans un bureau d’échange privé à Saint-Étienne, à quelques minutes de Bellevue. Estimation gratuite et confidentielle, paiement immédiat sur acceptation.",
        "Nous expertisons toutes les grandes maisons — Cartier, Van Cleef & Arpels, Bulgari, Chopard, Tiffany, Boucheron, Chaumet, Messika, Fred — ainsi que les montres Rolex, Patek Philippe, Audemars Piguet et autres manufactures.",
      ]}
    />
  );
}
