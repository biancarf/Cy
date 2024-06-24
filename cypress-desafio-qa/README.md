## Pré-requisitos

Para clonar e executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (usei a versão `2.39.3 (Apple Git-146)` ao escrever este documento)
- [Node.js](https://nodejs.org/en/) (usei a versão `v18.18.0` ao escrever este documento)
- npm (usei a versão `9.8.1` ao escrever este documento)

**Observação:** Ao instalar o Node.js, o npm é instalado automaticamente. 🚀

## Instalação

Para instalar dependências de desenvolvimento, execute `npm install` (ou `npm i` para abreviar).

Se houver algum problema em instalar as dependências, seguir os três passos a seguir:
`npm init`,
`Npm install cypress -—save-dev`,
`npm install cypress-cucumber-preprocessor --save-dev`

## Executando os testes

Neste projeto, você pode executar testes nos modos interativo e headless nas viewports de desktop e tablet.

### Modo Headless

Execute `npm test` (ou `npm t` para abreviar) para executar todos os testes no modo headless usando uma janela de visualização de desktop.

Execute `npm run test:tablet` para executar os testes apropriados no modo headless usando uma janela de visualização de tablet.

### Modo interativo

Execute `npm run cy:open` para abrir **Cypress App** para executar testes em modo interativo usando uma janela de visualização na área de trabalho.

Execute `npm run cy:open:tablet` para abrir o **Cypress App** para executar testes em modo interativo usando uma janela de visualização de tablet.
