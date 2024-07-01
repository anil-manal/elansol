import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  const isAuthenticated = () => !!localStorage.getItem('token');

  return (
    <Routes>
      {/* Add a default route for the root path */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Define other routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={isAuthenticated() ? <DashboardPage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default App;
