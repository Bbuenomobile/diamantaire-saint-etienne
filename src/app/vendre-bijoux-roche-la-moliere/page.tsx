import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';

export const metadata: Metadata = {
  title: 'Vendre bijoux Roche-la-Molière — Rachat de diamants & bijoux signés',
  description: "Vendre vos bijoux à Roche-la-Molière : expertise et rachat de diamants, bijoux signés Cartier, Van Cleef, Bulgari, or et montres. Bureau d’échange à Saint-Étienne.",
  alternates: { canonical: '/vendre-bijoux-roche-la-moliere' },
};

export default function Page() {
  return (
    <LocalPage
      slug="vendre-bijoux-roche-la-moliere"
      cityName="Roche-la-Molière"
      context="Saint-Étienne Métropole — limitrophe ouest"
      image="/photos/diamant-zoom.jpg"
      neighborhoods={['Centre Roche-la-Molière', 'Le Layat', 'La Berlandière', 'Vaure', 'Méons proche']}
      introParagraphs={[
        "Roche-la-Molière, commune historique de Saint-Étienne Métropole, accueille une clientèle variée — familles installées de longue date, retraités, jeunes actifs — détentrice de bijoux qu’elle souhaite parfois céder : alliances, parures, diamants, montres.",
        "Notre réseau de négociants se déplace pour vous recevoir dans un bureau d’échange privé à Saint-Étienne, à 10 minutes en voiture ou en tramway de Roche-la-Molière. Estimation gratuite, fourchette de prix sous 24 h, paiement immédiat le jour de l’accord.",
      ]}
    />
  );
}
