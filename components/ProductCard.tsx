'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Heart, ArrowRight } from 'lucide-react'
import { formatPrice, Product } from '@/data/products'

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-2xl bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={750}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
          priority={false}
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
            {product.badge}
          </span>
        )}
        <button
          aria-label={`Ajouter ${product.name} aux favoris`}
          onClick={() => setLiked(!liked)}
          className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-background/80 backdrop-blur hover:bg-background"
        >
          <Heart className={liked ? 'fill-primary text-primary' : ''} />
        </button>
        <Link
          href={`/nos-matelas/${product.slug}`}
          className="absolute bottom-4 left-4 right-4 translate-y-14 rounded-full bg-background px-4 py-3 text-center text-xs font-semibold opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
        >
          Voir le produit <ArrowRight className="ml-2 inline size-4" />
        </Link>
      </div>
      <div className="flex items-start justify-between gap-4 pt-4">
        <div>
          <h3 className="font-display text-xl">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {product.technology} · {product.firmness}
          </p>
        </div>
        <p className="whitespace-nowrap text-sm font-semibold">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}