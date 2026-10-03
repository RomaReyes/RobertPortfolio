import { profile } from '@/lib/portfolioData'

/**
 * Pie de página compacto que sirve como destino del enlace
 * "Contacto" (#contacto) de la navegación.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-background/60 backdrop-blur">
      <p className="py-6 text-center font-tech text-xs tracking-widest text-muted-foreground">
        {'© '}
        {new Date().getFullYear()} {profile.name} · {profile.tagline}
      </p>
    </footer>
  )
}