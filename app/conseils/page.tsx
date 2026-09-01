import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const articles = [
  {
    title: 'Comment choisir son matelas ?',
    copy: 'Le guide essentiel pour comprendre vos besoins et faire le bon choix.',
    img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457',
  },
  {
    title: 'Quelle fermeté choisir ?',
    copy: 'Souple, mi-ferme ou ferme : écoutez votre corps avant tout.',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  },
  {
    title: 'Mousse ou ressorts ?',
    copy: 'Deux technologies, deux sensations. On vous aide à y voir plus clair.',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
  },
  {
    title: 'Comment améliorer son sommeil ?',
    copy: 'Nos rituels simples pour préparer une nuit vraiment réparatrice.',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
  },
]

export default function Advice() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-primary">Le journal DORFLEX</p>
          <h1 className="mt-5 font-display text-5xl md:text-7xl">Conseils sommeil</h1>
          <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
            Des conseils simples et précis pour mieux comprendre vos nuits.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {articles.map((article) => (
              <article key={article.title} className="group overflow-hidden rounded-2xl bg-card">
                <Image
                  src={`${article.img}?auto=format&fit=crop&w=900&q=85`}
                  alt=""
                  width={900}
                  height={506}
                  className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-primary">Guide sommeil · 12 juin 2026</p>
                  <h2 className="mt-3 font-display text-2xl">{article.title}</h2>
                  <p className="mt-3 leading-6 text-muted-foreground">{article.copy}</p>
                  <Link href="/contact" className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider">
                    Lire l'article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}