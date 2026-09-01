'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search, Heart } from 'lucide-react'
import NavLink from './NavLink'

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos matelas', href: '/nos-matelas' },
  { label: 'Collections', href: '#collections' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Conseils sommeil', href: '/conseils' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="font-display text-2xl tracking-[.16em]">
          DORFLEX
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href} className="text-[13px] text-muted-foreground hover:text-foreground">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Rechercher" className="hidden size-10 place-items-center rounded-full hover:bg-muted sm:grid">
            <Search className="size-5" />
          </button>
          <button aria-label="Favoris" className="hidden size-10 place-items-center rounded-full hover:bg-muted sm:grid">
            <Heart className="size-5" />
          </button>
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-5 py-3 text-xs font-semibold tracking-wide text-primary-foreground hover:opacity-90 sm:block"
          >
            Nous contacter
          </Link>
          <button
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen(!open)}
            className="grid size-10 place-items-center lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-5 lg:hidden" aria-label="Navigation mobile">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}