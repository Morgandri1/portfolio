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
const jobs = [
  {
    company: "Avo",
    role: "Software Engineer",
    years: "2026 – Present",
    dates: "Apr 2026 – Present",
    points: [
      "Rebuilt Avo's core infrastructure for the v3 launch",
      "Wrote the Anchor smart contracts holding $30M+ in platform TVL",
      "Built observability, metrics and error handling for a large distributed system",
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
      "Shipped security and efficiency improvements to Hydentity and the Hydex Router",
      "Designed and built the Hydex Name Service: a fully on-chain, stateless, encrypted naming service on Solana",
    ],
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
      "Deployed staking contracts across 7 chains, plus the APIs managing user data and funds",
      "Front-end development and performance tuning for distributed systems at scale",
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
    "Blockchain and systems engineer: Solana smart contracts, platform security and high-TVL infrastructure. Shipped contracts securing $30M+ and owned security for a full platform relaunch.",
  projects: [
    {
      name: "SolChess",
      text: "P2P chess for SOL and USDC on Elo-rated games, with in-house bots. Engine, matchmaking, UI, rating and anticheat built from scratch.",
    },
    {
      name: "SandwichRelay",
      text: "MEV research: a Jito relayer fork that detects sandwich attacks by parsing swaps from major providers and analyzing slippage. Built the analysis contracts, transaction builder and a custom TPU step to study on-chain MEV exposure.",
    },
    {
      name: "Nebula",
      text: "Open-source NFT marketplace on CosmWasm: stateless collection management, minting and exchange. $75K+ TVL in under three months.",
    },
  ],
  skills:
    "Rust, TypeScript/JavaScript, Python, Go, SQL, React, OpenAPI, Postgres, EVM/SVM/CWVM, Docker, ORMs",
  awards: "Highest Cyberstart America CTF score in Virginia · SANS SEC275 · CS50",
};

export { links, home, openSource, jobs, resume };
