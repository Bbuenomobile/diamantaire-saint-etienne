import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';

export const metadata: Metadata = {
  title: 'Vendre bijoux centre Saint-Étienne — Rachat de diamants & bijoux signés',
  description: "Vendre vos bijoux dans le centre de Saint-Étienne : expertise gratuite et rachat de diamants, bijoux Cartier, Van Cleef, Bulgari, or et montres. Bureau d’échange sur rendez-vous.",
  alternates: { canonical: '/vendre-bijoux-centre-saint-etienne' },
};

export default function Page() {
  return (
    <LocalPage
      slug="vendre-bijoux-centre-saint-etienne"
      cityName="centre de Saint-Étienne"
      context="Cœur historique de Saint-Étienne"
      image="/photos/atelier-1.jpg"
      neighborhoods={['Hôtel-de-Ville', 'Place du Peuple', 'Place Jean-Jaurès', 'Carnot', 'Bergson', 'Préfecture', 'Tarentaize']}
      introParagraphs={[
        "Le centre historique de Saint-Étienne — autour de la Place du Peuple, de l’Hôtel-de-Ville, de la Place Jean-Jaurès — concentre une clientèle joaillière établie : grandes familles stéphanoises, héritages patrimoniaux issus du XIXe siècle industriel, parures des grandes maisons.",
        "Notre réseau de négociants se déplace pour vous recevoir dans un bureau d’échange privé à Saint-Étienne. Nous expertisons et rachetons diamants, parures anciennes, bijoux signés Cartier, Van Cleef & Arpels, Bulgari, Boucheron, et montres de manufactures suisses.",
        "L’estimation est gratuite et confidentielle. Paiement immédiat le jour de l’accord, par virement bancaire.",
      ]}
    />
  );
}
