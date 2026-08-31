// All page copy and data lives here. Image paths are relative to /public and
// get PUBLIC_URL prepended at render time (see components/ImageSlot.js).

const meta = {
  name: "Morgan Metz",
  initials: "MM",
  tagline: "Systems engineer · open source enthusiast",
  location: "Charlottesville, VA",
};

const hero = {
  blurb:
    "I build systems that hold up when it matters. distributed infrastructure, smart contracts securing $30M+, and the security work that lets everyone else sleep. A lot of it ends up open source.",
  scrollHint: "follow the thread",
};

// Motion / backdrop tuning (mirrors the design's editable props).
const motion = {
  particleDensity: 260, // flow-field particles in the backdrop canvas
  magneticLetters: true, // hero letters repel the cursor
  marqueeSeconds: 26, // one full loop of the playground marquee
};

// Orbital nav — one button per quarter turn.
const navs = [
  { deg: 0, label: "Work", icon: "briefcase", target: "work" },
  { deg: 90, label: "Open source", icon: "gitBranch", target: "play" },
  { deg: 180, label: "About", icon: "user", target: "about" },
  { deg: 270, label: "Contact", icon: "paperPlane", target: "contact" },
];

// Sections the left-hand thread marks as you scroll.
const threadNodes = ["work", "play", "about", "experience", "quotes", "now", "contact"];

const projects = [
  {
    index: "01",
    kicker: "Avo · 2026",
    title: "Avo v3 — infrastructure & security",
    blurb:
      "Rebuilt Avo’s core infrastructure for the v3 launch and wrote the contracts holding $30M+ in platform value. Owned security end to end: audited every service, contract and endpoint, and added access controls to contain lateral movement.",
    tags: ["Rust · Anchor", "Distributed systems", "Security"],
    src: "/assets/avo.png",
    mobileSrc: "/assets/avo-mobile.png",
    placeholder: "Drop an Avo screenshot",
    url: "https://avo.so/",
    linkLabel: "avo.so",
  },
  {
    index: "02",
    kicker: "Hydex · 2025–26",
    title: "Hydex Name Service & hySOL",
    blurb:
      "Designed and led a fully on-chain, stateless, encrypted naming service, and helped architect the off-chain and MPC integrations powering the hySOL liquid staking token.",
    tags: ["Solana", "MPC", "Cryptography"],
    src: "/assets/hydex.png",
    fit: "contain",
    placeholder: "Drop a Hydex screenshot",
    url: "https://hydex.io/",
    linkLabel: "hydex.io",
  },
  {
    index: "03",
    kicker: "Personal project · public good",
    title: "Nebula",
    blurb:
      "Fully open-source NFT marketplace on CosmWasm with stateless collection management, minting and exchange. Handled $75K+ in value within three months of launch.",
    tags: ["CosmWasm", "Rust", "OSS"],
    src: "/assets/nebula.jpg",
    lightImage: true,
    fit: "contain",
    placeholder: "Drop a Nebula screenshot",
    url: "https://github.com/nebula-marketplace",
    linkLabel: "github.com/nebula-marketplace",
  },
  {
    index: "04",
    kicker: "Stakit Systems · 2023–24",
    title: "Multi-chain staking",
    blurb:
      "Deployed staking contracts across seven chains with the APIs that manage user data and funds, plus front-end work and performance tuning for systems running at scale.",
    tags: ["7 chains", "APIs", "Performance"],
    src: "/assets/stakit.jpg",
    fit: "cover",
    aspect: "2160/1925",
    placeholder: "Drop a Stakit screenshot",
    url: "http://stakit.com/",
    linkLabel: "stakit.com",
  },
  {
    index: "05",
    kicker: "Ongoing",
    title: "Open source contributions",
    blurb:
      "Patches landed in Zed, Solders, interactions.py and Fusion Core Finance — the editors, SDKs and protocols I actually use. Code that lives in other people’s projects is the best kind.",
    tags: ["Zed", "Solders", "interactions.py"],
    graph: true,
    url: "https://github.com/Morgandri1",
    linkLabel: "github.com/Morgandri1",
  },
];

const playground = {
  title: "Playground",
  subtitle: "my own projects, research and upstream patches",
  marquee: ["Zed", "Solders", "interactions.py", "Fusion Core Finance", "SolChess", "SandwichRelay", "Nebula"],
  cards: [
    {
      icon: "strategy",
      kicker: "Pet project",
      title: "SolChess",
      body:
        "P2P chess with SOL and USDC stakes on Elo-rated games. Engine, processing, UI, ratings, house bots and anticheat, all from scratch.",
    },
    {
      icon: "detective",
      kicker: "Research · public good",
      title: "SandwichRelay",
      body:
        "MEV research fork of the Jito relayer that detects sandwich-attack vectors by parsing swaps and analyzing slippage exposure.",
    },
    {
      icon: "gitPullRequest",
      kicker: "Upstream",
      title: "Open source contributions",
      body:
        "Patches landed in Zed, Solders, interactions.py and Fusion Core Finance — editors, SDKs and protocols I actually use.",
    },
  ],
};

