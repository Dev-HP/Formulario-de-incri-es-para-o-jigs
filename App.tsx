import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FormPage } from './pages/FormPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar pageTitle="Formulário de Inscrição" />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<FormPage />} />
          </Routes>
        </main>
        <footer className="bg-bullBlack-DEFAULT text-primary-400 text-center p-4 text-sm">
          © {new Date().getFullYear()} JIGS. Todos os direitos reservados.
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;