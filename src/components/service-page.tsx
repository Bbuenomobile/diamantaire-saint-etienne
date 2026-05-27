import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export type ServiceFAQ = { q: string; a: string };
export type ServicePageProps = {
  slug: string;
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight?: string;
    intro: string;
    image: string;
    imageAlt: string;
  };
  category: string;
  defaultItemType?: string;
  defaultSubject?: string;
  introBlock: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
  };
  criteria: { title: string; items: { label: string; text: string }[] };
  process: { title: string; steps: { title: string; body: string }[] };
  gallery: string[];
  faqs: ServiceFAQ[];
  related: { label: string; href: string }[];
  longContent?: { heading: string; html: string }[];
};

export function ServicePage(p: ServicePageProps) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url + '/' },
      { '@type': 'ListItem', position: 2, name: p.hero.title, item: site.url + '/' + p.slug },
    ],
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={p.hero.image} alt={p.hero.imageAlt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/70 to-ink-900/85" />
        </div>
        <div className="container-x pt-20 pb-20 md:pt-28 md:pb-24">
          <nav aria-label="Fil d’Ariane" className="text-sm text-ink-300 mb-6">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-ink-50">Accueil</Link></li>
              <li className="text-ink-500">/</li>
              <li className="text-ink-100">{p.hero.title}</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 text-ink-50">
              <p className="label text-gold-300">{p.hero.eyebrow}</p>
              <h1 className="h1 mt-4 text-ink-50">
                {p.hero.title}
                {p.hero.titleHighlight && (
                  <>
                    <br className="hidden md:block" />
                    <span className="text-gold-300">{p.hero.titleHighlight}</span>
                  </>
                )}
              </h1>
              <p className="lead mt-5 text-ink-200 max-w-2xl">{p.hero.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/estimation-gratuite" className="btn-gold">Estimation gratuite</Link>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-outline text-ink-50 border-white/30 hover:bg-white/10">
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-2xl border border-ink-900/5">
                <ContactForm
                  variant="estimation"
                  category={p.category}
                  defaultSubject={p.defaultSubject}
                  defaultItemType={p.defaultItemType}
                  source={`service:${p.slug}`}
                  headline="Estimation confidentielle"
                  intro="Décrivez votre pièce, recevez une fourchette de prix sous 24 h."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* INTRO */}
      <Section>
        <SectionHeading eyebrow={p.introBlock.eyebrow} title={p.introBlock.title} />
        <div className="mt-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-5">
            {p.introBlock.paragraphs.map((para, i) => (
              <p key={i} className="text-ink-700 leading-relaxed text-[17px]">{para}</p>
            ))}
            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/estimation-gratuite" className="btn-primary">Faire estimer ma pièce</Link>
              <Link href="/comment-ca-marche" className="btn-ghost">Voir notre processus →</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src={p.gallery[0] || p.hero.image} alt={p.hero.imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* CRITERIA */}
      <section className="bg-ink-50/60 border-y border-ink-900/5">
        <div className="container-x py-20">
          <SectionHeading eyebrow="Comment nous évaluons" title={p.criteria.title} align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {p.criteria.items.map((it) => (
              <div key={it.label} className="card p-6">
                <div className="font-display text-2xl text-gold-600">{it.label}</div>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <Section>
        <SectionHeading eyebrow="Le processus" title={p.process.title} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {p.process.steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-ink-900/5 bg-white p-6">
              <div className="font-display text-2xl text-ink-900">0{i + 1}</div>
              <h3 className="mt-3 font-display text-lg text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* LONG CONTENT */}
      {p.longContent && p.longContent.length > 0 && (
        <section className="bg-ink-50/40 border-y border-ink-900/5">
          <div className="container-x py-20">
            <div className="max-w-3xl mx-auto space-y-10">
              {p.longContent.map((b) => (
                <div key={b.heading}>
                  <h2 className="h3">{b.heading}</h2>
                  <div className="mt-3 text-ink-700 leading-relaxed text-[17px] prose prose-ink max-w-none [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:mb-2" dangerouslySetInnerHTML={{ __html: b.html }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GALLERY */}
      {p.gallery.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Galerie" title="Quelques pièces récemment rachetées" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {p.gallery.map((src, i) => (
              <div key={src + i} className={`relative overflow-hidden rounded-xl group ${i % 5 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}>
                <Image src={src} alt={p.hero.imageAlt} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="Vos questions" title="FAQ" />
        <div className="mt-10 grid gap-4">
          {p.faqs.map((f) => (
            <details key={f.q} className="group card p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h3 className="font-display text-lg md:text-xl text-ink-900">{f.q}</h3>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink-50 text-ink-700 transition-transform group-open:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                </span>
              </summary>
              <p className="mt-3 text-ink-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* RELATED */}
      <section className="bg-ink-50/60 border-y border-ink-900/5">
        <div className="container-x py-14">
          <p className="label text-center">Voir aussi</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {p.related.map((r) => (
              <Link key={r.href} href={r.href} className="rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm text-ink-700 hover:border-gold-400 hover:bg-gold-50/40">
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-900 text-ink-50">
        <div className="container-x py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="label text-gold-300">Prochain rendez-vous</p>
              <h2 className="h2 mt-3 text-ink-50">Faites estimer votre pièce dès aujourd’hui</h2>
              <p className="lead mt-4 text-ink-200">Réponse sous 24 h, rendez-vous dans un bureau d’échange à Saint-Étienne, paiement le jour même en cas d’accord.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 md:p-8 text-ink-900 shadow-2xl">
              <ContactForm variant="full" category={p.category} source={`service-bottom:${p.slug}`} headline="Contact direct" />
            </div>
          </div>
        </div>
      </section>

      <Script id={`ld-faq-${p.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id={`ld-bc-${p.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
