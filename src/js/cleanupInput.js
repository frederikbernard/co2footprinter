export function cleanupInput(input) {
  if (!input) return ''; // Gegen leere Eingaben schützen

  // Ersetze Zeichen, die die HTML-Struktur beeinflussen können
  const replacements = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;'
  };

  // Ersetze die gefährlichen Zeichen mit den entsprechenden HTML-Entities
  return input.replace(/[<>&"']/g, match => replacements[match]);
}
