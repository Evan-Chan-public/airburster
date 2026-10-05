import { defineConfig } from 'vite';

// Base path is derived from the deploying repo so one `main` can serve two Pages sites:
//   airburster/airburster.github.io  -> user site,    base '/'            (https://airburster.github.io/)
//   Evan-Chan-public/airburster      -> project site, base '/airburster/' (https://evan-chan-public.github.io/airburster/)
// Locally (GITHUB_REPOSITORY unset) base stays '/'.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const base = repo && !repo.endsWith('.github.io') ? `/${repo}/` : '/';

export default defineConfig({
  base,
  build: {
    outDir: 'dist',
    target: 'es2020',
  },
});
