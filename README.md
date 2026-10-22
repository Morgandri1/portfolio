# Morgan Metz — Portfolio

Personal site built with React (Create React App). Two pages:

- `/` — homepage, design **3b Single column** (dark, small type, no imagery)
- `/resume` — one-page printable resume, design **1f Ledger** (print it from
  the browser for a US Letter PDF)

The design references live in `design_handoff_morgan_metz_site_resume/`.

## Develop

```sh
npm install
npm start
```

## Deploy

Hosted on Vercel: pushing to `master` deploys. `vercel.json` rewrites
`/resume` to `index.html` so the route loads directly.

## Editing content

All copy, links, jobs and resume entries live in `src/content_option.js`.
Jobs are shared: `years` shows on the homepage, `dates` and `points` on the
resume. The downloadable PDF is `public/assets/MorganMetz_Resume_2026.pdf`.
If you change the resume copy, re-export it and replace that file.

Tokens and layout live in `src/index.css`; pages are in `src/pages/`.
