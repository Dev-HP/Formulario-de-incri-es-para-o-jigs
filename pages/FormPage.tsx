import React, { FormEvent, useState } from 'react';
import { GENDERS_OPTIONS, LOCAL_STORAGE_KEY, MODALITIES, PERIODS } from '../constants';
import { Gender, Registration } from '../types';

export const FormPage: React.FC = () => {
  const [responsibleName, setResponsibleName] = useState('');
  const [responsiblePeriod, setResponsiblePeriod] = useState(PERIODS[0]);
  const [selectedModalities, setSelectedModalities] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const toggleModality = (id: string) => {
    setSelectedModalities((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!responsibleName.trim() || selectedModalities.length === 0) {
      setMessage('Informe seu nome e escolha ao menos uma modalidade.');
      return;
    }

    const registration: Registration = {
      id: crypto.randomUUID(),
      responsibleName: responsibleName.trim(),
      responsiblePeriod,
      selectedModalities,
      modalityGenders: Object.fromEntries(
        selectedModalities.map((id) => [id, Gender.OTHER]),
      ) as Record<string, Gender>,
      hasTeam: null,
      teamMembers: [],
      registrationDate: Date.now(),
    };

    const current: Registration[] = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) ?? '[]',
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...current, registration]));
    setMessage('Inscrição salva neste navegador para demonstração.');
    setResponsibleName('');
    setSelectedModalities([]);
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-10">
      <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-700">
          Campeonato Universitário
        </p>
        <h2 className="text-3xl font-bold text-gray-900">Faça sua inscrição</h2>
        <p className="mt-2 text-gray-600">
          Preencha os dados abaixo. Nesta versão, as informações ficam salvas apenas no navegador.
        </p>
      </div>

      <form onSubmit={submit} className="space-y-6 rounded-xl bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-gray-700">
            Nome do responsável
            <input
              className="mt-2 w-full rounded-lg border border-gray-300 p-3"
              value={responsibleName}
              onChange={(event) => setResponsibleName(event.target.value)}
              placeholder="Digite seu nome"
              required
            />
          </label>
          <label className="text-sm font-medium text-gray-700">
            Período
            <select
              className="mt-2 w-full rounded-lg border border-gray-300 p-3"
              value={responsiblePeriod}
              onChange={(event) => setResponsiblePeriod(event.target.value)}
            >
              {PERIODS.map((period) => (
                <option key={period}>{period}</option>
              ))}
            </select>
          </label>
        </div>

        <fieldset>
          <legend className="mb-3 text-sm font-semibold text-gray-800">Modalidades</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {MODALITIES.map((modality) => (
              <label
                key={modality.id}
                className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-3 hover:border-primary-500"
              >
                <input
                  type="checkbox"
                  checked={selectedModalities.includes(modality.id)}
                  onChange={() => toggleModality(modality.id)}
                />
                <span>
                  <strong>{modality.name}</strong>
                  <small className="ml-2 text-gray-500">{modality.type}</small>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="rounded-lg bg-primary-500 px-5 py-3 font-semibold text-bullBlack-DEFAULT hover:bg-primary-400"
          >
            Salvar inscrição
          </button>
          {message && <p className="text-sm text-gray-700">{message}</p>}
        </div>

        <p className="text-xs text-gray-500">
          Para produção, substitua o armazenamento local por uma API segura e implemente autenticação,
          validação no servidor e política de privacidade.
        </p>
      </form>
    </section>
  );
};
