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
export const base64ToFile = (base64, filename) => {
  const arr = base64.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

export const checkNull = (val, key) => {
  return val ? val[key] : ''
}