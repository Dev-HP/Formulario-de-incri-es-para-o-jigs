import React, { useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEY, MODALITIES, PERIODS } from '../constants';
import { Registration } from '../types';

const readRegistrations = (): Registration[] => {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '[]') as Registration[];
  } catch {
    return [];
  }
};

export const AdminPage: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>(readRegistrations);
  const [search, setSearch] = useState('');
  const [period, setPeriod] = useState('Todos');

  const filtered = useMemo(
    () =>
      registrations.filter((registration) => {
        const matchesName = registration.responsibleName
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchesPeriod = period === 'Todos' || registration.responsiblePeriod === period;
        return matchesName && matchesPeriod;
      }),
    [registrations, search, period],
  );

  const clearDemoData = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setRegistrations([]);
  };

  const modalityName = (id: string) => MODALITIES.find((item) => item.id === id)?.name ?? id;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-700">Visão geral</p>
          <h2 className="text-3xl font-bold text-gray-900">Inscrições recebidas</h2>
          <p className="mt-2 text-gray-600">
            Dados locais de demonstração. Esta tela não implementa autenticação de produção.
          </p>
        </div>
        <button
          type="button"
          onClick={clearDemoData}
          className="rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
        >
          Limpar dados locais
        </button>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow-sm"><p className="text-sm text-gray-500">Total</p><strong className="text-3xl">{registrations.length}</strong></div>
        <div className="rounded-xl bg-white p-5 shadow-sm"><p className="text-sm text-gray-500">Filtradas</p><strong className="text-3xl">{filtered.length}</strong></div>
        <div className="rounded-xl bg-white p-5 shadow-sm"><p className="text-sm text-gray-500">Modalidades</p><strong className="text-3xl">{new Set(registrations.flatMap((item) => item.selectedModalities)).size}</strong></div>
      </div>

      <div className="mb-6 grid gap-4 rounded-xl bg-white p-5 shadow-sm md:grid-cols-2">
        <label className="text-sm font-medium text-gray-700">
          Buscar por nome
          <input
            className="mt-2 w-full rounded-lg border border-gray-300 p-3"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Nome do responsável"
          />
        </label>
        <label className="text-sm font-medium text-gray-700">
          Filtrar por período
          <select
            className="mt-2 w-full rounded-lg border border-gray-300 p-3"
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
          >
            <option>Todos</option>
            {PERIODS.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b bg-gray-50 text-gray-600">
            <tr><th className="px-5 py-3">Responsável</th><th className="px-5 py-3">Período</th><th className="px-5 py-3">Modalidades</th><th className="px-5 py-3">Data</th></tr>
          </thead>
          <tbody>
            {filtered.map((registration) => (
              <tr key={registration.id} className="border-b last:border-0">
                <td className="px-5 py-4 font-medium">{registration.responsibleName}</td>
                <td className="px-5 py-4">{registration.responsiblePeriod}</td>
                <td className="px-5 py-4">{registration.selectedModalities.map(modalityName).join(', ')}</td>
                <td className="px-5 py-4">{new Date(registration.registrationDate).toLocaleDateString('pt-BR')}</td>
              </tr>
            ))}
            {filtered.length === 0 && <tr><td className="px-5 py-10 text-center text-gray-500" colSpan={4}>Nenhuma inscrição local encontrada.</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
};
