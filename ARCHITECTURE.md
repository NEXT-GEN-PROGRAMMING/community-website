# NEXTGEN Platform Architecture & Product Spec

## 1. High-Level System Architecture

The NEXTGEN platform is designed using a modern decoupled architecture. The frontend (Nuxt) handles rendering and UI, while the backend (Fastify) acts as the secure gateway to the database and external APIs (like Discord).

```mermaid
graph TD
    U[Community Member] -->|Visits Website| C

    subgraph Frontend
        C[Client App]
        S[Pinia Store]
    end

    subgraph Backend
        A[API Routes]
        M[Auth & Role Middleware]
    end

    subgraph Database
        DB[(PostgreSQL 18)]
        R[(Redis 8)]
    end

    subgraph External
        DC[Discord API]
    end

    C --- S
    C -- REST / JSON --- A
    A --- M
    M -- Session / Cache --- R
    A -- Prisma ORM --- DB
    A -- OAuth2 & Live Stats --- DC
```

## 2. Authentication & Authorization Flow

To verify that someone is actually a member of the NEXTGEN Discord server (and to automatically assign Mod/Admin rights), we will use **Discord OAuth2**. 

```mermaid
sequenceDiagram
    participant User
    participant Nuxt (Frontend)
    participant Fastify (Backend)
    participant Discord API

    User->>Nuxt (Frontend): Clicks "Login with Discord"
    Nuxt (Frontend)->>Discord API: Redirects to Discord Auth
    Discord API-->>User: Prompts for permission
    User->>Discord API: Approves
    Discord API-->>Fastify (Backend): Sends OAuth Code
    Fastify (Backend)->>Discord API: Requests User Profile & Guild Roles
    Discord API-->>Fastify (Backend): Returns User Data & Roles (e.g. Mod, Admin)
    
    alt User is NOT in the NEXTGEN server
        Fastify (Backend)-->>Nuxt (Frontend): Deny Access (Error)
    else User IS in the server
        Fastify (Backend)->>Database: Sync User Profile & Roles
        Fastify (Backend)->>Redis: Create active session
        Fastify (Backend)-->>Nuxt (Frontend): Return JWT / Session Cookie
    end
    
    Nuxt (Frontend)-->>User: Show Logged In State (Avatar, Profile)
```

## 3. Project & Resource Submission Flow (Moderator Approval)

To keep the platform safe and high-quality, user submissions (Projects, Resources, Blogs) go into a "Pending" queue that only Moderators and Admins can approve.

```mermaid
stateDiagram-v2
    [*] --> Draft: User writes description & links
    Draft --> Pending_Review: User submits
    
    state Pending_Review {
        direction LR
        [*] --> In_Queue
        In_Queue --> Mod_Review: Mod opens submission
    }
    
    Pending_Review --> Approved: Mod Approves
    Pending_Review --> Rejected: Mod Rejects (with reason)
    
    Approved --> Live_On_Website: Publicly Visible
    Live_On_Website --> Shared_On_Socials: User clicks Share (X, LinkedIn)
    
    Rejected --> Draft: User can edit and resubmit
```

## 4. Product Strategy: Engagement & Retention

To make people visit the platform frequently (more than just a standard landing page), we need **hooks** and **gamification**. Here are ideas to increase engagement:

### 1. Gamification & Leaderboards
- **Reputation Points (XP)**: Users earn points when their projects/resources get approved, or when other members "Upvote" their projects.
- **Monthly Leaderboard**: Display the top 10 most active or highly-upvoted contributors on the homepage.
- **Discord Role Sync**: If someone reaches a certain level of points on the website, the Fastify backend automatically gives them a special "Top Contributor" role inside the Discord server!

### 2. User Profiles (Portfolios)
- Instead of just dumping projects into a feed, give every user a public profile page (e.g., `nextgen.com/u/Username`). 
- This page acts as their personal developer portfolio, showing off their approved projects, blogs, and badges. They will naturally want to share this link on their X and LinkedIn!

### 3. "Project of the Week" Spotlight
- Admins can pin one exceptional project to the very top of the homepage every week. 
- Getting the "Spotlight" could grant the user a special badge on their profile and in the Discord server.

### 4. Interactive Live Stats
- The homepage will query your Discord Bot (via the Fastify backend -> Redis cache) to show exactly how many people are online right now. 
- You could also show a live ticker of the "latest messages" or "active voice channels" to make the website feel alive.

### 5. Social Share Cards (Open Graph)
- When a user shares their project to X (Twitter) or LinkedIn, the website should automatically generate a beautiful preview image (OG Image) featuring the project title, their Discord avatar, and the NEXTGEN logo. This drives immense organic traffic back to your site.
