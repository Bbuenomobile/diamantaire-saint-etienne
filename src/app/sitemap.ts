import type { MetadataRoute } from 'next';
import { posts } from '@/lib/blog';
import { site } from '@/lib/site';

const staticPages = [
  '',
  'rachat-de-diamants-saint-etienne',
  'rachat-de-bijoux-saint-etienne',
  'rachat-bijoux-signes-saint-etienne',
  'rachat-or-saint-etienne',
  'rachat-montres-luxe-saint-etienne',
  'rachat-perles-saint-etienne',
  'estimation-gratuite',
  'expertise-diamantaire-saint-etienne',
  'comment-ca-marche',
  'a-propos',
  'contact',
  'faq',
  'blog',
  'mentions-legales',
  'politique-confidentialite',
  'vendre-bijoux-centre-saint-etienne',
  'vendre-bijoux-saint-chamond',
  'vendre-bijoux-firminy',
  'vendre-bijoux-le-chambon-feugerolles',
  'vendre-bijoux-saint-priest-en-jarez',
  'vendre-bijoux-saint-genest-lerpt',
  'vendre-bijoux-bellevue',
  'vendre-bijoux-roche-la-moliere',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = staticPages.map((slug) => ({
    url: `${site.url}/${slug}`.replace(/\/$/, '') || site.url,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: slug === '' ? 1 : slug.startsWith('rachat-') ? 0.9 : slug.startsWith('vendre-bijoux-') ? 0.7 : 0.6,
  }));

  const blogEntries = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...base, ...blogEntries];
}
