import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';

export const metadata: Metadata = {
  title: 'Vendre bijoux Saint-Priest-en-Jarez — Rachat de diamants & bijoux signés',
  description: "Vendre vos bijoux à Saint-Priest-en-Jarez : expertise et rachat de diamants, bijoux signés, or et montres de luxe. Bureau d’échange à Saint-Étienne, à 10 minutes.",
  alternates: { canonical: '/vendre-bijoux-saint-priest-en-jarez' },
};

export default function Page() {
  return (
    <LocalPage
      slug="vendre-bijoux-saint-priest-en-jarez"
      cityName="Saint-Priest-en-Jarez"
      context="Saint-Étienne Métropole — limitrophe nord"
      image="/photos/bijoux-obagem.jpg"
      neighborhoods={['Centre Saint-Priest', 'Le Crêt-de-Roch', 'Les Combes', 'L’Hôpital Nord', 'Méons']}
      introParagraphs={[
        "Saint-Priest-en-Jarez, commune résidentielle de Saint-Étienne Métropole, fait partie des quartiers les plus prisés du nord stéphanois. Une clientèle aisée et patrimoniale y détient régulièrement des pièces de joaillerie qu’elle souhaite céder : diamants, parures Art déco, bijoux Cartier, Van Cleef, Bulgari, montres horlogères.",
        "Notre réseau de négociants vous reçoit dans un bureau d’échange privé à Saint-Étienne, à 5-10 minutes de Saint-Priest-en-Jarez. Estimation gratuite et confidentielle, paiement immédiat sur acceptation.",
      ]}
    />
  );
}
