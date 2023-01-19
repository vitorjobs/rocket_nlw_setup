## Aula 01 - O que é o NODE ?
### Instalação e configuração do TypeScript

  - npm install typescript -D
  - npx tsc (ou npm typescript) -- init | Inicializador do arquivo `tsconfig`
  - npm i tsx -D | Permite executar o node sem a necessidade de realizar qualquer tipo de conversão
  - configurar o watch no script `dev` do package.json

### Instalação e configuração do ORM `Prisma`

  - npm install typescript -D
  - npx tsc (ou npm typescript) -- init | Inicializador do arquivo `tsconfig`
  -  npx prisma init --datasource-provider SQLite | Indica que o banco de dados será do Tipo SQLite 
     -  Após executado, é criada a Pasta `prisma` contendo o arquivo `schema.prisma` para configuração da conexão com o banco de dados
     
     -  ```bash 
        `Dicas do Prisma:`

          1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started.

          2. Run npx prisma db pull to turn your database schema into a Prisma schema.      

          3. Run npx prisma generate to generate the Prisma Client. You can then start querying your database.

        ```
  - configurar o watch no script `dev` do package.json
  - Configurar no arquivo `.env` o path do banco de dados
  - `Model`: Criar tabelas, setando chave e valor
  - `Executar migration`: npx prisma migrate dev
    - Ler e entende o que existe no arquivo schema.prisma
    - Abre caixa de Dialogo para confirmar informações para controle de versão do banco de dados
    - Cria o arquivo de banco de dados, cria a pasta migrations com tabela e campos informados na estrutura da tabela
  - Visualizar banco de dados: `npx prisma studio` | Abre o banco de dados no navegador