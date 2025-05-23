const logotext = "";
const meta = {
  title: "Morgan Metz - Portfolio",
  description:
    "I'm a full-stack software engineer based in Charlottesville, VA.",
};

const introdata = {
  title: "I’m Morgan",
  animated: {
    first: "I build cool stuff",
    second: "I love coding",
    third: "I love open source",
  },
  description:
    "I'm an experienced full-stack software engineer based in Charlottesville, VA.",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "Introduction",
  aboutme:
    "I’m a young, but experienced backend/api developer who has spent the last 3 years working on blockchain systems and building web3 technology. I have a passion for Open Source and Security, having won several CyberSecurity competitions while in school, as well as contributing to my favorite Open Source projects. This, combined with my previous experience working on large scale distributed systems and my out-of-the-box thinking, has positioned me to be a well-rounded engineer while still early in my career.",
};

const skills = [
  {
    name: "API Development",
    value: 90,
  },
  {
    name: "Smart Contract Development",
    value: 80,
  },
  {
    name: "Typescript",
    value: 90,
  },
  {
    name: "React",
    value: 75,
  },
  {
    name: "Rust",
    value: 85,
  },
  {
    name: "Python",
    value: 100,
  },
  {
    name: "Golang",
    value: 45
  }
];

const services = [
  {
    title: "UI & UX Design",
    description: "Web, Mobile, Systems, and more.",
  },
  {
    title: "Mobile Apps",
    description: "Mobile apps built in React Native or Swift.",
  },
  {
    title: "API/Backend development",
    description:
      "Backend systems architecture, building APIs, writing documentation, protobuf, etc.",
  },
];

const dataportfolio = [
  {
    img: "/ultra.png",
    description: "Solana Crosschain Lending Aggregator",
    link: "https://beta.ultra.markets",
  },
  {
    img: "/rift.png",
    description: "Mobile Web3 IRL event planner",
    link: "",
  },
  {
    img: "/stakit.jpeg",
    description:
      "A cross-chain automated staking platform made to make staking cheaper and easier",
    link: "https://stakit.live",
  },
  {
    img: "/nebula.jpeg",
    description: "An Injective NFT marketplace and infrastructure provider",
    link: "https://github.com/Nebula-Marketplace",
  },
  {
    img: "/copperhead.jpeg",
    description: "A solana-based development agency later acquired by EYEKON",
    link: "",
    onClick: () => {
      alert("No maintained website for copperhead after being EOLed by EYEKON");
    },
  },
  {
    img: "/eyekon_inverse.png",
    description:
      "A solana, matic, and injective advisory agency who acquired Copperhead Software in 2023. The Copperhead Acquisition allowed them to add a (now EOL) SaaS branch.",
    link: "https://twitter.com/eyekonnft",
  },
  {
    img: "/unison.png",
    description:
      "A multichain wallet operating on 16 different chains. Never saw light of day due to founder (and funding) disapearance. I built an intricate API to allow users to interact with different chains easily.",
    link: "",
    onClick: () => {
      alert(
        "There is no maintained website for unison after funding was rugged.",
      );
    },
  },
];

const contactConfig = {
  YOUR_EMAIL: "morgan.metz@eyekon.xyz",
  YOUR_FONE: "(434) 260-9485",
  description: "Text or email me at any time with any questions.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_rvkk75f",
  YOUR_TEMPLATE_ID: "template_7lyjuwu",
  YOUR_USER_ID: "93j0pl248GyGT_N2o",
};

const socialprofils = {
  github: "https://github.com/morgandri1",
  linkedin: "https://linkedin.com/in/morgandri1",
  twitter: "https://twitter.com/Morgandri1dev",
  resume:
    "https://docs.google.com/document/d/1yWORq7MPF6WEdnojFJMYW_YwYKJr_9T5L9bIDfonAdg/edit?usp=sharing",
};
export {
  meta,
  dataabout,
  dataportfolio,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
