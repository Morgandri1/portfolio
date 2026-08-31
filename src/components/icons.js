import React from "react";

// Minimal Phosphor-style line icons (24px grid, stroked with currentColor).
const base = (size, style) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
  style: { flex: "none", ...style },
});

export const Briefcase = ({ size = 16, style }) => (
  <svg {...base(size, style)}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
  </svg>
);
export const GitBranch = ({ size = 16, style }) => (
  <svg {...base(size, style)}>
    <circle cx="6" cy="4" r="2" />
    <circle cx="6" cy="20" r="2" />
    <circle cx="18" cy="8" r="2" />
    <path d="M6 6v12M18 10a6 6 0 0 1-6 6H9a3 3 0 0 0-3 3" />
  </svg>
);
export const User = ({ size = 16, style }) => (
  <svg {...base(size, style)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
export const PaperPlane = ({ size = 16, style }) => (
  <svg {...base(size, style)}>
    <path d="M21 3 3 10.5l7.5 3 3 7.5L21 3z" />
    <path d="M10.5 13.5 21 3" />
  </svg>
);
export const ArrowDown = ({ size = 16, style }) => (
  <svg {...base(size, style)}>
    <path d="M12 4v16M5 13l7 7 7-7" />
  </svg>
);
export const ArrowUpRight = ({ size = 16, style }) => (
  <svg {...base(size, style)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const Strategy = ({ size = 16, style }) => (
  <svg {...base(size, style)}>
    <circle cx="7" cy="7" r="3.2" />
    <path d="M14 14l6 6M20 14l-6 6M3 19.5c1.5-2.2 3.5-2.2 5 0s3.5 2.2 5 0M15.5 3.5h4.5v4.5" />
  </svg>
);
export const Detective = ({ size = 16, style }) => (
  <svg {...base(size, style)}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15.5 15.5 21 21M7.5 10.5h6" />
  </svg>
);
export const GitPullRequest = ({ size = 16, style }) => (
  <svg {...base(size, style)}>
    <circle cx="6" cy="5" r="2" />
    <circle cx="6" cy="19" r="2" />
    <circle cx="18" cy="19" r="2" />
    <path d="M6 7v10M18 17v-6a3 3 0 0 0-3-3h-3M14.5 5.5 12 8l2.5 2.5" />
  </svg>
);
export const Quotes = ({ size = 16, style }) => (
  <svg {...base(size, style)} stroke="none" fill="currentColor">
    <path d="M10 6H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3v1c0 1.5-1 2.5-2.5 3v2C8.5 18.5 10 16.5 10 14V6zm10 0h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3v1c0 1.5-1 2.5-2.5 3v2c3-.5 4.5-2.5 4.5-5V6z" />
  </svg>
);

export const icons = {
  briefcase: Briefcase,
  gitBranch: GitBranch,
  user: User,
  paperPlane: PaperPlane,
  arrowDown: ArrowDown,
  arrowUpRight: ArrowUpRight,
  strategy: Strategy,
  detective: Detective,
  gitPullRequest: GitPullRequest,
  quotes: Quotes,
};

export const Icon = ({ name, ...props }) => {
  const C = icons[name];
  return C ? <C {...props} /> : null;
};
