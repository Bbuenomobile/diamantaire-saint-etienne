import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales et informations professionnelles de Diamantaire Saint-Étienne.',
  alternates: { canonical: '/mentions-legales' },
  robots: { index: true, follow: false },
};

export default function Page() {
  return (
    <Section className="pt-28">
      <h1 className="h1">Mentions légales</h1>
      <div className="mt-8 max-w-3xl space-y-6 text-ink-700 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-ink-900">Éditeur du site</h2>
          <p>{site.legalName}<br/>{site.address.street}<br/>{site.address.postalCode} {site.address.city}, France<br/>Téléphone : {site.phoneDisplay}<br/>Email : {site.email}</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink-900">Hébergement</h2>
          <p>Le site est hébergé sur un serveur dédié situé en Europe. Pour toute demande relative à l’hébergement, contactez-nous via le formulaire.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink-900">Activité réglementée</h2>
          <p>L’activité de rachat de métaux précieux est encadrée par la législation française. Toute cession donne lieu à : vérification d’identité, inscription au livre de police, contrat de cession écrit, paiement par virement bancaire (interdiction du paiement en espèces).</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink-900">Propriété intellectuelle</h2>
          <p>L’ensemble des contenus du site (textes, images, charte graphique) est protégé. Toute reproduction sans autorisation est interdite.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink-900">Crédits</h2>
          <p>Conception et développement : équipe interne. Photographies : pièces expertisées par nos soins.</p>
        </section>
      </div>
    </Section>
  );
}
