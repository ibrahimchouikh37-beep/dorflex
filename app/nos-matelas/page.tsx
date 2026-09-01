'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useMemo } from 'react'
import { ChevronDown, Search, ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { products, formatPrice } from '@/data/products'

export default function Catalogue() {
  const [query, setQuery] = useState('')
  const [tech, setTech] = useState('Toutes')
  const [sort, setSort] = useState('Pertinence')

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const matchTech = tech === 'Toutes' || p.technology.toLowerCase().includes(tech.toLowerCase())
      const matchQuery = p.name.toLowerCase().includes(query.toLowerCase())
      return matchTech && matchQuery
    })

    if (sort === 'Prix croissant') result.sort((a, b) => a.price - b.price)
    if (sort === 'Prix décroissant') result.sort((a, b) => b.price - a.price)
    return result
  }, [query, tech, sort])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="border-y border-border py-14">
            <p className="text-xs font-semibold uppercase tracking-[.25em] text-primary">La collection</p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl">Nos matelas</h1>
            <p className="mt-5 max-w-lg leading-7 text-muted-foreground">
              Des technologies pensées pour vous offrir la nuit que vous méritez.
            </p>
          </div>

          <div className="flex flex-col gap-8 py-10 lg:flex-row">
            <aside className="w-full shrink-0 lg:w-56">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider">Technologie</p>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
                {['Toutes', 'Mousse', 'Ressorts', 'Mémoire', 'Latex'].map((label) => (
                  <button
                    key={label}
                    onClick={() => setTech(label)}
                    className={`text-left text-sm ${tech === label ? 'font-semibold text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </aside>

            <section className="min-w-0 flex-1">
              <div className="flex flex-col justify-between gap-4 border-b border-border pb-5 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                  <Search className="size-4 text-muted-foreground" />
                  <input
                    aria-label="Rechercher un matelas"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Rechercher"
                    className="w-40 bg-transparent text-sm outline-none"
                  />
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{filtered.length} modèles</span>
                  <div className="relative">
                    <select
                      aria-label="Trier les produits"
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      className="appearance-none rounded-full border border-border bg-transparent px-4 py-2 pr-8 text-sm"
                    >
                      <option>Pertinence</option>
                      <option>Prix croissant</option>
                      <option>Prix décroissant</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-x-5 gap-y-12 sm:grid-cols-2">
                {filtered.map((p) => (
                  <Link href={`/nos-matelas/${p.slug}`} key={p.slug} className="group">
                    <div className="overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={500}
                        height={625}
                        className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h2 className="mt-4 font-display text-2xl">{p.name}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{p.technology} · {p.firmness}</p>
                    <p className="mt-2 text-sm font-semibold">{formatPrice(p.price)}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}