'use client';

import { useActionState } from 'react';
import { submitContact, type ContactState } from '@/lib/contact-action';

type Props = {
  variant?: 'compact' | 'full' | 'estimation';
  category?: string;
  defaultSubject?: string;
  defaultItemType?: string;
  source?: string;
  headline?: string;
  intro?: string;
};

const initial: ContactState = { ok: false, message: '' };

export function ContactForm({
  variant = 'full',
  category = 'Général',
  defaultSubject = '',
  defaultItemType = '',
  source = 'site',
  headline,
  intro,
}: Props) {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.ok) {
    return (
      <div className="rounded-2xl bg-white border border-gold-300/50 p-8 text-center shadow-lg">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-gold-100 text-gold-700">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h3 className="h3">Demande envoyée</h3>
        <p className="mt-2 text-ink-600">{state.message}</p>
        <p className="mt-4 text-sm text-ink-500">
          Pour toute urgence, appelez le <a href="tel:+33142777555" className="text-gold-700 underline">01 42 77 75 55</a>.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4" noValidate>
      {headline && <h3 className="h3">{headline}</h3>}
      {intro && <p className="text-ink-600">{intro}</p>}

      <input type="hidden" name="category" value={category} />
      <input type="hidden" name="source" value={source} />
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom complet *" htmlFor="name" error={state.errors?.name}>
          <input id="name" name="name" required autoComplete="name" className="input" placeholder="Jean Dupont" />
        </Field>
        <Field label="Téléphone *" htmlFor="phone" error={state.errors?.phone}>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className="input" placeholder="06 12 34 56 78" />
        </Field>
      </div>

      <Field label="Email *" htmlFor="email" error={state.errors?.email}>
        <input id="email" name="email" type="email" required autoComplete="email" className="input" placeholder="vous@email.fr" />
      </Field>

      {variant !== 'compact' && (
        <>
          <Field label="Sujet" htmlFor="subject">
            <input id="subject" name="subject" defaultValue={defaultSubject} className="input" placeholder="Rachat diamant 1.2 ct" />
          </Field>

          {variant === 'estimation' && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Type de pièce" htmlFor="itemType">
                <select id="itemType" name="itemType" defaultValue={defaultItemType} className="input bg-white">
                  <option value="">Choisir…</option>
                  <option>Diamant nu</option>
                  <option>Bague diamant</option>
                  <option>Collier / pendentif diamant</option>
                  <option>Boucles d’oreilles diamants</option>
                  <option>Bracelet diamants</option>
                  <option>Bijou signé (Cartier, Van Cleef…)</option>
                  <option>Montre de luxe</option>
                  <option>Or (chaîne, alliance, etc.)</option>
                  <option>Perles</option>
                  <option>Autre</option>
                </select>
              </Field>
              <Field label="Marque (si signé)" htmlFor="brand">
                <input id="brand" name="brand" className="input" placeholder="Cartier, Bulgari, Rolex…" />
              </Field>
              <Field label="Métal" htmlFor="metal">
                <select id="metal" name="metal" className="input bg-white">
                  <option value="">Choisir…</option>
                  <option>Or jaune 18k</option>
                  <option>Or blanc 18k</option>
                  <option>Or rose 18k</option>
                  <option>Platine</option>
                  <option>Argent</option>
                  <option>Autre / je ne sais pas</option>
                </select>
              </Field>
              <Field label="Carat / poids approximatif" htmlFor="carat">
                <input id="carat" name="carat" className="input" placeholder="ex : 1.20 ct ou 12 g" />
              </Field>
              <Field label="Certificat ?" htmlFor="certificate">
                <select id="certificate" name="certificate" className="input bg-white">
                  <option value="">Choisir…</option>
                  <option>GIA</option>
                  <option>HRD</option>
                  <option>IGI</option>
                  <option>Autre laboratoire</option>
                  <option>Sans certificat</option>
                </select>
              </Field>
            </div>
          )}
        </>
      )}

      <Field label="Décrivez votre pièce *" htmlFor="message" error={state.errors?.message}>
        <textarea id="message" name="message" required className="textarea" placeholder="Décrivez votre bijou : caractéristiques, état, photos disponibles, etc." />
      </Field>

      <label className="flex items-start gap-3 text-sm text-ink-600">
        <input type="checkbox" name="consent" value="on" required className="mt-1 h-4 w-4 rounded border-ink-300 text-gold-500 focus:ring-gold-400" />
        <span>
          J’accepte d’être recontacté(e) et la <a href="/politique-confidentialite" className="underline">politique de confidentialité</a>.
        </span>
      </label>
      {state.errors?.consent && <p className="text-sm text-red-700">{state.errors.consent}</p>}

      {!state.ok && state.message && (
        <p className="text-sm text-red-700">{state.message}</p>
      )}

      <button type="submit" disabled={pending} className="btn-gold w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed">
        {pending ? 'Envoi…' : 'Envoyer ma demande'}
        {!pending && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></svg>
        )}
      </button>

      <p className="text-xs text-ink-500">
        Réponse sous quelques heures (jours ouvrés). Confidentialité totale, expertise gratuite et sans engagement.
      </p>
    </form>
  );
}

function Field({ label, htmlFor, error, children }: { label: string; htmlFor: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink-700">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}
