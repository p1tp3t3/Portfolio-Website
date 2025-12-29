export const toTitleCasePreserveMarkdown = (str) => {
  return str.replace(/(\*\*\*(.*?)\*\*\*|\w+)/g, (match, p1, p2) => {
    // If the word/section is in ***text*** format, convert to <b>text</b>
    if (p2 !== undefined) {
      return `<b>${p2}</b>`;
    }
    // Otherwise, title-case the word (optional: wrap in <b>)
    return `${match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()}`;
  });
}
