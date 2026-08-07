export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  category: string
  difficulty: Difficulty
  color: string
  featured?: boolean
  github?: string
  demo?: string
}

export const categories = [
  'All',
  'Web Apps',
  'CLI Tools',
  'Discord Bots',
  'AI / ML',
  'Developer Tools',
  'Games',
] as const

export const difficulties: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced']

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'TermKit',
    description: 'A batteries-included terminal starter that bundles starship prompts, sane aliases and zero-config dotfiles.',
    tech: ['TypeScript', 'Node.js', 'Shell'],
    category: 'CLI Tools',
    difficulty: 'Beginner',
    color: 'bg-gradient-to-b from-white to-black',
    featured: true,
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
    demo: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    id: 'p2',
    title: 'VibeRooms',
    description: 'Study together in shared voice rooms with focus timers, pomodoro stats and ambient soundscapes.',
    tech: ['Vue', 'Tailwind', 'WebRTC'],
    category: 'Web Apps',
    difficulty: 'Intermediate',
    color: 'bg-gradient-to-t from-white to-black',
    featured: true,
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
    demo: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    id: 'p3',
    title: 'NexusBot',
    description: 'The community bot behind NEXT-GEN — moderation, XP, polls and a leveling system that stays out of the way.',
    tech: ['TypeScript', 'Discord.js', 'PostgreSQL'],
    category: 'Discord Bots',
    difficulty: 'Intermediate',
    color: 'bg-gradient-to-b from-white to-black',
    featured: true,
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    id: 'p4',
    title: 'Codewall',
    description: 'A community gallery of one-line wins — the snippet you finally got working at 2am, immortalized.',
    tech: ['JavaScript', 'Canvas', 'CSS'],
    category: 'Web Apps',
    difficulty: 'Beginner',
    color: 'bg-gradient-to-t from-white to-black',
    featured: true,
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
    demo: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    id: 'p5',
    title: 'Port',
    description: 'Spin up isolated dev environments for any stack with a single YAML file and a tauri shell.',
    tech: ['Rust', 'Tauri', 'Docker'],
    category: 'Developer Tools',
    difficulty: 'Advanced',
    color: 'bg-gradient-to-b from-white to-black',
    featured: true,
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    id: 'p6',
    title: 'LearnMap',
    description: 'Curated roadmaps that turn "what do I learn next?" into a step-by-step plan with checkpoints.',
    tech: ['Vue', 'D3.js', 'PostgreSQL'],
    category: 'Web Apps',
    difficulty: 'Beginner',
    color: 'bg-gradient-to-t from-white to-black',
    featured: true,
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
    demo: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    id: 'p7',
    title: 'VoiceDock',
    description: 'A peer-to-peer study client with low-latency voice, screen-share and built-in whiteboard.',
    tech: ['C++', 'Qt', 'WebRTC'],
    category: 'Developer Tools',
    difficulty: 'Advanced',
    color: 'bg-gradient-to-b from-white to-black',
    featured: true,
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    id: 'p8',
    title: 'PushIt',
    description: 'Track your daily commits and get a streak ring — motivation measured in green squares.',
    tech: ['Vue', 'Chart.js', 'Node.js'],
    category: 'Web Apps',
    difficulty: 'Beginner',
    color: 'bg-gradient-to-t from-white to-black',
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
    demo: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    id: 'p9',
    title: 'ModelFarm',
    description: 'Training playground for the study group — compare fine-tunes, log runs, share baselines.',
    tech: ['Python', 'PyTorch', 'FastAPI'],
    category: 'AI / ML',
    difficulty: 'Advanced',
    color: 'bg-gradient-to-b from-white to-black',
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    id: 'p10',
    title: 'Dotfiles',
    description: 'The shared dotfiles repo. Steal anything, PR your own, keep a consistent setup across every box.',
    tech: ['Shell', 'Zsh', 'Neovim'],
    category: 'CLI Tools',
    difficulty: 'Beginner',
    color: 'bg-gradient-to-t from-white to-black',
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    id: 'p11',
    title: 'CoderMatch',
    description: 'Pair programmers by skill gap and goal — a dating app for your next collaboration.',
    tech: ['TypeScript', 'Vue', 'Redis'],
    category: 'Web Apps',
    difficulty: 'Intermediate',
    color: 'bg-gradient-to-b from-white to-black',
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
    demo: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    id: 'p12',
    title: 'Hextris',
    description: 'A web remake of a falling-blocks classic with daily challenges and a leaderboard.',
    tech: ['JavaScript', 'Canvas', 'CSS'],
    category: 'Games',
    difficulty: 'Beginner',
    color: 'bg-gradient-to-t from-white to-black',
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
    demo: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
]
