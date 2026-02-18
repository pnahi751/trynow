import { Link } from 'react-router-dom';
import { mockBooks } from '../data/mockBooks';

function countBy(books, field) {
  return books.reduce((acc, book) => {
    const key = book[field] || 'Unknown';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function Widget({ title, value }) {
  return (
    <article className="rounded-lg border border-earthy/20 bg-white p-4">
      <h3 className="text-sm uppercase tracking-wide text-earthy/65">{title}</h3>
      <p className="mt-1 font-serif text-3xl">{value}</p>
    </article>
  );
}

export default function AdminDashboardPage() {
  const byLanguage = countBy(mockBooks, 'language_eng');
  const byType = countBy(mockBooks, 'type_guj');
  const byYear = countBy(mockBooks, 'year');

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-3xl">Dashboard</h2>
        <Link to="/admin/books" className="rounded bg-rose px-4 py-2 text-white">
          Manage Books
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Widget title="Total Books" value={mockBooks.length} />
        <Widget title="Languages" value={Object.keys(byLanguage).length} />
        <Widget title="Types" value={Object.keys(byType).length} />
        <Widget title="Years" value={Object.keys(byYear).length} />
      </div>

      <article className="rounded-lg bg-white p-4">
        <h3 className="mb-2 font-serif text-2xl">Recently Added</h3>
        <ul className="space-y-1">
          {[...mockBooks].reverse().slice(0, 10).map((book) => (
            <li key={book.id} className="text-sm">
              {book.name_guj} ({book.year})
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
