import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'À propos de DORFLEX | Notre histoire',
  description: 'Depuis 1998, DORFLEX conçoit des matelas alliant technologie et confort pour vos nuits.',
}

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-primary">L'esprit DORFLEX</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-tight md:text-7xl">
            Le confort qui transforme vos nuits.
          </h1>
          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
            <Image
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85"
              alt="Chambre DORFLEX"
              width={600}
              height={450}
              className="aspect-[4/3] rounded-2xl object-cover"
            />
            <div className="leading-8 text-muted-foreground">
              <h2 className="font-display text-3xl text-foreground">Parce que chaque nuit compte.</h2>
              <p className="mt-5">
                Depuis 1998, DORFLEX imagine des matelas qui réconcilient technologie et sensation. Nous croyons qu'un sommeil de qualité ne devrait jamais être un luxe inaccessible.
              </p>
              <p className="mt-5">
                Notre exigence se retrouve dans chaque matière, chaque couture, chaque détail pensé pour durer.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}