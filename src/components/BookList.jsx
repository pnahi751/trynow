import { Link } from 'react-router-dom';

export default function BookList({ books }) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-lg border border-earthy/20 bg-white lg:block">
        <table className="w-full text-left text-sm">
          <thead className="sticky top-0 bg-sage text-white">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Writer</th>
              <th className="px-4 py-3">Language</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Year</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="border-t border-earthy/10 hover:bg-parchment/50">
                <td className="px-4 py-3">{book.number}</td>
                <td className="px-4 py-3">
                  <Link to={`/book/${book.id}`} className="font-semibold text-earthy hover:underline">
                    {book.name_guj} / {book.name_eng}
                  </Link>
                </td>
                <td className="px-4 py-3">{book.writer_guj}</td>
                <td className="px-4 py-3">{book.language_eng}</td>
                <td className="px-4 py-3">{book.type_guj}</td>
                <td className="px-4 py-3">{book.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 lg:hidden">
        {books.map((book) => (
          <article key={book.id} className="rounded-lg border border-earthy/20 bg-white p-4 shadow-sm">
            <h3 className="font-serif text-xl">{book.name_guj}</h3>
            <p className="text-sm text-earthy/80">{book.name_eng}</p>
            <div className="mt-3 space-y-1 text-sm">
              <p>
                <span className="font-semibold">Writer:</span> {book.writer_guj}
              </p>
              <p>
                <span className="font-semibold">Language:</span> {book.language_eng}
              </p>
              <p>
                <span className="font-semibold">Type:</span> {book.type_guj}
              </p>
              <p>
                <span className="font-semibold">Year:</span> {book.year}
              </p>
            </div>
            <Link
              to={`/book/${book.id}`}
              className="mt-4 inline-block rounded bg-rose px-3 py-2 text-sm text-white"
            >
              View Details
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
