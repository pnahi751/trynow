import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockBooks } from '../data/mockBooks';

const initialValues = {
  number: '',
  name_guj: '',
  name_eng: '',
  language_guj: '',
  language_eng: '',
  type_guj: '',
  writer_guj: '',
  writer_eng: '',
  publisher_guj: '',
  publisher_eng: '',
  pages: '',
  year: '',
};

function validate(values) {
  const nextErrors = {};

  if (!values.name_guj.trim()) nextErrors.name_guj = 'Gujarati name is required.';

  if (values.year && !/^\d{4}$/.test(values.year)) {
    nextErrors.year = 'Year must be 4 digits.';
  }

  if (values.pages && (!/^\d+$/.test(values.pages) || Number(values.pages) <= 0)) {
    nextErrors.pages = 'Pages must be a positive number.';
  }

  return nextErrors;
}

export default function AdminBookFormPage({ mode }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const existing = useMemo(() => mockBooks.find((book) => book.id === id), [id]);

  const [values, setValues] = useState(() =>
    mode === 'edit' && existing
      ? Object.fromEntries(
          Object.keys(initialValues).map((key) => [key, String(existing[key] ?? '')]),
        )
      : initialValues,
  );
  const [errors, setErrors] = useState({});

  function onChange(event) {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    navigate('/admin/books');
  }

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="font-serif text-3xl">{mode === 'edit' ? 'Edit Book' : 'Add Book'}</h2>
      <form onSubmit={onSubmit} className="mt-4 grid gap-3 md:grid-cols-2">
        {Object.keys(initialValues).map((field) => (
          <label key={field} className="block text-sm">
            <span className="mb-1 block capitalize text-earthy/75">{field.replace('_', ' ')}</span>
            <input
              name={field}
              value={values[field]}
              onChange={onChange}
              className="w-full rounded border border-earthy/20 px-3 py-2"
            />
            {errors[field] && <span className="mt-1 block text-xs text-rose">{errors[field]}</span>}
          </label>
        ))}

        <div className="md:col-span-2">
          <button type="submit" className="rounded bg-sage px-4 py-2 text-white">
            {mode === 'edit' ? 'Update Book' : 'Create Book'}
          </button>
        </div>
      </form>
    </section>
  );
}
