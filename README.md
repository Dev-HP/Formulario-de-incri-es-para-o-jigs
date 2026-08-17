# Formulário de inscrições para o JIGS

> Aplicação web para organizar inscrições do JIGS, com fluxo público de cadastro e área administrativa para acompanhamento das inscrições.

## Status

**Projeto de demonstração.** O frontend está estruturado em React, TypeScript e Vite. Valide o fluxo completo e a persistência de dados antes de usar em um evento real.

## Funcionalidades

- Formulário de inscrição para participantes.
- Rotas e telas separadas para inscrição e administração.
- Componentes React e tipagem TypeScript.
- Configuração preparada para integração com serviço de IA quando necessário.

## Demonstração visual

Adicione screenshots da tela pública, validação do formulário e painel administrativo. Não publique dados reais de inscritos; use registros fictícios nas imagens.

## Tecnologias

- React 19
- TypeScript
- Vite
- React Router

## Execução local

```bash
git clone https://github.com/Dev-HP/Formulario-de-incri-es-para-o-jigs.git
cd Formulario-de-incri-es-para-o-jigs
npm install
npm run dev
```

Abra o endereço indicado pelo Vite. Se a aplicação usar uma API, configure a URL em um arquivo de ambiente local, nunca no repositório público.

## Estrutura

```text
App.tsx          fluxo público de inscrição
AdminApp.tsx     fluxo administrativo
index.tsx        entrada da aplicação pública
admin.tsx        entrada da área administrativa
constants.ts     constantes do domínio
types.ts         tipos compartilhados
vite.config.ts   configuração do Vite
```

## Segurança e configuração

O arquivo `.env.local` não deve ser versionado. Caso exista integração com Gemini ou outro serviço, mantenha a chave apenas no ambiente local/seguro e use um backend para qualquer operação que não possa ser exposta no navegador. Revise o histórico do Git e revogue qualquer chave real que tenha sido publicada anteriormente.

## Licença

Este projeto está sob a licença [MIT](LICENSE).

## Autor

**Hélio Paulo Leite de Lima** — [GitHub](https://github.com/Dev-HP)
