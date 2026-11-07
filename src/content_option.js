// All page copy and data lives here. Paths are relative to /public and get
// PUBLIC_URL prepended at render time.

const links = {
  email: "morgan.metz@eyekon.xyz",
  phone: "(434) 260-9485",
  github: "https://github.com/morgandri1",
  linkedin: "https://linkedin.com/in/morgandri1",
  resume: "/resume",
  resumePdf: "/assets/MorganMetz_Resume_2026.pdf",
};

// Homepage (design 3b). `github` marks where the inline GitHub link goes.
// `aside` comes first on the page, then `intro`.
const home = {
  greeting: "Hi, I'm Morgan.",
  intro: [
    "I build systems that hold up when it matters: distributed infrastructure, smart contracts securing $30M+, and the security around them. Most of it is on ",
    "github",
    ".",
  ],
  aside:
    "I'm 18. I got here by taking things apart — CTFs at 14, then contracts, then whole platforms. Rust and TypeScript, mostly.",
};

const openSource = "Zed, Solders, interactions.py, Fusion Core Finance";

// `years` is shown on the homepage, `dates` and `points` on the resume.
// `acquirer` is appended to `role` as a link.
const jobs = [
  {
    company: "Avo",
    role: "Software Engineer",
    years: "2026 – Present",
    dates: "Apr 2026 – Present",
    points: [
      "Rebuilt Avo's core infrastructure for the v3 launch",
      "Wrote the Anchor smart contracts holding $30M+ in platform TVL",
      "Built observability, metrics and error handling across a distributed system",
      "Owned platform security for v3: audited every service, contract and endpoint; added internal access controls to contain lateral movement",
    ],
  },
  {
    company: "Hydex",
    role: "Software Engineer",
    years: "2025 – 2026",
    dates: "Dec 2025 – Aug 2026",
    points: [
      "Helped architect the off-chain and MPC integrations powering the hySOL LST",
      "Shipped security and efficiency fixes to Hydentity and the Hydex Router",
      "Designed and built the Hydex Name Service: on-chain, stateless, encrypted",
    ],
  },
  {
    company: "Nebula",
    role: "Founder, acquired by",
    acquirer: { name: "Talis", url: "https://talis.art/" },
    years: "2023 – 2024",
    dates: "Jun 2023 – Jan 2024",
    points: ["Open-source NFT marketplace on CosmWasm; $75K+ TVL within three months"],
  },
  {
    company: "Copperhead Software",
    role: "Co-founder, acqui-hired by",
    acquirer: { name: "EYEKON", url: "https://eyekonstudio.com/" },
    years: "2022 – 2023",
    dates: "Jul 2022 – Feb 2023",
    points: ["Three-person contract development shop, started with two friends"],
  },
  {
    company: "CargoLabs",
    role: "Software Engineer, contract",
    years: "2024",
    dates: "Apr 2024 – Aug 2024",
    points: [
      "Built insurance-purchasing APIs handling $100K+ in transactions",
      "Owned CI/CD, AWS Lambda functions, Vercel deployments and databases",
    ],
  },
  {
    company: "Stakit Systems",
    role: "Software Engineer, contract",
    years: "2023 – 2024",
    dates: "Dec 2023 – Aug 2024",
    points: [
      "Deployed staking contracts on 7 chains and the APIs for user data and funds",
      "Front-end work and performance tuning for distributed systems at scale",
    ],
  },
  {
    company: "DegenDevs",
    role: "Contractor",
    years: "2022 – 2025",
    dates: "Jul 2022 – Dec 2025",
    points: [
      "Web apps, smart contracts and dev tooling on Solana, Cosmos and EVM",
      "Databases, REST APIs, Lambda functions and NGINX services",
      "Clients: LaunchMyNFT, Ultra Markets, Unison Wallet, EYEKON, PRMR, Eon Labs",
    ],
  },
];

// Resume (design 1f).
const resume = {
  profile:
    "18-year-old blockchain and systems engineer: Solana smart contracts, platform security and high-TVL infrastructure. Shipped contracts securing $30M+, owned security for a full platform relaunch, and started two companies: one acquired, one acqui-hired.",
  projects: [
    {
      name: "SolChess",
      text: "P2P chess for SOL and USDC on Elo-rated games, with in-house bots. Engine, matchmaking, UI, rating and anticheat built from scratch.",
    },
    {
      name: "SandwichRelay",
      text: "MEV research: a Jito relayer fork that detects sandwich attacks by parsing swaps from major providers and analyzing slippage. Built the analysis contracts, transaction builder and a custom TPU step to study on-chain MEV exposure.",
    },
  ],
  skills:
    "Rust, TypeScript/JavaScript, Python, Go, SQL, React, OpenAPI, Postgres, EVM/SVM/CWVM, Docker, ORMs",
  awards: "Highest Cyberstart America CTF score in Virginia · SANS SEC275 · CS50",
};

export { links, home, openSource, jobs, resume };
