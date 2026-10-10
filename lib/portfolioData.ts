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
  name: 'ROBERT JIMENEZ REYES',
  /** Subtítulo que acompaña al logo. */
  tagline: 'CREADOR DE VIDEOJUEGOS',
  /** Iniciales mostradas dentro de la insignia del logo. */
  initials: 'RR',
  /** Texto de la píldora de estado. Pon `available: false` para ocultarla. */
  status: {
    available: false,
    label: 'Disponible para Proyectos',
  },
  /** Email usado por el botón "Contáctame". */
  email: 'robertjimenezreyes64@gmail.com',
  /** Texto breve de la sección "Sobre Mí" (pie de página). */
  about:
    'Desarrollador de videojuegos con 2 años de experiencia práctica en proyectos académicos y colaborativos, utilizando Unreal Engine y Unity. Enfocado en gameplay programming, implementación de mecánicas y desarrollo de experiencias jugables.',
  location: 'Santo Domingo Oeste, Republica Dominicana , Remoto',
  /**
   * Foto de la sección "Sobre Mí". Sube tu imagen a /public/profile/
   * y cambia `src` (ej. "/profile/mi-foto.jpg"). Se recorta en formato cuadrado.
   */

   photo: {
  src: '/profile/ID-CARD2.jpeg',
  alt: 'Foto de perfil de Robert Jimenez Reyes',
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
  
]

/* ----------------------------------------------------------------------------
 * 3. REDES SOCIALES
 *    Sustituye cada `href` por tu URL real. Para ocultar una red, elimínala
 *    del array. Iconos disponibles: github | instagram | itchio | youtube |
 *    linkedin | x
 * ------------------------------------------------------------------------- */
export type SocialIcon = 'github' | 'instagram' | 'itchio' | 'youtube' | 'linkedin' | 'x'

export const socialLinks: { name: string; href: string; icon: SocialIcon }[] = [
  { name: 'GitHub', href: 'https://github.com/RomaReyes', icon: 'github' },
  { name: 'Instagram', href: 'https://instagram.com/robert.theflame', icon: 'instagram' },
  { name: 'Itch.io', href: 'https://AdderFurious.itch.io', icon: 'itchio' },
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
  'Unity ',
] as const

export type ProjectCategory = Exclude<(typeof projectCategories)[number], 'Todos'>

export interface Project {
  id: string
  title: string
  role: string
  engine: ProjectCategory
  genre: string
  year: string

  description: string
  longDescription: string

  participation?: string

  tech: string[]

  thumbnail: string

  video?: string

  showDemoOnCard?: boolean

  gallery: string[]

  mechanics: { title: string; detail: string }[]

  stats: { label: string; value: string }[]

  links: { demo?: string; code?: string }
}


