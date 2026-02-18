const SEARCH_FIELDS = [
  'name_guj',
  'name_eng',
  'writer_guj',
  'writer_eng',
  'publisher_guj',
  'publisher_eng',
  'type_guj',
  'language_eng',
  'year',
];

export function filterBooks(books, query) {
  const q = query?.trim().toLowerCase();
  if (!q) return books;

  return books.filter((book) =>
    SEARCH_FIELDS.some((field) => String(book[field] ?? '').toLowerCase().includes(q)),
  );
}
