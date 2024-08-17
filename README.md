# HealthyRecipes

Este projeto é um estudo prático em Angular, onde desenvolvemos uma aplicação para buscar e exibir receitas utilizando a API [Spoonacular](https://spoonacular.com/food-api). O objetivo é aprender e aplicar conceitos fundamentais do Angular, como componentes, serviços, binding de dados e consumo de APIs externas.

## Clonando o Repositório

Para começar, clone o repositório do projeto usando o comando:

    ```bash
    git clone https://github.com/Werricsson-Santos/healthy-recipes-angular.git
    ```
## Instalando Dependências

Após clonar o repositório, navegue até o diretório do projeto e instale as dependências necessárias com:

    ```bash
    npm install
    ```

## Configuração do Projeto

Para configurar e executar o projeto, siga os passos abaixo:

### 1. Criar uma Conta na API Spoonacular

Para que a aplicação funcione corretamente, você precisará de uma chave de API fornecida pela Spoonacular. Siga os passos abaixo para obter a sua chave:

1. Acesse o site da API: [Spoonacular Food API](https://spoonacular.com/food-api).
2. Crie uma conta gratuita.
3. Gere a sua chave de API (é possível realizar até 150 requisições por dia gratuitamente).

### 2. Configuração do Ambiente

Após obter a chave de API, você precisará criar um arquivo de ambiente no projeto para armazená-la. Siga os passos abaixo:

1. Dentro da pasta `src/environments`, crie um arquivo chamado `environment.ts`.
2. Adicione o seguinte conteúdo ao arquivo, substituindo `'chaveGerada'` pela sua chave de API:

   ```typescript
   export const environment = {
     apiKey: 'chaveGerada'
   };
   ```

### 3. Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute o comando:

   ```bash
   ng serve
   ```
Em seguida, abra o navegador e navegue até http://localhost:4200/. A aplicação será carregada e estará disponível para visualização. Sempre que você alterar qualquer um dos arquivos fonte, a aplicação será recarregada automaticamente para refletir as mudanças.