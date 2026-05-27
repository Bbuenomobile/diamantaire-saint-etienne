import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className="label">{eyebrow}</p>}
      <h2 className="h2 mt-3">{title}</h2>
      {intro && <p className="lead mt-4">{intro}</p>}
      <div className={align === 'center' ? 'mx-auto mt-5 divider-gold' : 'mt-5 divider-gold'} />
    </div>
  );
}

export function Section({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`container-x py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}
