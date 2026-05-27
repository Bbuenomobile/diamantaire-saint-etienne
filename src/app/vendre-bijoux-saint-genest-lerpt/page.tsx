import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';

export const metadata: Metadata = {
  title: 'Vendre bijoux Saint-Genest-Lerpt — Rachat de diamants & bijoux signés',
  description: "Vendre vos bijoux à Saint-Genest-Lerpt (42) : expertise et rachat de diamants, bijoux signés Cartier, Van Cleef, Bulgari, or et montres. Bureau d’échange privé à Saint-Étienne.",
  alternates: { canonical: '/vendre-bijoux-saint-genest-lerpt' },
};

export default function Page() {
  return (
    <LocalPage
      slug="vendre-bijoux-saint-genest-lerpt"
      cityName="Saint-Genest-Lerpt"
      context="Saint-Étienne Métropole — au sud-ouest"
      image="/photos/bague-saphir.jpg"
      neighborhoods={['Bourg de Saint-Genest', 'Le Bois Monzil', 'La Pivertière', 'Champ Lacaud']}
      introParagraphs={[
        "Saint-Genest-Lerpt, commune résidentielle au sud-ouest de Saint-Étienne, accueille une clientèle haut de gamme attachée à la valeur réelle de son patrimoine joaillier : diamants montés, parures de famille, bijoux signés, montres horlogères.",
        "Notre bureau d’échange à Saint-Étienne est à 10-15 minutes seulement de Saint-Genest-Lerpt. Rendez-vous privé sur convenance, expertise gratuite, paiement immédiat sur acceptation.",
        "Nous valorisons en particulier les grandes maisons (Cartier, Van Cleef, Bulgari, Chopard, Boucheron, Chaumet) et les montres iconiques (Rolex, Patek Philippe, Audemars Piguet, Vacheron Constantin).",
      ]}
    />
  );
}
