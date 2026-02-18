import { Link } from 'react-router-dom';
import { mockBooks } from '../data/mockBooks';

export default function AdminBooksPage() {
  return (
    <section className="rounded-xl bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-3xl">Books</h2>
        <Link to="/admin/add" className="rounded bg-sage px-4 py-2 text-white">
          Add Book
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-earthy/20">
              <th className="p-2">No</th>
              <th className="p-2">Name</th>
              <th className="p-2">Writer</th>
              <th className="p-2">Year</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockBooks.map((book) => (
              <tr key={book.id} className="border-b border-earthy/10">
                <td className="p-2">{book.number}</td>
                <td className="p-2">{book.name_guj}</td>
                <td className="p-2">{book.writer_guj}</td>
                <td className="p-2">{book.year}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <Link to={`/admin/edit/${book.id}`} className="rounded bg-parchment px-2 py-1">
                      Edit
                    </Link>
                    <button type="button" className="rounded bg-rose px-2 py-1 text-white">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
