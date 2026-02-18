import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function onSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    localStorage.setItem('satsang_admin_session', 'active');
    navigate('/admin/dashboard');
  }

  return (
    <section className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-sm">
      <h2 className="font-serif text-3xl">Admin Login</h2>
      <form onSubmit={onSubmit} className="mt-4 space-y-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded border border-earthy/25 px-3 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded border border-earthy/25 px-3 py-2"
        />
        {error && <p className="text-sm text-rose">{error}</p>}
        <button type="submit" className="w-full rounded bg-sage px-4 py-2 text-white">
          Login
        </button>
      </form>
    </section>
  );
}
