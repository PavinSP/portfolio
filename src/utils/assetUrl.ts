/** Resolves config URLs: local assets get the Vite base path so they work both
 *  in dev (/) and on GitHub Pages (/portfolio/). */
export const resolve = (url: string) =>
  /^(https?:|mailto:)/.test(url) ? url : `${import.meta.env.BASE_URL}${url}`;
