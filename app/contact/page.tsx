'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    // Ici vous pouvez ajouter l'envoi vers une API
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-14 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.25em] text-primary">Nous sommes à votre écoute</p>
            <h1 className="mt-5 font-display text-5xl md:text-7xl">Parlons de votre sommeil.</h1>
            <p className="mt-7 max-w-md leading-7 text-muted-foreground">
              Une question, un conseil ou un devis ? Notre équipe vous répond avec plaisir.
            </p>
            <div className="mt-12 flex flex-col gap-5 text-sm">
              <p>
                <strong>Téléphone</strong><br />
                <span className="text-muted-foreground">+212 5 22 00 00 00</span>
              </p>
              <p>
                <strong>Email</strong><br />
                <span className="text-muted-foreground">hello@dorflex.ma</span>
              </p>
              <p>
                <strong>Horaires</strong><br />
                <span className="text-muted-foreground">Lun — Sam · 9h00 — 18h00</span>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl bg-card p-6 md:p-10">
            <label className="text-sm">
              Nom
              <input required className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none focus:border-primary" />
            </label>
            <label className="text-sm">
              Téléphone
              <input required className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none focus:border-primary" />
            </label>
            <label className="text-sm">
              Email
              <input type="email" required className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none focus:border-primary" />
            </label>
            <label className="text-sm">
              Message
              <textarea required rows={4} className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 outline-none focus:border-primary" />
            </label>
            <button
              type="submit"
              className="mt-4 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              {sent ? 'Merci, votre demande est envoyée.' : 'Envoyer ma demande'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}