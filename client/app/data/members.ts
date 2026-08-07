export type MemberRole = 'owner' | 'admin' | 'moderator' | 'mentor' | 'contributor'

export interface Member {
  id: string
  name: string
  handle: string
  role: MemberRole
  roleLabel: string
  bio: string
  languages: string[]
  pfp?: string
  github?: string
  x?: string
}

export const roleMeta: Record<MemberRole, { label: string; description: string }> = {
  owner: { label: 'Owner', description: 'Sets the direction and keeps the community alive.' },
  admin: { label: 'Administrator', description: 'Manages infrastructure, safety and day-to-day operations.' },
  moderator: { label: 'Moderator', description: 'Keeps the server welcoming and threads on topic.' },
  mentor: { label: 'Mentor', description: 'Reviews code, guides learning and runs study sessions.' },
  contributor: { label: 'Core Contributor', description: 'Shipped real projects and grown the community.' },
}

export const roleOrder: MemberRole[] = ['owner', 'admin', 'moderator', 'mentor', 'contributor']

export const members: Member[] = [
  {
    id: 'majestic',
    name: 'Majestic',
    handle: '@majestic',
    role: 'owner',
    roleLabel: 'Owner',
    bio: 'Founder of NEXT-GEN. Believes the best code is written in a room full of friends.',
    languages: ['TypeScript', 'Node.js', 'Go'],
    pfp: '/images/pfp/owner.png',
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    id: 'sir-wizard',
    name: 'Sir Wizard',
    handle: '@sirwizard',
    role: 'admin',
    roleLabel: 'Administrator',
    bio: 'Keeps the lights on, the servers fast and the community safe. Full-stack by trade.',
    languages: ['Rust', 'PostgreSQL', 'React'],
    pfp: '/images/pfp/admin.png',
    github: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    id: '0xna',
    name: '0xNA',
    handle: '@0xna',
    role: 'moderator',
    roleLabel: 'Moderator',
    bio: 'Moderator and resident automation nerd. If a task repeats, they script it.',
    languages: ['Python', 'Discord.js', 'Docker'],
    pfp: '/images/pfp/mod1.png',
  },
  {
    id: 'crunch',
    name: 'Crunch',
    handle: '@crunch',
    role: 'moderator',
    roleLabel: 'Moderator',
    bio: 'Moderator with an eye for clean architecture and even cleaner PRs.',
    languages: ['Vue', 'TypeScript', 'SQLite'],
    pfp: '/images/pfp/mod2.png',
  },
  {
    id: 'divyansh',
    name: 'Divyansh',
    handle: '@divyansh',
    role: 'moderator',
    roleLabel: 'Moderator',
    bio: 'Runs the weekly study rooms. Converts chaos into a study plan.',
    languages: ['C++', 'DSA', 'Web'],
    pfp: '/images/pfp/mod3.png',
  },
  {
    id: 'arjun',
    name: 'Arjun',
    handle: '@arjun',
    role: 'mentor',
    roleLabel: 'Mentor',
    bio: 'Backend mentor. Reviews architecture, teaches system design, and asks the hard questions.',
    languages: ['Go', 'Kubernetes', 'Redis'],
  },
  {
    id: 'elena',
    name: 'Elena',
    handle: '@elena',
    role: 'mentor',
    roleLabel: 'Mentor',
    bio: 'Frontend mentor and design systems enthusiast. Accessibility is not a feature, it is a requirement.',
    languages: ['TypeScript', 'Vue', 'CSS'],
  },
  {
    id: 'rafi',
    name: 'Rafi',
    handle: '@rafi',
    role: 'mentor',
    roleLabel: 'Mentor',
    bio: 'ML mentor. Runs the Friday paper-reading group and demos the models we build.',
    languages: ['Python', 'PyTorch', 'SQL'],
  },
  {
    id: 'mia',
    name: 'Mia',
    handle: '@mia',
    role: 'contributor',
    roleLabel: 'Core Contributor',
    bio: 'Built the community bot powering moderation and XP. Maintainer of our docs site.',
    languages: ['TypeScript', 'Discord.js', 'MDX'],
  },
  {
    id: 'jordan',
    name: 'Jordan',
    handle: '@jordan',
    role: 'contributor',
    roleLabel: 'Core Contributor',
    bio: 'CLI toolsmith. Everything he ships starts with a man page and ends with zero config.',
    languages: ['Rust', 'Go', 'Bash'],
  },
  {
    id: 'priya',
    name: 'Priya',
    handle: '@priya',
    role: 'contributor',
    roleLabel: 'Core Contributor',
    bio: 'Design-to-code bridge. Turns mockups into tasteful, animated interfaces.',
    languages: ['Vue', 'Tailwind', 'Figma'],
  },
  {
    id: 'leo',
    name: 'Leo',
    handle: '@leo',
    role: 'contributor',
    roleLabel: 'Core Contributor',
    bio: 'Game-dev contributor and WebGL tinkerer. Learning by shipping tiny games.',
    languages: ['TypeScript', 'Three.js', 'C#'],
  },
]
