import React from 'react';

type NavbarProps = {
  pageTitle: string;
};

export const Navbar: React.FC<NavbarProps> = ({ pageTitle }) => (
  <header className="bg-bullBlack-DEFAULT text-white px-6 py-4 shadow-md">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary-400">JIGS</p>
        <h1 className="text-xl font-semibold">{pageTitle}</h1>
      </div>
      <nav className="flex gap-4 text-sm" aria-label="Navegação principal">
        <a className="transition hover:text-primary-400" href="./index.html">
          Inscrição
        </a>
        <a className="transition hover:text-primary-400" href="./admin.html">
          Administração
        </a>
      </nav>
    </div>
  </header>
);
