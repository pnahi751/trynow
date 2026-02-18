import { Link, Outlet, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Library' },
  { to: '/admin/dashboard', label: 'Admin' },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-parchment text-earthy">
      <header className="sticky top-0 z-10 border-b border-earthy/20 bg-parchment/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <h1 className="font-serif text-3xl">🌊 Satsang Sarita</h1>
          <nav className="flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-md px-4 py-2 text-sm ${
                  location.pathname === item.to
                    ? 'bg-sage text-white'
                    : 'bg-white/60 hover:bg-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
