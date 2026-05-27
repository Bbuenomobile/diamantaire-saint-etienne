const items = [
  { k: '20+', v: "Années d’expertise" },
  { k: 'GIA · HRD', v: 'Laboratoires de référence' },
  { k: '48h', v: 'Paiement après acceptation' },
  { k: '100%', v: 'Confidentialité garantie' },
];

export function TrustBar() {
  return (
    <div className="border-y border-ink-900/5 bg-ink-50/60">
      <div className="container-x py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((it) => (
          <div key={it.k}>
            <div className="font-display text-2xl md:text-3xl text-ink-900">{it.k}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-500">{it.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