export const projects: Project[] = [
  {
    id: 'the-last-track-of-time',
    title: 'The Last Track Of Time',
    role: 'Proyecto grupal',
    engine: 'Unreal Engine',
    genre: 'Puzzle',
    year: '',
    description:
      'Eres un viajero del tiempo el cual debe de ubicar a un ladrón del tiempo el cual se robó un codex de los cuales los oficiales del tiempo poseen para reestructurar las líneas temporales.',
    longDescription:
      'Eres un viajero del tiempo el cual debe de ubicar a un ladrón del tiempo el cual se robó un codex de los cuales los oficiales del tiempo poseen para reestructurar las líneas temporales.',

      participation:
      'Programación: Programé las interfaces y busqueda de sonidos y assets para el proyecto.',

    tech: ['Unreal Engine 5, blueprints'],
    thumbnail: '/projects/the-last-track-of-time/main-menu.png',
    video: '/videos/the-last-track-of-time-gameplay.mp4',
    showDemoOnCard: false,
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
    id: 'piropeo',
    title: 'Piropeo',
    role: 'Proyecto grupal',
    engine: 'Unity ',
    genre: '2D y Top-Down',
    year: '',
    description:
      'Piropeo es un arcade 2.5D donde la protagonista es una mujer que debe eliminar enemigos en la calle antes de que se acabe el tiempo.',
    longDescription:
      'Piropeo es un arcade 2.5D donde la protagonista es una mujer que debe eliminar enemigos en la calle antes de que se acabe el tiempo.',
participation:
      'diseño de sonido y busqueda de assets',



    tech: ['Unity 6', 'C#'],
    thumbnail: '/projects/piropeo/logo.png',
    video: '/videos/piropeo-gameplay.mp4',
    showDemoOnCard: false,
    gallery: ['/projects/piropeo/main-menu.png'],
    mechanics: [],
    stats: [{ label: 'Plataforma', value: 'PC' }],
    links: {},
  },

   {
    id: 'Target Rush',
    title: 'Target Rush',
    role: 'Proyecto grupal',
    engine: 'Unity ',
    genre: 'Realidad Virtual' ,
    year: '2025',

    description:
      'Simualción en realidad virtual sobre un campo de tiro espacial, debes disparar a todas las dianas antes de que acabe el tiempo.',

    longDescription:
           'Simualción en realidad virtual sobre un campo de tiro espacial, debes disparar a todas las dianas antes de que acabe el tiempo.',

           participation:
          'Diseñador: Diseño de interfaz, busqueda de assets y sonidos',


  
    tech: ['Unity 6', 'C#'],

    thumbnail: '/projects/TargetRush/TargetRush MainMenu.jpeg',

    video: '/videos/Target rush Gameplay.mp4',

    showDemoOnCard: false,

gallery: [
  '/projects/TargetRush/TargetRush MainMenu.jpeg',
  '/projects/TargetRush/Screenshot 2026-09-29 165722.png',
  '/projects/TargetRush/Screenshot 2026-09-29 165641.png',
],
    mechanics: [],

    stats: [
      { label: 'Plataforma', value: 'PC' },
    ],

    links: {},
  },


{
  id: 'Miner Journey',
  title: 'Miner Journey',
  role: 'Proyecto grupal',
  engine: 'Unreal Engine',
  genre: 'Aventura / RPG',
  year: '2026',

  description:
    'Juego de aventura y supervivencia con perspectiva top-down, donde exploras distintos biomas, recolectas recursos y gestionas tu salud e inventario para sobrevivir.',

  longDescription:
    'Miner Journey es un juego de aventura y supervivencia con perspectiva top-down en el que el jugador controla a un minero que debe explorar distintos biomas, como bosques, desiertos y mazmorras. Durante la aventura, deberá utilizar diferentes herramientas para recolectar recursos, gestionar su salud e inventario y enfrentarse a los peligros de cada entorno. El juego combina exploración, recolección y gestión de recursos como parte principal de su experiencia.',

     participation:
      'Programador y Diseñador: programé las mecanicas de jugabilidad, diseñé niveles y gestioné la integración de assets y sonidos.',

  tech: ['Unreal Engine 5', 'Blueprints'],

  thumbnail: '/projects/MinerJourney/Portada(Windows).png',

  video: '/videos/miner-journey-gameplay.mp4',

  showDemoOnCard: false,

  gallery: [
    '/projects/MinerJourney/Miner1.jpeg',
    '/projects/MinerJourney/Miner2.jpeg',
    '/projects/MinerJourney/Miner3.jpeg',
  ],

  mechanics: [],

  stats: [
    { label: 'Plataforma', value: 'PC' },
  ],

  links: {},
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
    title: 'Motores Graficos',
    subtitle: '',
    icon: Boxes,
    items: [
      { name: 'Unreal Engine 5', level: 100, detail: 'Niagara, Lumen, ' },
      { name: 'Unity 3D / 2D', level: 100, detail: 'URP/HDRP, C#' },
    ],
  },
  {
    id: 'lenguajes',
    title: 'Lenguajes',
    subtitle: 'Programación',
    icon: Code2,
    items: [
      { name: 'Blueprints',  },
      { name: 'C#', },
    ],
  },
  {
    id: 'herramientas',
    title: 'Herramientas',
    subtitle: '',
    icon: Wrench,
    items: [
      { name: 'Blender', detail: 'Modelado 3D' },
      { name: 'Git', detail: 'Control de versiones para equipos' },
      { name:  'Figma', detail: 'Interfaz de usuario UI / UX' },
    ],
  },
]
