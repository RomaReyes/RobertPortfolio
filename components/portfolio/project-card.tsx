import Image from 'next/image'
import { ChevronRight, Code2, Play } from 'lucide-react'
import type { Project } from '@/lib/portfolioData'

/**
 * Tarjeta de proyecto (glassmorphism).
 * Si el proyecto tiene `video`, se reproduce en bucle; si no, se usa `thumbnail`.
 * Toda la tarjeta abre el modal; los botones de demo/código abren enlaces externos.
 */
export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-card/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/60">
      {/* ---------- Media: vídeo en bucle o miniatura ---------- */}
      <div className="relative aspect-video overflow-hidden">
        {project.video ? (
          <video
            src={project.video}
            poster={project.thumbnail}
            autoPlay
            muted
            loop
            playsInline
            className="size-full object-cover"
          />
        ) : (
          <Image
            src={project.thumbnail || '/placeholder.svg'}
            alt={`Captura de ${project.title}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" aria-hidden="true" />

        {/* Píldoras superiores: motor + género */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-primary/40 bg-background/70 px-3 py-1 font-tech text-xs font-bold uppercase tracking-wider text-primary backdrop-blur">
            {project.engine}
          </span>
          <span className="rounded-full border border-accent/40 bg-background/70 px-3 py-1 font-tech text-xs font-bold uppercase tracking-wider text-accent backdrop-blur">
            {project.genre}
          </span>
        </div>

        <span
          className="absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-full border border-primary/50 bg-background/60 text-primary opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        >
          <Play className="size-4 fill-current" />
        </span>
      </div>

      {/* ---------- Contenido ---------- */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-1">
          <p className="font-tech text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {project.role} · {project.year}
          </p>
          <h3 className="font-display text-2xl font-bold tracking-wide text-foreground">
            {/* El botón invisible cubre toda la tarjeta para abrir el modal */}
            <button
              type="button"
              onClick={onOpen}
              className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
            >
              {project.title}
            </button>
          </h3>
        </div>

        <p className="text-pretty leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="flex flex-wrap gap-2" aria-label="Tecnologías">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-xs text-foreground/80"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4">
          <span className="inline-flex items-center gap-1 font-tech text-sm font-bold uppercase tracking-wider text-primary transition-transform group-hover:translate-x-1">
            Ficha Técnica
            <ChevronRight className="size-4" aria-hidden="true" />
          </span>

          {/* z-10 para quedar por encima del botón que cubre la tarjeta */}
          <div className="relative z-10 flex gap-2">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 font-tech text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-background"
              >
                <Play className="size-3.5" aria-hidden="true" />
                Demo
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 font-tech text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Code2 className="size-3.5" aria-hidden="true" />
                Código
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
