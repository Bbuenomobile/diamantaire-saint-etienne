import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/section';
import { posts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog & guides — Diamantaire à Saint-Étienne',
  description: "Conseils, guides et analyses sur le rachat de diamants, bijoux signés, or et montres à Saint-Étienne. Par un diamantaire indépendant.",
  alternates: { canonical: '/blog' },
};

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/photos/diamants-precision.jpg" alt="Blog diamantaire Saint-Étienne" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/70 to-ink-900/85" />
        </div>
        <div className="container-x pt-20 pb-16 md:pt-28 text-ink-50">
          <p className="label text-gold-300">Journal</p>
          <h1 className="h1 mt-4 text-ink-50">Guides & analyses</h1>
          <p className="lead mt-5 max-w-2xl text-ink-200">
            Tout ce qu’il faut savoir avant de vendre un diamant, un bijou signé, de l’or ou une montre. Rédigé par notre diamantaire à Saint-Étienne.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="Tous les articles" title="Le journal du diamantaire" />
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group card overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-[0.16em] text-ink-400">
                  {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.readingTime}
                </p>
                <h2 className="mt-2 font-display text-2xl text-ink-900">{post.title}</h2>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed flex-1">{post.description}</p>
                <span className="mt-4 text-sm font-medium text-gold-700">Lire l’article →</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
