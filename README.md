# Projeto de Testes Automatizados - Banco Web

Este repositório contém testes automatizados desenvolvidos com [Cypress](https://www.cypress.io/) e JavaScript, como prática da mentoria em automação de testes. O objetivo é validar funcionalidades essenciais do sistema Banco Web, utilizando boas práticas de organização e relatórios.

## Objetivos

- Praticar automação de testes end-to-end com Cypress.
- Organizar o código utilizando Custom Commands para facilitar a manutenção e reuso.
- Gerar relatórios detalhados dos testes com o cypress-mochawesome-reporter.
- Documentar o processo de instalação, execução e estrutura dos testes.

## Componentes do Projeto

- **Cypress**: Framework principal para automação dos testes.
- **Custom Commands**: Comandos personalizados para ações recorrentes, localizados em [`cypress/support/commands`](cypress/support/commands).
- **Relatórios**: Gerados automaticamente em HTML pelo [cypress-mochawesome-reporter](https://github.com/cypress-io/cypress-mochawesome-reporter).
- **Fixtures**: Dados mockados para os testes, em [`cypress/fixtures`](cypress/fixtures).
- **Testes E2E**: Casos de teste para login e transferência, em [`cypress/e2e`](cypress/e2e).

## Pré-requisitos

- Node.js instalado
- API [`banco-api`](https://github.com/Alana-souz/banco-api) em execução
- Aplicação web [`banco-web`](https://github.com/Alana-souz/banco-web) em execução

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/Alana-souz/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

## Execução dos Testes

- Para rodar os testes em modo headless:
  ```sh
  npm test
  ```
- Para abrir o Cypress em modo interativo:
  ```sh
  npm run cy:open
  ```
- Os relatórios HTML serão gerados em [`cypress/reports/html`](cypress/reports/html).

## Estrutura dos Testes

- [`cypress/e2e/login.cy.js`](cypress/e2e/login.cy.js): Testa login com credenciais válidas e inválidas.
- [`cypress/e2e/transferencia.cy.js`](cypress/e2e/transferencia.cy.js): Testa transferência entre contas, incluindo cenários de erro.

## Custom Commands

Os comandos personalizados estão em [`cypress/support/commands`](cypress/support/commands):

- `fazerLoginComCredenciaisValidas`: Realiza login com dados válidos.
- `fazerLoginComCredenciaisIvalidas`: Realiza login com dados inválidos.
- `realizarTransferencia`: Executa transferência entre contas.
- `verificarMensagemNoToast`: Valida mensagens exibidas em toast.
- `selecionarOpcaoNaCombobox`: Seleciona opções em campos combobox.

Exemplo de uso em um teste:
```js
cy.fazerLoginComCredenciaisValidas()
cy.realizarTransferencia('Maria', 'João', '6000')
cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
```

## Referências

- [Cypress Documentation](https://docs.cypress.io/)
- [cypress-mochawesome-reporter](https://github.com/cypress-io/cypress-mochawesome-reporter)

---
Mentoria 2.0 modulo em automação de testes - Projeto Banco Web