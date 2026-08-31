# Morgan Metz — Portfolio

Single-page portfolio built with React (Create React App). Dark "Nocturne"
look: flow-field backdrop, magnetic hero type, an orbital section nav and a
thread that draws itself down the page as you scroll.

## Develop

```sh
npm install
npm start
```

## Deploy

```sh
npm run deploy   # builds and pushes ./build to gh-pages
```

## Editing content

All copy, links, jobs, projects and testimonials live in
`src/content_option.js`. Images go in `public/assets/`; point the `src`
fields at them (paths are relative to `public/`). Slots without a source
render a labelled placeholder.

Layout and tokens live in `src/index.css`; sections are in `src/sections/`.
