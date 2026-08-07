export interface FaqCategory {
  id: string
  label: string
  questions: { q: string; a: string }[]
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    questions: [
      {
        q: 'How do I join the community?',
        a: 'Join through the Discord invite link in the top-right corner. You will land in #welcome, introduce yourself, and you are in. There is no application and no approval queue.',
      },
      {
        q: 'Do I need to be an experienced programmer?',
        a: 'No. NEXT-GEN is built for everyone from complete beginners to working engineers. The mentors and study rooms exist specifically so that no one has to learn alone.',
      },
      {
        q: 'Is the community free to join?',
        a: 'Yes — joining and participating is completely free. All resources, study rooms and hackathons are open to every member.',
      },
      {
        q: 'What are the rules?',
        a: 'Be respectful, be constructive, and help others when you can. Full details live in #rules and our Code of Conduct. Keep it friendly and the community keeps itself.',
      },
    ],
  },
  {
    id: 'learning',
    label: 'Learning & Mentorship',
    questions: [
      {
        q: 'How do the study rooms work?',
        a: 'Study rooms are scheduled focus sessions (usually Friday evenings) where members work on their own goals in a shared voice room with a timer. There is no teaching in study rooms — just company.',
      },
      {
        q: 'How do I get a mentor?',
        a: 'Mention what you are working on in #mentorship and a mentor will pick you up, or pick a mentor directly from the members page and reach out. Pairing usually happens within a few days.',
      },
      {
        q: 'Are there structured learning paths?',
        a: 'Yes. Our Community page lists four paths — Web Fundamentals, Full-Stack Builds, Algorithms & Interview Prep and ML Foundations — each with topics and a rough timeline.',
      },
      {
        q: 'Can I ask for code reviews?',
        a: 'Absolutely, that is what #code-review is for. Post a link or paste your code, mention what you are unsure about, and a mentor or contributor will review it.',
      },
    ],
  },
  {
    id: 'projects',
    label: 'Projects & Events',
    questions: [
      {
        q: 'Can I showcase my project?',
        a: 'Yes — drop it in #project-showcase and add it to the Projects page via a pull request. Featured projects get a spot in the coverflow on the homepage.',
      },
      {
        q: 'Do I need a team to join a hackathon?',
        a: 'No. Solo builds are welcome, and we run a team-finder channel before every hackathon so you can team up or fly solo.',
      },
      {
        q: 'Are hackathons judged?',
        a: 'Yes, but the focus is on learning and shipping, not winning. Every project gets feedback from the judges regardless of placement.',
      },
      {
        q: 'How often are events hosted?',
        a: 'Roughly every week: a weekly study session, a monthly workshop, and a big hackathon every quarter. Event announcements always land in #announcements.',
      },
    ],
  },
  {
    id: 'contributing',
    label: 'Contributing',
    questions: [
      {
        q: 'How can I contribute to this website?',
        a: 'Everything is open source on GitHub. Pick a "good first issue", follow the contributing guide, and open a pull request. Our CI checks lint, types and tests before merge.',
      },
      {
        q: 'I found a bug or have an idea. Where do I report it?',
        a: 'Open an issue on the repository using the bug report or feature request template. Include steps to reproduce for bugs and as much context as you can.',
      },
      {
        q: 'Can I become a moderator or mentor?',
        a: 'Roles are earned through consistent, helpful contributions. Keep showing up, helping others and building — when the team sees it, they will ask.',
      },
      {
        q: 'Is there a code of conduct?',
        a: 'Yes. It applies to everyone, everywhere in the community — Discord, GitHub and events. It keeps NEXT-GEN a place worth coming back to.',
      },
    ],
  },
]
