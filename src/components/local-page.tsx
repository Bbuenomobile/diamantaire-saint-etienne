import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export type LocalPageProps = {
  slug: string;
  cityName: string;
  context: string;
  introParagraphs: string[];
  neighborhoods?: string[];
  image: string;
};

export function LocalPage(p: LocalPageProps) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url + '/' },
      { '@type': 'ListItem', position: 2, name: `Diamantaire ${p.cityName}`, item: site.url + '/' + p.slug },
    ],
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={p.image} alt={`Diamantaire à ${p.cityName}`} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/70 to-ink-900/85" />
        </div>
        <div className="container-x pt-20 pb-16 md:pt-28">
          <nav aria-label="Fil d’Ariane" className="text-sm text-ink-300 mb-5">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-ink-50">Accueil</Link></li>
              <li className="text-ink-500">/</li>
              <li className="text-ink-100">Diamantaire à {p.cityName}</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 items-start text-ink-50">
            <div className="lg:col-span-7">
              <p className="label text-gold-300">{p.context}</p>
              <h1 className="h1 mt-4 text-ink-50">Diamantaire à {p.cityName}</h1>
              <p className="lead mt-5 text-ink-200">
                Vous habitez {p.cityName} et souhaitez vendre un diamant, un bijou signé, de l’or ou une montre de luxe ? Un négociant de notre réseau vous reçoit en rendez-vous privé dans un bureau d’échange à Saint-Étienne toute la clientèle de la métropole.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/estimation-gratuite" className="btn-gold">Estimation gratuite</Link>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-outline text-ink-50 border-white/30 hover:bg-white/10">{site.phoneDisplay}</a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-2xl">
                <ContactForm
                  variant="estimation"
                  category={`Local — ${p.cityName}`}
                  defaultSubject={`Estimation depuis ${p.cityName}`}
                  source={`local:${p.slug}`}
                  headline={`Estimation à ${p.cityName}`}
                  intro="Décrivez votre pièce, recevez une fourchette de prix sous 24 h."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <Section>
        <SectionHeading eyebrow="Au plus près de chez vous" title={`Un diamantaire à votre service depuis ${p.cityName}`} />
        <div className="mt-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-5 text-ink-700 leading-relaxed text-[17px]">
            {p.introParagraphs.map((para, i) => (<p key={i}>{para}</p>))}
            {p.neighborhoods && p.neighborhoods.length > 0 && (
              <p>
                Nous recevons également des clients de quartiers et communes proches : {p.neighborhoods.join(', ')}.
              </p>
            )}
            <div className="pt-3 flex flex-wrap gap-3">
              <Link href="/rachat-de-diamants-saint-etienne" className="btn-outline">Rachat de diamants</Link>
              <Link href="/rachat-bijoux-signes-saint-etienne" className="btn-outline">Bijoux signés</Link>
              <Link href="/rachat-or-saint-etienne" className="btn-outline">Rachat d’or</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src={p.image} alt={`Rachat à ${p.cityName}`} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-ink-50/60 border-y border-ink-900/5">
        <div className="container-x py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Confidentialité', d: 'Rendez-vous privé dans un bureau d’échange à Saint-Étienne — discrétion absolue.' },
              { t: 'Estimation gratuite', d: 'Sans engagement, fourchette de prix sous 24 h.' },
              { t: 'Paiement immédiat', d: 'Virement bancaire le jour même de l’acceptation.' },
            ].map((c) => (
              <div key={c.t} className="card p-6">
                <h3 className="font-display text-xl text-ink-900">{c.t}</h3>
                <p className="mt-2 text-ink-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="Voir aussi" title="Notre activité, en détail" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { l: 'Rachat de diamants', href: '/rachat-de-diamants-saint-etienne' },
            { l: 'Rachat de bijoux signés', href: '/rachat-bijoux-signes-saint-etienne' },
            { l: 'Rachat de bijoux', href: '/rachat-de-bijoux-saint-etienne' },
            { l: 'Rachat d’or', href: '/rachat-or-saint-etienne' },
            { l: 'Rachat de montres', href: '/rachat-montres-luxe-saint-etienne' },
            { l: 'Notre expertise', href: '/expertise-diamantaire-saint-etienne' },
          ].map((r) => (
            <Link key={r.href} href={r.href} className="card p-5 hover:border-gold-400">
              <span className="font-display text-xl text-ink-900">{r.l}</span>
              <span className="mt-1 block text-sm text-gold-700">En savoir plus →</span>
            </Link>
          ))}
        </div>
      </Section>

      <script id={`ld-bc-${p.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
