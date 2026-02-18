import { Link, useParams } from 'react-router-dom';
import { mockBooks } from '../data/mockBooks';

const fieldLabels = [
  ['name_guj', 'Name (Gujarati)'],
  ['name_eng', 'Name (English)'],
  ['writer_guj', 'Writer (Gujarati)'],
  ['writer_eng', 'Writer (English)'],
  ['publisher_guj', 'Publisher (Gujarati)'],
  ['publisher_eng', 'Publisher (English)'],
  ['language_eng', 'Language'],
  ['type_guj', 'Type'],
  ['pages', 'Pages'],
  ['year', 'Year'],
];

export default function BookDetailPage() {
  const { id } = useParams();
  const book = mockBooks.find((entry) => entry.id === id);

  if (!book) {
    return (
      <div className="rounded bg-white p-6">
        <p>Book not found.</p>
        <Link to="/" className="mt-2 inline-block text-sage underline">
          Back to library
        </Link>
      </div>
    );
  }

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="font-serif text-3xl">{book.name_guj}</h2>
      <p className="mb-6 text-lg text-earthy/75">{book.name_eng}</p>
      <div className="grid gap-3 md:grid-cols-2">
        {fieldLabels.map(([field, label]) => (
          <div key={field} className="rounded border border-earthy/15 p-3">
            <p className="text-xs uppercase tracking-wider text-earthy/60">{label}</p>
            <p className="text-lg">{book[field] || '-'}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
