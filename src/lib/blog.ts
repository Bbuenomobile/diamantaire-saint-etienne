export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  body: string; // HTML string
};

export const posts: BlogPost[] = [
  {
    slug: 'vendre-diamant-saint-etienne-guide-complet',
    title: 'Vendre un diamant à Saint-Étienne : le guide complet',
    description: "Toutes les étapes pour vendre un diamant à Saint-Étienne au meilleur prix : préparation, expertise, certificats, négociation, paiement.",
    date: '2026-02-12',
    readingTime: '8 min',
    image: '/photos/diamant-loupe.jpg',
    imageAlt: 'Vendre un diamant à Saint-Étienne',
    body: `
      <p class="lead">Vendre un diamant n’est pas un acte anodin. Il en va d’une valeur souvent importante, parfois patrimoniale. Voici le guide complet pour bien vendre votre diamant à Saint-Étienne, en évitant les pièges classiques.</p>
      <h2>1. Rassembler les éléments d’information</h2>
      <p>Avant toute démarche, regroupez tout ce que vous avez sur le diamant : <strong>certificat</strong> (GIA, HRD, IGI), <strong>facture d’origine</strong>, <strong>écrin</strong>, et bien sûr le bijou ou la pierre elle-même.</p>
      <p>Si vous avez un certificat, lisez-le : il indique le carat, la couleur (D à Z), la pureté (IF à I3), la qualité de taille, la fluorescence et le numéro gravé sur la rondiste.</p>
      <h2>2. Demander une pré-estimation à distance</h2>
      <p>Photographiez votre pierre sous plusieurs angles (face, profil, fond), idéalement à la lumière du jour, sans flash brutal. Joignez le scan du certificat si disponible. Envoyez le tout à un diamantaire indépendant à Saint-Étienne : sous 24 h, vous devriez recevoir une fourchette d’estimation gratuite.</p>
      <h2>3. Prendre rendez-vous physique</h2>
      <p>L’estimation à distance reste indicative. L’examen physique en bureau d’échange permet de confirmer la pierre, son état, et de fixer un prix de rachat ferme. Le rendez-vous se déroule en bureau d’échange privé : aucun aller-retour stressant, aucun client autre que vous.</p>
      <h2>4. Comprendre la décomposition du prix</h2>
      <p>Le prix d’un diamant repose sur les cours <strong>Rapaport</strong>, mis à jour chaque semaine. Le diamantaire applique la matrice qui croise couleur et pureté, puis ajuste selon la taille (Excellent à Poor), la fluorescence, la liquidité du marché, et la présence ou non de certificat. Le prix final intègre une marge professionnelle modérée, qui rémunère l’expertise, le travail administratif et la prise de risque.</p>
      <h2>5. Vérifier la conformité légale</h2>
      <p>Toute transaction donne lieu à : pièce d’identité présentée, inscription au livre de police, contrat de cession écrit, paiement par virement bancaire (jamais en espèces : c’est interdit).</p>
      <h2>6. Le paiement</h2>
      <p>En cas d’acceptation : virement le jour même. Vous repartez avec votre justificatif. La transaction est définitive.</p>
      <h2>En résumé</h2>
      <ul>
        <li>Rassemblez les documents (certificat, facture, écrin).</li>
        <li>Demandez une pré-estimation par photos.</li>
        <li>Confirmez en bureau d’échange à Saint-Étienne.</li>
        <li>Vérifiez la décomposition du prix.</li>
        <li>Vendez en règle : virement, contrat, livre de police.</li>
      </ul>`,
  },
  {
    slug: 'comprendre-les-4c-diamant',
    title: 'Comprendre les 4C du diamant — Carat, Color, Clarity, Cut',
    description: 'Les quatre critères qui font la valeur d’un diamant, expliqués simplement par un diamantaire à Saint-Étienne.',
    date: '2026-02-04',
    readingTime: '6 min',
    image: '/photos/tailles-diamants.jpg',
    imageAlt: 'Les 4C du diamant',
    body: `
      <p class="lead">Tout diamantaire utilise les fameux 4C — Carat, Color, Clarity, Cut — pour évaluer un diamant. Voici ce que chacun signifie, et comment ils influent sur le prix de rachat.</p>
      <h2>Carat (poids)</h2>
      <p>Un carat équivaut à 0,2 gramme. À qualité égale, le prix au carat progresse plus que linéairement à mesure que le poids augmente : un diamant de 2 ct vaut souvent davantage que deux diamants de 1 ct.</p>
      <h2>Color (couleur)</h2>
      <p>L’échelle GIA va de D (incolore) à Z (jaunâtre). Les diamants D, E, F sont dits « incolores ». G, H, I sont « presque incolores ». À partir de J-K, la teinte devient perceptible et le prix baisse sensiblement.</p>
      <h2>Clarity (pureté)</h2>
      <p>IF (Internally Flawless) → I3 (inclusions visibles). Les pureté <strong>VS1, VS2</strong> offrent le meilleur ratio prix/qualité : aucune inclusion visible à l’œil nu, mais un coût bien inférieur à VVS et IF.</p>
      <h2>Cut (qualité de taille)</h2>
      <p>Souvent sous-estimée. C’est pourtant elle qui donne au diamant son éclat. Échelle : Excellent, Very Good, Good, Fair, Poor. Une taille Excellent peut « rattraper » un peu une couleur ou une pureté moins parfaite.</p>
      <h2>Et les autres critères ?</h2>
      <p>Au-delà des 4C, votre diamantaire à Saint-Étienne observe : la <strong>fluorescence</strong> (None à Strong), le polishing, la symétrie, et la <strong>présence d’un certificat</strong> GIA/HRD/IGI.</p>`,
  },
  {
    slug: 'certificat-gia-hrd-igi-quelle-difference',
    title: 'Certificat GIA, HRD, IGI : quelle différence ?',
    description: 'Les trois principaux laboratoires de certification du diamant comparés : critères, fiabilité, valeur de revente.',
    date: '2026-01-22',
    readingTime: '5 min',
    image: '/photos/diamants-expertise.jpg',
    imageAlt: 'Certificats de diamants',
    body: `
      <p class="lead">Trois laboratoires dominent la certification mondiale du diamant : GIA, HRD et IGI. Voici en quoi ils diffèrent et lequel privilégier pour votre revente.</p>
      <h2>GIA (Gemological Institute of America)</h2>
      <p>Créé en 1931, le GIA est la référence mondiale absolue. Il a défini la grille des 4C. Un certificat GIA est universellement reconnu, ce qui en fait l’atout le plus liquide pour revendre un diamant.</p>
      <h2>HRD Antwerp</h2>
      <p>Fondé en 1973 à Anvers (capitale historique du diamant), le HRD est très respecté en Europe. Sa grille est cohérente avec celle du GIA, parfois un peu plus généreuse sur la couleur. Excellent pour les diamants vendus sur le marché européen.</p>
      <h2>IGI (International Gemological Institute)</h2>
      <p>Plus récent et international, l’IGI est notamment leader sur les certificats de diamants synthétiques (lab-grown). Ses certificats de diamants naturels sont reconnus mais traditionnellement décotés par rapport au GIA et au HRD pour les pierres haut de gamme.</p>
      <h2>En pratique</h2>
      <p>Pour un diamant <strong>naturel</strong> de 0,50 ct ou plus, privilégiez un certificat GIA. Si vous possédez un HRD, votre revente sera également très bonne, surtout en Europe. Un certificat IGI reste un plus important par rapport à l’absence de certificat.</p>`,
  },
  {
    slug: 'rachat-cartier-van-cleef-bulgari-cote-marche',
    title: 'Cote du marché secondaire : Cartier, Van Cleef, Bulgari',
    description: 'Comment est calculée la valeur de revente d’un bijou signé Cartier, Van Cleef & Arpels ou Bulgari.',
    date: '2026-01-08',
    readingTime: '7 min',
    image: '/photos/bijoux-obagem.jpg',
    imageAlt: 'Bijoux Cartier Van Cleef Bulgari',
    body: `
      <p class="lead">Un bijou Cartier, Van Cleef ou Bulgari ne se rachète pas au poids du métal. Sa cote dépend de la maison, du modèle, de l’année, de l’état et de la complétude.</p>
      <h2>Quels modèles tiennent leur cote ?</h2>
      <ul>
        <li><strong>Cartier</strong> : Love, Trinity, Juste un Clou, Panthère, Tank, Santos.</li>
        <li><strong>Van Cleef & Arpels</strong> : Alhambra (Magic, Vintage), Frivole, Perlée, Lotus.</li>
        <li><strong>Bulgari</strong> : B.zero1, Serpenti, Diva’s Dream, Tubogas.</li>
      </ul>
      <h2>Avec ou sans boîte ?</h2>
      <p>La présence de l’écrin d’origine, du certificat et de la facture peut augmenter le prix de rachat de 10 à 20 %. Un acheteur final paye souvent un premium pour une pièce « full set ».</p>
      <h2>État et entretien</h2>
      <p>Une révision récente en maison (Cartier, Van Cleef…) est un excellent atout : elle atteste de l’authenticité et garantit un état général impeccable.</p>
      <h2>Ce qui décote</h2>
      <ul>
        <li>Rayures profondes ou chocs visibles ;</li>
        <li>Pierres manquantes ou abîmées (sertis détendus) ;</li>
        <li>Modifications par un bijoutier non agréé ;</li>
        <li>Absence de boîte, papiers, écrin.</li>
      </ul>`,
  },
  {
    slug: 'vendre-rolex-occasion-saint-etienne',
    title: 'Vendre sa Rolex à Saint-Étienne : ce qu’il faut savoir',
    description: 'Cote du marché secondaire Rolex, modèles les plus recherchés, importance du full set, processus de rachat à Saint-Étienne.',
    date: '2025-12-19',
    readingTime: '6 min',
    image: '/photos/atelier-1.jpg',
    imageAlt: 'Vendre Rolex à Saint-Étienne',
    body: `
      <p class="lead">Le marché de la Rolex d’occasion est sans doute le plus liquide au monde après l’or. Voici les clés pour vendre votre Rolex à Saint-Étienne au juste prix.</p>
      <h2>Les modèles les plus recherchés</h2>
      <ul>
        <li>Daytona (acier, surtout les références récentes 116500LN, 126500LN) ;</li>
        <li>Submariner Date et No-Date ;</li>
        <li>GMT-Master II (Pepsi, Batman, Sprite, Coke) ;</li>
        <li>Datejust 36 / 41 acier ou or ;</li>
        <li>Sea-Dweller, Yacht-Master, Sky-Dweller, Day-Date.</li>
      </ul>
      <h2>Full set : un atout majeur</h2>
      <p>La boîte d’origine, la carte de garantie tamponnée, le livret, les maillons supplémentaires, le sticker fond de boîte… chaque élément peut peser jusqu’à 1 000 € sur certaines références.</p>
      <h2>L’importance de la révision</h2>
      <p>Une révision en concession Rolex récente (moins de 2 ans) avec ses étiquettes garantit l’authenticité du calibre et l’état du mouvement. C’est un argument de poids pour la revente.</p>
      <h2>Vente à Saint-Étienne</h2>
      <p>Notre réseau de négociants rachète tous les modèles Rolex (anciens et modernes), authentifie chaque pièce devant vous et propose un prix indexé sur les cotes Chrono24 et ventes aux enchères récentes. Paiement par virement le jour même.</p>`,
  },
  {
    slug: 'cours-de-l-or-comment-est-fixe',
    title: 'Comment est fixé le cours de l’or ? (LBMA, fixing)',
    description: 'Le marché de l’or expliqué : LBMA Gold Price, fixing AM/PM, conversion en prix au gramme par carat.',
    date: '2025-12-04',
    readingTime: '5 min',
    image: '/photos/bijou-precieux.jpg',
    imageAlt: 'Cours de l’or',
    body: `
      <p class="lead">Le cours de l’or au comptoir d’un diamantaire ou d’un comptoir d’or n’est pas un prix « inventé ». Il est strictement indexé sur les cours internationaux. Voici comment ça marche.</p>
      <h2>Le fixing LBMA</h2>
      <p>Deux fois par jour (10 h 30 et 15 h 00 heure de Londres), la London Bullion Market Association publie le <strong>LBMA Gold Price</strong>, exprimé en dollars US par once troy (1 once troy = 31,1035 grammes). C’est la référence mondiale.</p>
      <h2>Conversion en euros au gramme</h2>
      <p>On convertit le prix USD/oz en EUR/g via le taux de change EUR/USD du jour. À titre indicatif, un cours de 2 000 USD/oz à 1,08 EUR/USD donne ~59,5 €/g d’or fin.</p>
      <h2>De l’or fin au bijou 18k</h2>
      <p>Un bijou en or 18 carats contient 750/1000 d’or pur. Pour un bijou de 10 g, la matière brute représente donc 7,5 g d’or fin. À 60 €/g d’or fin, cela donne ~450 € de matière. Le prix de rachat est légèrement inférieur (marge professionnelle).</p>
      <h2>Pourquoi un comptoir d’or est moins-disant qu’un diamantaire ?</h2>
      <p>Un comptoir d’or paye uniquement la matière. Un diamantaire valorise <strong>en plus</strong> les pierres serties, la signature éventuelle et l’époque du bijou. Pour des bijoux avec diamants ou de marque, la différence peut être considérable.</p>`,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
