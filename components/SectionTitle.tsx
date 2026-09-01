interface Props {
  eyebrow: string
  title: string
  copy?: string
}

export default function SectionTitle({ eyebrow, title, copy }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-tight md:text-5xl">{title}</h2>
      {copy && <p className="mt-5 leading-7 text-muted-foreground">{copy}</p>}
    </div>
  )
}