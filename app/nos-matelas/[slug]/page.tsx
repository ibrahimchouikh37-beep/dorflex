import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart, MessageCircle, Star, Check } from 'lucide-react'
import { products, formatPrice } from '@/data/products'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Génération statique des slugs
export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

// Métadonnées dynamiques
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return { title: 'Produit non trouvé' }
  return {
    title: `${product.name} | DORFLEX`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10 lg:pt-14">
          <Link href="/nos-matelas" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 size-4" /> Tous les matelas
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="aspect-square w-full object-cover"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-[.25em] text-primary">{product.badge || 'Collection DORFLEX'}</span>
              <h1 className="mt-5 font-display text-5xl md:text-6xl">{product.name}</h1>
              <div className="mt-5 flex items-center gap-2 text-sm">
                <span className="flex text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} fill="currentColor" className="size-4" />
                  ))}
                </span>
                4,9 · 38 avis
              </div>
              <p className="mt-7 max-w-lg leading-7 text-muted-foreground">{product.description}</p>
              <p className="mt-8 font-display text-3xl">
                {formatPrice(product.price)} <span className="font-sans text-sm text-muted-foreground">à partir de</span>
              </p>

              <div className="mt-8 border-y border-border py-6">
                <p className="mb-3 text-sm font-semibold">Choisissez votre dimension</p>
                <div className="flex flex-wrap gap-2">
                  {['90 × 190', '140 × 190', '160 × 200', '180 × 200'].map((dim) => (
                    <button key={dim} className="rounded-full border border-border px-4 py-2 text-xs hover:border-primary">
                      {dim}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground hover:opacity-90">
                  Demander un devis
                </Link>
                <a
                  href="https://wa.me/212672993742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-foreground/20 px-6 py-4 text-sm font-semibold"
                >
                  <MessageCircle className="mr-2 inline size-4" /> WhatsApp
                </a>
                <button aria-label="Ajouter aux favoris" className="grid size-12 place-items-center rounded-full border border-border">
                  <Heart />
                </button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-5 text-sm">
                {[
                  ['Technologie', product.technology],
                  ['Fermeté', product.firmness],
                  ['Hauteur', product.height],
                  ['Garantie', '10 ans'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-muted-foreground">{label}</p>
                    <p className="mt-1 flex items-center gap-1 font-medium">
                      <Check className="size-4 text-primary" /> {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}