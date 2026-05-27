import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';

export const metadata: Metadata = {
  title: 'Vendre bijoux Le Chambon-Feugerolles — Rachat de diamants & bijoux',
  description: "Vendre vos bijoux au Chambon-Feugerolles : expertise gratuite et rachat de diamants, bijoux signés, or et montres de luxe. Bureau d’échange à Saint-Étienne.",
  alternates: { canonical: '/vendre-bijoux-le-chambon-feugerolles' },
};

export default function Page() {
  return (
    <LocalPage
      slug="vendre-bijoux-le-chambon-feugerolles"
      cityName="Le Chambon-Feugerolles"
      context="Saint-Étienne Métropole — vallée de l’Ondaine"
      image="/photos/diamants-collection.jpg"
      neighborhoods={['Centre Le Chambon', 'Le Bouchet', 'Les Brus', 'Croix Mission', 'La Romière']}
      introParagraphs={[
        "Le Chambon-Feugerolles, dans la vallée de l’Ondaine, accueille une clientèle attachée à la valeur patrimoniale de ses bijoux. Pièces signées, parures héritées, diamants montés ou nus, montres horlogères : autant de pièces que notre réseau de négociants expertise au juste prix du marché.",
        "Notre bureau d’échange à Saint-Étienne est à 20 minutes en voiture du Chambon-Feugerolles. Rendez-vous privé, estimation gratuite, paiement le jour même de l’acceptation.",
      ]}
    />
  );
}
