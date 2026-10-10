# Knowledge Graphs Lab website

A GitHub Pages-compatible Jekyll site for the Knowledge Graphs Lab at the AI Centre, City St George's, University of London.

## Publish with GitHub Pages

1. Copy these files to the root of a GitHub repository.
2. Commit and push to the default branch.
3. In **Settings → Pages**, choose **Deploy from a branch** and select the repository root.
4. GitHub Pages will build the site without `jekyll-scholar` or any unsupported Liquid tags.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Update content

- Main text, members, research lines and projects: edit `index.html`.
- Styling: edit `assets/css/style.css`.
- Publications: add standard BibTeX records to `assets/publications.bib`.
- Logo: replace `assets/images/kg-lab-logo.svg`.
- Member photographs currently use public profile-image URLs. To keep local copies, place authorised images in `assets/images/` and change the four `src` attributes in `index.html`.

## Why publications use JavaScript

GitHub Pages does not include `jekyll-scholar` in its supported plugin set. The previous `{% bibliography %}` tag therefore caused the build error. This version loads and renders `assets/publications.bib` in the browser, preserving a BibTeX-based workflow while remaining compatible with the standard GitHub Pages build.
