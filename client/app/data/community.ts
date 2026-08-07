export interface ChannelGroup {
  label: string
  icon: string
  description: string
  channels: string[]
}

export const channelGroups: ChannelGroup[] = [
  {
    label: 'General',
    icon: 'i-heroicons-chat-bubble-left-right',
    description: 'Where the community lives, breathes and memes.',
    channels: ['#welcome', '#announcements', '#general', '#introductions'],
  },
  {
    label: 'Learning',
    icon: 'i-heroicons-academic-cap',
    description: 'Study rooms, mentorship and structured learning paths.',
    channels: ['#study-rooms', '#ask-anything', '#mentorship', '#book-club'],
  },
  {
    label: 'Coding',
    icon: 'i-heroicons-code-bracket-square',
    description: 'Share code, get reviews and grind through problems.',
    channels: ['#code-review', '#project-showcase', '#dsa-grind', '#help-me-debug'],
  },
  {
    label: 'Events',
    icon: 'i-heroicons-trophy',
    description: 'Hackathons, game nights and weekly meetups.',
    channels: ['#hackathons', '#game-nights', '#events', '#polls'],
  },
  {
    label: 'Off-topic',
    icon: 'i-heroicons-fire',
    description: 'Music, games, art and everything that is not code.',
    channels: ['#off-topic', '#music', '#art', '#gaming'],
  },
]

export interface CommunityEvent {
  title: string
  date: string
  month: string
  type: 'Hackathon' | 'Study Session' | 'Workshop' | 'Meetup' | 'Game Night'
  description: string
  past?: boolean
}

export const events: CommunityEvent[] = [
  {
    title: 'Build Sprint: Week-long Hackathon',
    date: '24',
    month: 'AUG',
    type: 'Hackathon',
    description: 'Build something in a week with a random team. Theme drops at kickoff, prizes at the end.',
  },
  {
    title: 'System Design Deep Dive',
    date: '12',
    month: 'SEP',
    type: 'Workshop',
    description: 'Whiteboard a distributed system from scratch with the mentorship crew. Zero experience required.',
  },
  {
    title: 'Study Room Fridays',
    date: 'Every',
    month: 'WEEK',
    type: 'Study Session',
    description: 'Two hours of focused, camera-on study sprints followed by a social wind-down.',
  },
  {
    title: 'Community Meetup — Online',
    date: '02',
    month: 'OCT',
    type: 'Meetup',
    description: 'Show-and-tell: members demo what they shipped this quarter. Bring a screen, no pressure.',
  },
]

export interface LearningPath {
  title: string
  level: string
  description: string
  topics: string[]
  weeks: string
}

export const learningPaths: LearningPath[] = [
  {
    title: 'Web Fundamentals',
    level: 'Beginner',
    description: 'HTML, CSS, JavaScript and the mental model of how the web actually works.',
    topics: ['HTML & CSS', 'JavaScript', 'HTTP & APIs', 'Deploying your first site'],
    weeks: '8 weeks',
  },
  {
    title: 'Full-Stack Builds',
    level: 'Intermediate',
    description: 'Ship real products end-to-end with Vue, Node and PostgreSQL.',
    topics: ['Vue 3', 'Node.js', 'SQL', 'Auth & security'],
    weeks: '10 weeks',
  },
  {
    title: 'Algorithms & Interview Prep',
    level: 'Intermediate',
    description: 'Daily grind with a support system. DSA in the language you like.',
    topics: ['Data structures', 'Graphs & DP', 'Mock interviews', 'System design basics'],
    weeks: '12 weeks',
  },
  {
    title: 'Machine Learning Foundations',
    level: 'Advanced',
    description: 'From gradients to deployed models, taught by the Friday paper group.',
    topics: ['Linear algebra review', 'PyTorch', 'Training loops', 'Evaluation & deployment'],
    weeks: '12 weeks',
  },
]

export interface Resource {
  title: string
  description: string
  icon: string
  href: string
}

export const resources: Resource[] = [
  {
    title: 'Open Source Guide',
    description: 'How to make your first PR without fear — issues, branches, reviews, the whole flow.',
    icon: 'i-heroicons-code-bracket-square',
    href: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    title: 'Learning Paths',
    description: 'Structured roadmaps with checkpoints, kept up to date by the mentorship team.',
    icon: 'i-heroicons-map',
    href: '/community',
  },
  {
    title: 'Project Templates',
    description: 'Batteries-included starters for every stack we use as a community.',
    icon: 'i-heroicons-squares-2x2',
    href: 'https://github.com/NEXT-GEN-PROGRAMMING',
  },
  {
    title: 'Interview Question Bank',
    description: 'A community-curated bank of problems and writeups from members who have been there.',
    icon: 'i-heroicons-document-text',
    href: '/community',
  },
]
