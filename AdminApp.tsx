import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AdminPage } from './pages/AdminPage';

const AdminApp: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar pageTitle="Painel Administrativo" />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AdminPage />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center p-4 text-sm">
          © {new Date().getFullYear()} Campeonato Universitário. Todos os direitos reservados.
        </footer>
      </div>
    </HashRouter>
  );
};

export default AdminApp;