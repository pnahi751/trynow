import { Navigate } from 'react-router-dom';

function hasAdminSession() {
  return localStorage.getItem('satsang_admin_session') === 'active';
}

export default function ProtectedRoute({ children }) {
  if (!hasAdminSession()) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
