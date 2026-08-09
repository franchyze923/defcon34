# defcon34

My DEF CON 34 recap site — talks, photos, and notes from Las Vegas (Aug 6–9, 2026).

Lives at [defcon34.franpolignano.com](https://defcon34.franpolignano.com).

## Structure

- `index.html` — the whole site (summary, talks, photo gallery)
- `css/style.css` — DEF CON terminal/CRT styling
- `js/main.js` — typed prompt + matrix rain effects
- `images/` — drop photos here, then swap the placeholders in `index.html`
- `CNAME` — custom domain for GitHub Pages

## Editing

Look for the `<!-- EDIT ME -->` comments in `index.html`:

- **Summary** — replace the placeholder recap text
- **Talks** — duplicate a `.talk-card` block per talk (tags: `TRACK 1`, `VILLAGE`, `WORKSHOP` via the `magenta`/`cyan` classes)
- **Photos** — add files to `images/` and replace each placeholder `<figure>` with the commented `<img>` example

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
