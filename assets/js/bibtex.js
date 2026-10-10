(() => {
  const target = document.getElementById("bibliography");
  if (!target) return;

  const escapeHtml = (value = "") =>
    value.replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    })[char]);

  const clean = (value = "") =>
    value.replace(/[{}]/g, "").replace(/\s+/g, " ").trim();

  const parseBibTeX = (source) => {
    const entries = [];
    const entryPattern = /@(\w+)\s*\{\s*([^,]+),([\s\S]*?)\n\}/g;
    let match;

    while ((match = entryPattern.exec(source)) !== null) {
      const fields = {};
      const body = match[3];
      const fieldPattern = /(\w+)\s*=\s*(?:\{([\s\S]*?)\}|\"([\s\S]*?)\")\s*,?(?=\s*\w+\s*=|\s*$)/g;
      let field;

      while ((field = fieldPattern.exec(body)) !== null) {
        fields[field[1].toLowerCase()] = clean(field[2] ?? field[3] ?? "");
      }

      entries.push({ type: match[1].toLowerCase(), key: match[2].trim(), ...fields });
    }

    return entries.sort((a, b) =>
      Number(b.year || 0) - Number(a.year || 0) ||
      (a.title || "").localeCompare(b.title || "")
    );
  };

  const formatAuthors = (authors = "") =>
    authors.split(/\s+and\s+/i).map((author) => {
      const parts = author.split(",").map((part) => part.trim());
      return parts.length > 1 ? `${parts[1]} ${parts[0]}` : author;
    }).join(", ");

  const renderEntry = (entry) => {
    const venue = entry.journal || entry.booktitle || entry.publisher || "";
    const links = [];
    if (entry.doi) links.push(`<a href="https://doi.org/${encodeURI(entry.doi)}">DOI</a>`);
    if (entry.url) links.push(`<a href="${escapeHtml(entry.url)}">Link</a>`);

    return `
      <article class="publication">
        <p class="publication-title">${escapeHtml(entry.title || "Untitled")}</p>
        <p class="publication-meta">${escapeHtml(formatAuthors(entry.author))}${entry.year ? ` (${escapeHtml(entry.year)})` : ""}${venue ? `. <em>${escapeHtml(venue)}</em>` : ""}.</p>
        ${links.length ? `<div class="publication-links">${links.join("")}</div>` : ""}
      </article>`;
  };

  fetch(target.dataset.bibUrl)
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.text();
    })
    .then((source) => {
      const entries = parseBibTeX(source);
      target.innerHTML = entries.length
        ? entries.map(renderEntry).join("")
        : "<p>No publications have been added yet.</p>";
    })
    .catch(() => {
      target.innerHTML = '<p class="bib-error">The publication list could not be loaded. Open <a href="' +
        escapeHtml(target.dataset.bibUrl) + '">the BibTeX file</a> directly.</p>';
    });
})();
