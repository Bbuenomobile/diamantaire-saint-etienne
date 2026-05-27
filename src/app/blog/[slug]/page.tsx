import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { ContactForm } from '@/components/contact-form';
import { Section } from '@/components/section';
import { posts, getPost } from '@/lib/blog';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Article introuvable' };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, images: [{ url: post.image }] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: site.url + post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: site.legalName, url: site.url },
    publisher: { '@type': 'Organization', name: site.legalName, logo: { '@type': 'ImageObject', url: site.url + '/og.jpg' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${site.url}/blog/${post.slug}` },
  };

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/70 to-ink-900/85" />
          </div>
          <div className="container-prose pt-20 pb-12 md:pt-28 text-ink-50">
            <nav aria-label="Fil d’Ariane" className="text-sm text-ink-300 mb-5">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><Link href="/" className="hover:text-ink-50">Accueil</Link></li>
                <li className="text-ink-500">/</li>
                <li><Link href="/blog" className="hover:text-ink-50">Blog</Link></li>
              </ol>
            </nav>
            <p className="label text-gold-300">{new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.readingTime}</p>
            <h1 className="h1 mt-4 text-ink-50">{post.title}</h1>
            <p className="lead mt-4 text-ink-200">{post.description}</p>
          </div>
        </section>

        <Section className="!py-12">
          <div className="container-prose px-0">
            <div
              className="prose prose-lg max-w-none text-ink-700 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-ink-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:mb-5 [&_p]:leading-relaxed [&_p.lead]:text-xl [&_p.lead]:text-ink-600 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-5 [&_li]:mb-2 [&_strong]:text-ink-900 [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
        </Section>
      </article>

      <section className="bg-ink-50/60 border-y border-ink-900/5">
        <div className="container-x py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="label">Mettons votre pièce à l’estimation</p>
              <h2 className="h2 mt-2">Vous souhaitez vendre une pièce dont parle l’article ?</h2>
              <p className="mt-3 text-ink-600">Notre diamantaire à Saint-Étienne vous propose une estimation gratuite et confidentielle sous 24 h.</p>
              <div className="mt-5">
                <Link href="/estimation-gratuite" className="btn-gold">Demander mon estimation</Link>
              </div>
            </div>
            <div className="card p-6 md:p-8">
              <ContactForm variant="compact" category={`Blog — ${post.slug}`} headline="Une question sur l’article ?" source={`blog:${post.slug}`} />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <h2 className="font-display text-3xl text-ink-900">À lire aussi</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((r) => (
            <Link href={`/blog/${r.slug}`} key={r.slug} className="card overflow-hidden group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={r.image} alt={r.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-ink-900">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{r.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Script id={`ld-article-${post.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}
