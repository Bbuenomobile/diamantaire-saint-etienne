import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';

export const metadata: Metadata = {
  title: 'Rachat de montres de luxe à Saint-Étienne — Rolex, Patek, AP, Cartier, Omega',
  description:
    "Rachat de montres de luxe à Saint-Étienne : Rolex, Patek Philippe, Audemars Piguet, Cartier, Omega, Breitling, Vacheron Constantin, IWC, JLC. Expertise horlogère, paiement immédiat.",
  alternates: { canonical: '/rachat-montres-luxe-saint-etienne' },
};

export default function Page() {
  return (
    <ServicePage
      slug="rachat-montres-luxe-saint-etienne"
      category="Rachat montres luxe"
      defaultSubject="Rachat montre de luxe"
      defaultItemType="Montre de luxe"
      hero={{
        eyebrow: 'Horlogerie',
        title: 'Rachat de montres de luxe',
        titleHighlight: 'à Saint-Étienne',
        intro:
          "Rolex, Patek Philippe, Audemars Piguet, Cartier, Omega, Breitling, Vacheron Constantin, IWC, Jaeger-LeCoultre, Hublot, Tudor… Nos négociants à Saint-Étienne rachètent vos montres au juste prix du marché secondaire.",
        image: '/photos/atelier-1.jpg',
        imageAlt: 'Rachat de montre de luxe à Saint-Étienne',
      }}
      introBlock={{
        eyebrow: 'Expertise horlogère',
        title: 'Une connaissance fine du marché secondaire des montres',
        paragraphs: [
          "Le marché de la montre d’occasion a ses propres règles. Une référence Rolex Submariner, GMT-Master ou Daytona ne s’estime pas comme une montre quartz : la cote dépend du numéro de série, de la couleur du cadran, du calibre, de l’année de production, du complément de boîte et de papiers (full set).",
          "Notre diamantaire et son partenaire horloger à Saint-Étienne connaissent les cotes Chrono24, WatchCharts et les ventes aux enchères récentes. Nous établissons une estimation transparente, fondée sur les transactions réelles.",
          "Sont rachetées : montres mécaniques modernes et vintage, chronographes, modèles boutique, séries limitées, montres de complication, ainsi que toutes les pièces des manufactures suisses indépendantes.",
        ],
      }}
      criteria={{
        title: 'Ce qui fait la valeur d’une montre de luxe',
        items: [
          { label: 'Marque', text: 'Rolex, Patek, AP en tête. Vacheron Constantin, Jaeger-LeCoultre, Omega Speedmaster suivent.' },
          { label: 'Référence', text: 'Certaines références (Daytona, Nautilus, Royal Oak) ont une cote très supérieure à leur prix boutique d’origine.' },
          { label: 'Full set', text: 'Boîte, papiers, écrin, livret garantie, maillons supplémentaires : valorisation jusqu’à +20 %.' },
          { label: 'État', text: 'Cadran d’origine, glace non rayée, polissage léger, mouvement révisé : tous ces éléments comptent.' },
        ],
      }}
      process={{
        title: 'Le parcours d’un rachat de montre',
        steps: [
          { title: 'Photos & référence', body: 'Envoyez photos cadran/fond/profil + numéro de référence + de série. Pré-estimation rapide.' },
          { title: 'Examen physique', body: 'À Saint-Étienne : ouverture du fond (avec votre accord), vérification du calibre, tests d’authenticité.' },
          { title: 'Offre détaillée', body: 'Prix basé sur la cote du marché, avec décomposition : marque, état, complétude.' },
          { title: 'Paiement', body: 'Virement le jour même, contrat de cession et inscription au livre de police.' },
        ],
      }}
      gallery={['/photos/atelier-1.jpg', '/photos/atelier-2.jpg', '/photos/atelier-3.jpg', '/photos/bijoux-rachat.jpg']}
      longContent={[
        {
          heading: 'Marques et modèles rachetés en priorité',
          html: `<ul>
            <li><strong>Rolex</strong> — Submariner, GMT-Master II, Daytona, Datejust, Day-Date, Explorer, Sky-Dweller, Yacht-Master, Sea-Dweller, Air-King.</li>
            <li><strong>Patek Philippe</strong> — Nautilus, Aquanaut, Calatrava, Complications, Grandes Complications.</li>
            <li><strong>Audemars Piguet</strong> — Royal Oak, Royal Oak Offshore, Code 11.59, Millenary, Jules Audemars.</li>
            <li><strong>Cartier</strong> — Santos, Tank, Ballon Bleu, Pasha, Drive, Crash, Tortue.</li>
            <li><strong>Omega</strong> — Speedmaster Moonwatch, Seamaster, Constellation, De Ville, Aqua Terra.</li>
            <li><strong>Vacheron Constantin</strong> — Patrimony, Overseas, Traditionnelle, Historiques.</li>
            <li><strong>Breitling</strong> — Navitimer, Chronomat, Superocean, Avenger, Premier.</li>
            <li><strong>IWC, Jaeger-LeCoultre, Hublot, Tudor, Panerai, Zenith, Blancpain</strong> et autres manufactures.</li>
          </ul>`,
        },
        {
          heading: 'Authentification : un point non négociable',
          html: `<p>Le marché de la montre compte de nombreuses contrefaçons, parfois de très haut niveau. Notre expertise comprend :</p>
          <ul>
            <li>vérification du numéro de série et de référence ;</li>
            <li>contrôle du calibre par ouverture du fond ;</li>
            <li>évaluation du finissage du mouvement ;</li>
            <li>contrôle de la cohérence cadran / aiguilles / couronne ;</li>
            <li>recoupement avec les archives publiques pour les pièces sensibles.</li>
          </ul>`,
        },
      ]}
      faqs={[
        { q: 'Rachetez-vous une montre sans papiers ?', a: "Oui, à un prix légèrement inférieur à un full set. L’authentification reste possible par l’examen du calibre, du numéro de série et de la qualité de fabrication." },
        { q: 'Ma montre est ancienne — a-t-elle de la valeur ?', a: "Souvent oui. Une Rolex Submariner « James Bond », une Patek Calatrava 1950, une Omega Speedmaster « Pre-Moon » ou une Cartier Tank vintage peuvent valoir bien davantage que leur prix d’origine." },
        { q: 'Peut-on racheter une montre non fonctionnelle ?', a: "Oui. Le calibre et les composants gardent une valeur. Nous estimons même si la montre ne tourne plus, sous réserve d’authenticité." },
        { q: 'Vous occupez-vous de la révision avant rachat ?', a: "Non, nous achetons en l’état. Mais si vous le souhaitez, nous pouvons indiquer le surcoût d’une révision pour orienter votre décision." },
        { q: 'Quel délai pour le rachat ?', a: "Une fois l’offre acceptée : paiement le jour même, en bureau d’échange à Saint-Étienne." },
      ]}
      related={[
        { label: 'Rachat de diamants', href: '/rachat-de-diamants-saint-etienne' },
        { label: 'Rachat de bijoux signés', href: '/rachat-bijoux-signes-saint-etienne' },
        { label: 'Rachat d’or', href: '/rachat-or-saint-etienne' },
      ]}
    />
  );
}
