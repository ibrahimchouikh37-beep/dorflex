'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function Finder() {
  const [firm, setFirm] = useState('Mi-ferme')
  const [tech, setTech] = useState('Mémoire de forme')

  return (
    <section className="bg-[#2d2925] px-6 py-20 text-primary-foreground lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#d3977b]">Le guide DORFLEX</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">Quel est le matelas idéal pour vous ?</h2>
          <p className="mt-5 max-w-md leading-7 text-primary-foreground/65">
            Quelques questions suffisent pour trouver le confort qui accompagnera vos nuits.
          </p>
        </div>

        <div className="rounded-2xl bg-primary-foreground/10 p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Fermeté */}
            <div>
              <p className="mb-4 text-sm font-medium">Quelle fermeté recherchez-vous ?</p>
              <div className="flex flex-wrap gap-2">
                {['Souple', 'Mi-ferme', 'Ferme', 'Extra ferme'].map((val) => (
                  <button
                    key={val}
                    onClick={() => setFirm(val)}
                    className={`rounded-full border px-4 py-2 text-xs ${
                      firm === val
                        ? 'border-[#d3977b] bg-[#d3977b] text-[#2d2925]'
                        : 'border-primary-foreground/20 text-primary-foreground/70'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            {/* Technologie */}
            <div>
              <p className="mb-4 text-sm font-medium">Quelle technologie préférez-vous ?</p>
              <div className="flex flex-wrap gap-2">
                {['Mousse', 'Ressorts', 'Mémoire de forme', 'Latex'].map((val) => (
                  <button
                    key={val}
                    onClick={() => setTech(val)}
                    className={`rounded-full border px-4 py-2 text-xs ${
                      tech === val
                        ? 'border-[#d3977b] bg-[#d3977b] text-[#2d2925]'
                        : 'border-primary-foreground/20 text-primary-foreground/70'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-5 border-t border-primary-foreground/15 pt-6 sm:flex-row sm:items-center">
            <p className="text-sm text-primary-foreground/75">
              <Check className="mr-2 inline text-[#d3977b]" />
              Votre recommandation : <strong className="text-primary-foreground">DORFLEX Premium</strong>
            </p>
            <Link
              href="/nos-matelas/dorflex-premium"
              className="rounded-full bg-primary-foreground px-5 py-3 text-center text-xs font-semibold text-foreground hover:opacity-90"
            >
              Voir ma recommandation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}