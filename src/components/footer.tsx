import Link from 'next/link';
import { navigation, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-900/5 bg-ink-900 text-ink-100">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-400 text-ink-900">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M6 9l6-6 6 6-6 12L6 9z"/><path d="M3 9h18"/><path d="M9 9l3 12 3-12"/>
              </svg>
            </span>
            <span className="font-display text-xl text-ink-50">{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-ink-300 leading-relaxed max-w-xs">
            Expert diamantaire à Saint-Étienne, rachat de diamants, bijoux signés, or et montres de luxe au juste prix.
          </p>
          <div className="mt-5 text-sm text-ink-300 space-y-1">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="block text-gold-200 hover:text-gold-100">{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`} className="block hover:text-ink-50">{site.email}</a>
            <p className="pt-2">{site.address.street}</p>
            <p>{site.address.postalCode} {site.address.city}</p>
          </div>
        </div>

        <div>
          <h4 className="label text-gold-300">Nos rachats</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/rachat-de-diamants-saint-etienne" className="text-ink-200 hover:text-ink-50">Rachat de diamants</Link></li>
            <li><Link href="/rachat-de-bijoux-saint-etienne" className="text-ink-200 hover:text-ink-50">Rachat de bijoux</Link></li>
            <li><Link href="/rachat-bijoux-signes-saint-etienne" className="text-ink-200 hover:text-ink-50">Bijoux signés (Cartier, Van Cleef…)</Link></li>
            <li><Link href="/rachat-or-saint-etienne" className="text-ink-200 hover:text-ink-50">Rachat d’or 18k, 22k, 24k</Link></li>
            <li><Link href="/rachat-montres-luxe-saint-etienne" className="text-ink-200 hover:text-ink-50">Montres de luxe</Link></li>
            <li><Link href="/rachat-perles-saint-etienne" className="text-ink-200 hover:text-ink-50">Perles & objets précieux</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="label text-gold-300">Maison</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/a-propos" className="text-ink-200 hover:text-ink-50">À propos</Link></li>
            <li><Link href="/expertise-diamantaire-saint-etienne" className="text-ink-200 hover:text-ink-50">Notre expertise</Link></li>
            <li><Link href="/comment-ca-marche" className="text-ink-200 hover:text-ink-50">Comment ça marche</Link></li>
            <li><Link href="/faq" className="text-ink-200 hover:text-ink-50">FAQ</Link></li>
            <li><Link href="/blog" className="text-ink-200 hover:text-ink-50">Blog & guides</Link></li>
            <li><Link href="/contact" className="text-ink-200 hover:text-ink-50">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="label text-gold-300">Zones d’expertise</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/vendre-bijoux-centre-saint-etienne" className="text-ink-200 hover:text-ink-50">Centre Saint-Étienne</Link></li>
            <li><Link href="/vendre-bijoux-saint-chamond" className="text-ink-200 hover:text-ink-50">Saint-Chamond</Link></li>
            <li><Link href="/vendre-bijoux-firminy" className="text-ink-200 hover:text-ink-50">Firminy</Link></li>
            <li><Link href="/vendre-bijoux-le-chambon-feugerolles" className="text-ink-200 hover:text-ink-50">Le Chambon-Feugerolles</Link></li>
            <li><Link href="/vendre-bijoux-saint-priest-en-jarez" className="text-ink-200 hover:text-ink-50">Saint-Priest-en-Jarez</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-ink-400">
          <p>© {new Date().getFullYear()} {site.legalName}. Tous droits réservés.</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navigation.footer.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink-100">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
