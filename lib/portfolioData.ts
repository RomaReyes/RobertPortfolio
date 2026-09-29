/**
 * ============================================================================
 *  PORTFOLIO DATA — ARCHIVO CENTRAL DE CONTENIDO
 * ============================================================================
 *  Edita este archivo para personalizar TODO el portafolio sin tocar los
 *  componentes: textos, enlaces a redes sociales, proyectos, imágenes,
 *  vídeos y habilidades.
 *
 *  - Imágenes: colócalas en /public (por ejemplo /public/projects/mi-juego.png)
 *    y referéncialas como "/projects/mi-juego.png".
 *  - Vídeos: usa un .mp4/.webm en /public (ej. "/videos/trailer.mp4") o una
 *    URL directa a un archivo de vídeo. Déjalo vacío ("") para usar la imagen.
 * ============================================================================
 */

import {
  Boxes,
  Code2,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

/* ----------------------------------------------------------------------------
 * 1. PERFIL / MARCA PERSONAL
 * ------------------------------------------------------------------------- */
export const profile = {
  /** Nombre corto que aparece en el logo de la cabecera. */
  name: 'ALEX DEV',
  /** Subtítulo que acompaña al logo. */
  tagline: 'GAME CREATOR',
  /** Iniciales mostradas dentro de la insignia del logo. */
  initials: 'AD',
  /** Texto de la píldora de estado. Pon `available: false` para ocultarla. */
  status: {
    available: true,
    label: 'Disponible para Proyectos',
  },
  /** Email usado por el botón "Contáctame". */
  email: 'alex@alexdev.games',
  /** Texto breve de la sección "Sobre Mí" (pie de página). */
  about:
    'Desarrollador de videojuegos con más de 6 años creando experiencias jugables en Unreal y Unity. Me especializo en gameplay programming, sistemas de IA y optimización de rendimiento en producciones comerciales.',
  location: 'Madrid, España · Remoto',
  /**
   * Foto de la sección "Sobre Mí". Sube tu imagen a /public/profile/
   * y cambia `src` (ej. "/profile/mi-foto.jpg"). Se recorta en formato cuadrado.
   */
  photo: {
    src: '/profile/foto-perfil.png',
    alt: 'Foto de perfil de Alex, desarrollador de videojuegos',
  },
}

/* ----------------------------------------------------------------------------
 * 2. NAVEGACIÓN
 *    `href` debe coincidir con el `id` de cada sección de la página.
 * ------------------------------------------------------------------------- */
export const navLinks = [
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

/* ----------------------------------------------------------------------------
 * 3. REDES SOCIALES
 *    Sustituye cada `href` por tu URL real. Para ocultar una red, elimínala
 *    del array. Iconos disponibles: github | instagram | itchio | youtube |
 *    linkedin | x
 * ------------------------------------------------------------------------- */
export type SocialIcon = 'github' | 'instagram' | 'itchio' | 'youtube' | 'linkedin' | 'x'

export const socialLinks: { name: string; href: string; icon: SocialIcon }[] = [
  { name: 'GitHub', href: 'https://github.com/tu-usuario', icon: 'github' },
  { name: 'Instagram', href: 'https://instagram.com/tu-usuario', icon: 'instagram' },
  { name: 'Itch.io', href: 'https://tu-usuario.itch.io', icon: 'itchio' },
  { name: 'YouTube', href: 'https://youtube.com/@tu-canal', icon: 'youtube' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/tu-usuario', icon: 'linkedin' },
]

/* ----------------------------------------------------------------------------
 * 4. PROYECTOS
 *    `engine` determina en qué filtro aparece el proyecto. Si añades una
 *    categoría nueva, agrégala también a `projectCategories`.
 * ------------------------------------------------------------------------- */
export const projectCategories = [
  'Todos',
  'Unreal Engine',
  'Unity 3D',
] as const

export type ProjectCategory = Exclude<(typeof projectCategories)[number], 'Todos'>

export interface Project {
  id: string
  title: string
  /** Tu rol en el proyecto (ej. "Lead Gameplay Programmer"). */
  role: string
  engine: ProjectCategory
  genre: string
  year: string
  /** Descripción corta para la tarjeta. */
  description: string
  /** Descripción larga para la ficha técnica (modal). */
  longDescription: string
  tech: string[]
  /** Imagen de portada de la tarjeta. */
  thumbnail: string
  /** Vídeo opcional (mp4/webm). Si existe, se reproduce en bucle en la tarjeta y en el modal. */
  video?: string
  /** Imágenes extra para la galería del modal. */
  gallery: string[]
  /** Desglose de mecánicas / sistemas destacados. */
  mechanics: { title: string; detail: string }[]
  /** Datos rápidos mostrados en el modal. */
  stats: { label: string; value: string }[]
  links: { demo?: string; code?: string }
}

export const projects: Project[] = [
  {
    id: 'the-last-track-of-time',
    title: 'The Last Track Of Time',
    role: '',
    engine: 'Unreal Engine',
    genre: 'Deducción Social',
    year: '',
    description:
      'Eres un viajero del tiempo el cual debe de ubicar a un ladrón del tiempo el cual se robó un codex de los cuales los oficiales del tiempo poseen para reestructurar las líneas temporales.',
    longDescription:
      'Eres un viajero del tiempo el cual debe de ubicar a un ladrón del tiempo el cual se robó un codex de los cuales los oficiales del tiempo poseen para reestructurar las líneas temporales.',
    tech: ['UE5'],
    thumbnail: '/projects/the-last-track-of-time/main-menu.png',
    video: '/videos/the-last-track-of-time-gameplay.mp4',
    gallery: [
      '/projects/the-last-track-of-time/main-menu.png',
      '/projects/the-last-track-of-time/screenshot-1.png',
      '/projects/the-last-track-of-time/screenshot-2.png',
    ],
    mechanics: [],
    stats: [{ label: 'Plataforma', value: 'PC' }],
    links: {},
  },
  {
    id: 'orbital-drift',
    title: 'Orbital Drift',
    role: 'Game Developer & Physics',
    engine: 'Unity 3D',
    genre: 'Arcade Racing',
    year: '2024',
    description:
      'Carreras antigravedad a alta velocidad con físicas de derrape personalizadas, fantasmas online y pistas generadas proceduralmente.',
    longDescription:
      'Orbital Drift es un arcade racer de naves flotantes creado en Unity. Programé un controlador físico propio sobre Rigidbody con suspensión por raycast, derrape con acumulación de boost y un sistema de replays deterministas.',
    tech: ['Unity', 'C#', 'Shader Graph', 'Netcode', 'Cinemachine'],
    thumbnail: '/projects/orbital-drift.png',
    video: '',
    gallery: ['/projects/orbital-drift.png', '/projects/orbital-drift-2.png'],
    mechanics: [
      {
        title: 'Hover physics',
        detail: 'Suspensión por 4 raycasts con amortiguación PID para mantener la nave estable sobre superficies curvas.',
      },
      {
        title: 'Replays deterministas',
        detail: 'Grabación de inputs a tick fijo para reproducir fantasmas online con un tamaño de 12 KB por vuelta.',
      },
      {
        title: 'Shaders de velocidad',
        detail: 'Distorsión radial y trails en Shader Graph que reaccionan a la velocidad y al boost acumulado.',
      },
    ],
    stats: [
      { label: 'Equipo', value: '3 personas' },
      { label: 'Duración', value: '9 meses' },
      { label: 'Plataforma', value: 'PC / Switch' },
    ],
    links: { demo: 'https://tu-usuario.itch.io/orbital-drift', code: 'https://github.com/tu-usuario/orbital-drift' },
  },
]

/* ----------------------------------------------------------------------------
 * 5. HABILIDADES & MOTORES (Bento Grid)
 *    `level` es opcional (0-100) y dibuja una barra de progreso.
 *    `tag` es opcional y muestra una etiqueta (ej. "Experto").
 * ------------------------------------------------------------------------- */
export interface SkillItem {
  name: string
  tag?: string
  level?: number
  detail?: string
}

export interface SkillGroup {
  id: string
  title: string
  subtitle: string
  icon: LucideIcon
  items: SkillItem[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'motores',
    title: 'Motores',
    subtitle: 'Game Engines',
    icon: Boxes,
    items: [
      { name: 'Unreal Engine 5', tag: 'Experto', level: 92, detail: 'GAS, Niagara, Lumen, World Partition' },
      { name: 'Unity 3D / 2D', tag: 'Avanzado', level: 85, detail: 'URP/HDRP, DOTS, Addressables, C#' },
    ],
  },
  {
    id: 'lenguajes',
    title: 'Lenguajes',
    subtitle: 'Programming',
    icon: Code2,
    items: [
      { name: 'C++ / Blueprints', tag: 'Experto', level: 90 },
      { name: 'C#', tag: 'Avanzado', level: 86 },
    ],
  },
  {
    id: 'herramientas',
    title: 'Herramientas',
    subtitle: 'Toolchain',
    icon: Wrench,
    items: [
      { name: 'Blender', detail: 'Modelado, rigging, blockouts' },
      { name: 'Git / Git LFS / Perforce', detail: 'Control de versiones para equipos' },
    ],
  },
]
