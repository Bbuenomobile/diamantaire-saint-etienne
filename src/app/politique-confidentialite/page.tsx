import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et traitement des données personnelles — Diamantaire Saint-Étienne.',
  alternates: { canonical: '/politique-confidentialite' },
  robots: { index: true, follow: false },
};

export default function Page() {
  return (
    <Section className="pt-28">
      <h1 className="h1">Politique de confidentialité</h1>
      <div className="mt-8 max-w-3xl space-y-6 text-ink-700 leading-relaxed">
        <p>La confidentialité est au cœur de notre activité. Cette page décrit comment nous collectons, utilisons et protégeons vos données personnelles.</p>
        <section>
          <h2 className="font-display text-2xl text-ink-900">Données collectées</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Identité (nom, prénom, pièce d’identité lors d’une transaction)</li>
            <li>Coordonnées (téléphone, email, adresse postale)</li>
            <li>Informations relatives aux pièces (descriptif, photos, certificats)</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink-900">Finalités</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Vous répondre lors d’une demande d’estimation ou de prise de contact</li>
            <li>Établir un contrat de cession et tenir le livre de police (obligation légale)</li>
            <li>Vous tenir informé(e) de l’avancement de votre dossier</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink-900">Durée de conservation</h2>
          <p>Vos données de contact sont conservées le temps nécessaire au traitement de votre demande. Les données relatives à une cession sont conservées conformément aux obligations légales (livre de police).</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink-900">Vos droits (RGPD)</h2>
          <p>Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition. Pour exercer ces droits, écrivez à <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink-900">Sécurité</h2>
          <p>Vos données sont stockées sur des serveurs sécurisés en Europe. Aucune donnée n’est revendue à des tiers.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink-900">Cookies</h2>
          <p>Le site utilise uniquement les cookies strictement nécessaires à son fonctionnement. Aucun cookie publicitaire n’est déposé.</p>
        </section>
      </div>
    </Section>
  );
}
