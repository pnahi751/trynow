import { useMemo, useState } from 'react';
import BookList from '../components/BookList';
import useDebounce from '../hooks/useDebounce';
import { mockBooks } from '../data/mockBooks';
import { filterBooks } from '../lib/bookSearch';

const PAGE_SIZE = 20;

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const debouncedQuery = useDebounce(query, 300);

  const filteredBooks = useMemo(
    () => filterBooks(mockBooks, debouncedQuery),
    [debouncedQuery],
  );

  const visibleBooks = filteredBooks.slice(0, page * PAGE_SIZE);
  const hasMore = visibleBooks.length < filteredBooks.length;

  return (
    <section className="space-y-5">
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <h2 className="font-serif text-3xl">A River of Eternal Satsang</h2>
        <p className="mt-1 text-earthy/75">Internal multilingual digital library management system.</p>
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setPage(1);
          }}
          placeholder="Search by title, writer, publisher, type, language, year..."
          className="mt-4 w-full rounded border border-earthy/25 bg-parchment px-3 py-2"
        />
      </div>

      <BookList books={visibleBooks} />

      {hasMore && (
        <button
          type="button"
          onClick={() => setPage((current) => current + 1)}
          className="rounded bg-sage px-4 py-2 text-white"
        >
          Load More
        </button>
      )}

      {!filteredBooks.length && <p className="rounded bg-white p-4">No books found.</p>}
    </section>
  );
}