const about = {
  lead:
    "I got here by taking things apart — CTFs first (highest Cyberstart America score in Virginia), then staking contracts across seven chains, then whole platforms. These days I care most about the unglamorous parts: the audit nobody notices, the error handling that saves a launch, the naming service that just works.",
  body:
    "Based in Charlottesville, Virginia. Rust and TypeScript most days, Go and Python when the job calls for it. When code I wrote shows up in someone else's project, that's the good stuff.",
  stats: [
    { n: "$30M+", label: "Value secured" },
    { n: "7", label: "Chains shipped to" },
    { n: "4+", label: "Years shipping" },
  ],
  portrait: "/assets/portrait.jpg",
  portraitPosition: "50% 11%",
  portraitPlaceholder: "Drop a portrait (dark background works best)",
};

const jobs = [
  {
    company: "Avo",
    url: "https://avo.so/",
    role: "Software Engineer",
    dates: "Apr 2026 – Present",
    where: "Remote",
    note: "Part-time Apr–Aug 2026 while transitioning from Hydex",
    points: [
      "Rebuilt Avo’s core infrastructure for its v3 launch",
      "Wrote Anchor smart contracts responsible for over $30M in platform TVL",
      "Built observability, metrics, and error handling for a highly distributed system at scale",
      "Owned platform security for the v3 launch; audited all services, contracts, and endpoints, and introduced internal access controls to contain lateral movement in the event of a breach",
    ],
  },
  {
    company: "Hydex",
    url: "https://hydex.io/",
    role: "Software Engineer",
    dates: "Dec 2025 – Aug 2026",
    where: "Remote",
    note: "Part-time Apr–Aug 2026 while transitioning to Avo",
    points: [
      "Helped architect the core structure for the off-chain and MPC integrations powering the hySOL LST",
      "Delivered security and efficiency improvements to Hydentity and the Hydex Router",
      "Spearheaded design and implementation of the Hydex Name Service — a fully on-chain, stateless, encrypted naming service on Solana",
    ],
  },
  {
    company: "CargoLabs",
    url: "http://cargolabs.org/",
    role: "Software Engineer (Contractor)",
    dates: "Apr 2024 – Aug 2024",
    where: "Charlottesville, VA",
    note: "Part-time alongside Stakit",
    points: [
      "Built insurance-purchasing APIs handling over $100K in transactions",
      "Built and managed CI/CD pipelines, AWS Lambda functions, Vercel deployments, and databases",
    ],
  },
  {
    company: "Stakit Systems",
    url: "http://stakit.com/",
    role: "Software Engineer (Contractor)",
    dates: "Dec 2023 – Aug 2024",
    where: "Remote",
    note: "Part-time Apr–Aug 2024 alongside CargoLabs",
    points: [
      "Deployed staking smart contracts across 7 chains, plus APIs to manage user data and funds",
      "Contributed to front-end development and performance tuning for scaled distributed systems",
    ],
  },
  {
    company: "DegenDevs",
    url: "https://github.com/DegenDevs",
    role: "Contractor",
    dates: "Jul 2022 – Dec 2025",
    where: "Remote",
    note: "Ongoing part-time contract work alongside other roles",
    points: [
      "Built web apps, smart contracts, and dev tooling on Solana, Cosmos, and EVM",
      "Managed databases, REST APIs, Lambda functions, and NGINX services/proxies",
      "Clients: LaunchMyNFT, Ultra Markets, Unison Wallet, EYEKON, PRMR, Eon Labs, and more",
    ],
  },
];

const quotes = [
  {
    text:
      "Morgan Metz is someone who brings a high level of professionalism, reliability, and thoughtfulness to everything he works on. He communicates clearly, follows through on commitments, and consistently adds value to the people around him. Morgan is dependable, easy to work with, and someone I would confidently recommend.",
    who: "Joseph Williams · DegenDevs",
  },
  {
    text:
      "Morgan is an excellent developer. His attention to detail and ability to understand complex systems combined with willingness to dive into challenging problems makes him a valuable asset to any dev team.",
    who: "Jack Terry · Hydex Founder & CEO",
    url: "https://x.com/JerkTerror",
  },
  {
    text:
      "Morgan is an incredible engineer to work with. He can quickly and deeply establish an understanding of a complex architecture or codebase. He has been foundational to the progression of Avo overall and especially for v3 as he has led the production instance of the codebase rewrite, mobile app, and overall on-chain architecture. As a team we are extremely proud to have him and as an individual I am happy to call him a brother.",
    who: "Souren Khetcho · Avo Founder & CEO",
    url: "https://www.linkedin.com/in/sourenkhetcho/",
  },
  {
    text:
      "Morgan is a diligent and experienced developer. He works hard, he’s creative, and he meets deadlines. He worked on a full TS → Rust cutover for a highly complex http/ws online gaming matchmaking server and did a great job. I’d highly recommend him.",
    who: "Josh Handelman · Founding Engineer @ Wagr",
    url: "https://www.linkedin.com/in/josh-handelman-312011252/",
  },
];

const now = [
  "Building and running v3 at Avo — core infrastructure, contracts and platform security.",
  "Contributing to Zed, Solders and interactions.py when the evenings allow.",
];

const contact = {
  prompt: "Building something that has to hold up?",
  email: "morgan.metz@eyekon.xyz",
  links: [
    { label: "GitHub", url: "https://github.com/morgandri1" },
    { label: "LinkedIn", url: "https://linkedin.com/in/morgandri1" },
    { label: "X", url: "https://x.com/morgandri1" },
    { label: "Résumé", url: "/assets/cv.pdf" },
  ],
  footerLeft: "© 2026 Morgan Metz · Charlottesville, VA",
  footerRight: "Set in Inter · built by hand",
};

export { meta, hero, motion, navs, threadNodes, projects, playground, about, jobs, quotes, now, contact };
