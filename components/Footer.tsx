import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2d2925] px-6 py-14 text-primary-foreground lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:justify-between">
        <div>
          <div className="font-display text-2xl tracking-[.16em]">DORFLEX</div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/60">
            Le confort qui transforme vos nuits.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm text-primary-foreground/65" aria-label="Pied de page">
          <Link href="/nos-matelas">Nos matelas</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/conseils">Conseils sommeil</Link>
          <Link href="/contact">Contact</Link>
          <span>+212 5 22 00 00 00</span>
          <span>hello@dorflex.ma</span>
        </nav>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-primary-foreground/15 pt-5 text-xs text-primary-foreground/45">
        © {new Date().getFullYear()} DORFLEX — Tous droits réservés.
      </div>
    </footer>
  )
}