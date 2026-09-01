import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import ProductCard from '@/components/ProductCard'
import Finder from '@/components/Finder'
import { categories } from '@/data/categories'
import { products } from '@/data/products'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-20">
          <div className="reveal">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[.28em] text-primary">
              Confort · Qualité · Bien-être
            </p>
            <h1 className="max-w-xl font-display text-6xl leading-[.98] md:text-8xl">
              Bien dormir <em className="text-primary">change</em> tout.
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground">
              Découvrez les matelas DORFLEX conçus pour vous offrir confort, soutien et qualité nuit après nuit.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/nos-matelas"
                className="rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground hover:translate-y-[-2px] transition"
              >
                Découvrir nos matelas <span className="ml-2">→</span>
              </Link>
              <Link
                href="#finder"
                className="rounded-full border border-foreground/20 px-6 py-4 text-sm font-semibold hover:bg-muted"
              >
                Trouver mon matelas
              </Link>
            </div>
          </div>
          <div className="reveal delay-2 relative overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=90"
              alt="Chambre élégante avec literie DORFLEX"
              width={700}
              height={800}
              className="aspect-[4/4.4] w-full object-cover lg:aspect-[4/4.6]"
              priority
            />
            <div className="absolute bottom-5 left-5 rounded-xl bg-background/90 px-4 py-3 backdrop-blur">
              <p className="text-xs text-muted-foreground">Depuis 1998</p>
              <p className="font-display text-lg">Le confort, autrement.</p>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section id="collections" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionTitle
            eyebrow="Nos collections"
            title="Trouvez le confort qui vous ressemble"
            copy="Des technologies choisies pour répondre à chaque façon de dormir."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link href="/nos-matelas" key={cat.name} className="group">
                <div className="overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={cat.image}
                    alt={`Collection ${cat.name}`}
                    width={400}
                    height={500}
                    className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-2xl">{cat.name}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{cat.description}</p>
                <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                  Découvrir →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Favoris */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionTitle eyebrow="Les favoris" title="Nos matelas les plus appréciés" />
            <Link href="/nos-matelas" className="text-sm font-semibold text-primary">
              Voir toute la collection →
            </Link>
          </div>
          <div className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>

        {/* Finder */}
        <div id="finder">
          <Finder />
        </div>

        {/* Savoir-faire */}
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <SectionTitle
              eyebrow="Notre savoir-faire"
              title="La technologie au service de votre sommeil"
              copy="Chaque détail compte quand il s'agit de vos nuits."
            />
            <div className="mt-10 grid grid-cols-2 gap-7">
              {[
                ['ShieldCheck', 'Soutien optimal', 'Un maintien précis, nuit après nuit.'],
                ['Wind', 'Respirabilité', 'Une circulation de l’air naturelle.'],
                ['Sparkles', 'Confort longue durée', 'Des matériaux faits pour durer.'],
                ['Check', 'Adaptation du corps', 'Un accueil qui suit vos mouvements.'],
              ].map(([Icon, title, copy]) => (
                <div key={title}>
                  <div className="mb-5 text-primary">{/* Icons are imported via lucide-react directly in page, we'll use dynamic import */}</div>
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85"
              alt="Matelas et linge de lit premium"
              width={600}
              height={500}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </section>

        {/* Fermeté */}
        <section className="bg-muted px-6 py-20 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
            <SectionTitle eyebrow="La bonne fermeté" title="Choisissez votre niveau de confort" />
            <div className="w-full max-w-xl">
              <div className="h-1 bg-border">
                <div className="h-1 w-2/3 bg-primary" />
              </div>
              <div className="mt-5 flex justify-between text-xs text-muted-foreground">
                <span>Souple</span>
                <span>Mi-ferme</span>
                <span>Ferme</span>
                <span>Extra ferme</span>
              </div>
              <div className="mt-12 flex flex-wrap gap-2">
                {['90 × 190', '90 × 200', '120 × 190', '140 × 190', '140 × 200', '160 × 200', '180 × 200', '200 × 200'].map(
                  (d) => (
                    <button key={d} className="rounded-full border border-border bg-background px-4 py-3 text-xs hover:border-primary">
                      {d}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Esprit DORFLEX */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85"
              alt="Intérieur chaleureux DORFLEX"
              width={600}
              height={450}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="lg:pl-10">
            <SectionTitle
              eyebrow="L'esprit DORFLEX"
              title="Parce que vos nuits méritent le meilleur."
              copy="Chez DORFLEX, nous pensons qu'un bon sommeil commence par un confort adapté. Chaque matelas est pensé pour accompagner vos nuits et vous offrir une expérience de sommeil agréable."
            />
            <Link
              href="/a-propos"
              className="mt-8 inline-block rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-primary-foreground"
            >
              Découvrir DORFLEX →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}