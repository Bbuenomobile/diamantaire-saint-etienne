'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigation, site } from '@/lib/site';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/5 bg-ink-50/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-900 text-gold-300">
            <DiamondIcon />
          </span>
          <span className="font-display text-xl leading-none text-ink-900">
            {site.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Navigation principale">
          {navigation.primary.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="text-sm text-ink-700 hover:text-ink-900 transition-colors"
              >
                {item.label}
              </Link>
              {'children' in item && item.children && (
                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-2xl border border-ink-900/5 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-ink-700 hover:bg-ink-50 hover:text-ink-900"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="text-sm text-ink-700 hover:text-ink-900">
            {site.phoneDisplay}
          </a>
          <Link href="/estimation-gratuite" className="btn-gold text-sm py-2 px-4">
            Estimation gratuite
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden -mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-900"
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <><path d="M6 6l12 12"/><path d="M18 6L6 18"/></> : <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-900/5 bg-ink-50">
          <div className="container-x py-4 flex flex-col gap-1">
            {navigation.primary.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-ink-800 hover:bg-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {'children' in item && item.children && (
                  <div className="ml-3 border-l border-ink-900/10 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-1.5 text-sm text-ink-600 hover:text-ink-900"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-outline justify-center">
                Appeler {site.phoneDisplay}
              </a>
              <Link href="/estimation-gratuite" className="btn-gold justify-center" onClick={() => setOpen(false)}>
                Estimation gratuite
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function DiamondIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 9l6-6 6 6-6 12L6 9z"/>
      <path d="M3 9h18"/>
      <path d="M9 9l3 12 3-12"/>
    </svg>
  );
}
