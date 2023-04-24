**Repositório do projeto feito:**
[https://github.com/treinamento-backend-nodejs/class-first-api](https://github.com/treinamento-backend-nodejs/class-first-api "smartCard-inline")

‌

1. **Fundamentos e princípios do NodeJS**
   - `[O que é]` Uma plataforma de desenvolvimento para aplicações do lado do servidor.
   - `[Como funciona]` O código é escrito em Javascript > depois transformado em C++ > se torna binários > é executado.
2. **TypeScript e Javascript**
   - `[O que é o Javascript]` É uma linguagem de programação de alto nível que é usada principalmente para criar interatividade em páginas da web. É frequentemente usado para adicionar funcionalidade a páginas da web, como validar formulários, criar menus e barras de navegação dinâmicas, criar animações e efeitos visuais, e permitir a interação do usuário com elementos da página. Como uma linguagem de programação interpretada, o JavaScript é executado diretamente no navegador do usuário, sem a necessidade de um compilador ou software de execução separado.
   - `[O que é o Typescript]` TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão do JavaScript. Ela adiciona recursos de tipagem estática ao JavaScript, o que significa que os desenvolvedores podem declarar explicitamente os tipos de dados que são usados em seu código.
   - `[Como funciona o Typescript]` Esses tipos ajudam a prevenir erros comuns de programação, tornando o código mais seguro e fácil de manter.
     Além disso, o TypeScript oferece recursos adicionais, como classes, interfaces, herança, módulos e outras construções de programação orientada a objetos, que tornam o código mais modular e reutilizável. Ele também suporta recursos mais modernos do JavaScript.
   - `[Os benefícios do TypeScript]` Em resumo, o TypeScript é uma linguagem de programação que ajuda os desenvolvedores a escrever código JavaScript mais seguro, legível e fácil de manter, adicionando recursos de tipagem estática e outras construções de programação orientada a objetos.
3. **Criando uma API Rest com NodeJs**
   - `[Iniciar um projeto com NodeJS]` Utilizando gerenciador de pacotes YARN ou NPM. No exemplo da aula, usamos o `npm init`
   - `[Instalação das dependências`] O NodeJS permite importar módulos de terceiros na aplicação para realizar, por exemplo, criptografia de senha.
     `npm install <nome do módulo>` Adiciona o módulo como dependência do projeto, ou seja, precisa dele pra funcionar.
     `npm install --save-dev <nome do módulo>` Adiciona o módulo como dependência de desenvolvimento, ou seja, precisa dele apenas para o modo de desenvolvimento.
   - `[Configuração do servidor]` O NodeJS permite configurar um servidor HTTP usando a própria biblioteca interna chamada ‘http’. Porém, utilizaremos o framework externo chamado Express. Ele já possui funcionalidades prontas e fáceis de configurar.
4. **Comunicação com o banco de dados**
   - `[Postgres]` É uma banco de dados relacional de código aberto e que possui várias vantagens, conteúdos e fácil utilização.
   - `[Banco de dados]` É um sistema que guarda um coleção de dados da maneira que defimos a sua estrutura. Eles possuem tabelas, esquemas, colunas e tipos. São usados para que as nossas aplicações armazenem informações como dados de usuários, produtos etc.

### Outros conteúdos ensinados na aula:

---

**Frentes de desenvolvimento**

**Back-End**: São devs que atuam na parte lógica e funcional de um programa/aplicação.

- C++
- C
- Rust
- Java
- C#
- NodeJS (Javascript > C++ > Binário);

**Front-End**: São devs que atuam na parte visual e interativa da aplicação.

- Javascript
- HTML
- CSS

**Mobile**: São devs que atuam na parte visual e interativa de aplicativos de smartphone.

- C#
- Java
- Kotlin
- Swift

**Hardware**: São devs que atuam na parte de hardware (peças, máquinas, robôs).

- C++
- C

**Desktop**: São devs que atuam no desenvolvimento de aplicações para computador

- C++
- C#
- Java

---

**Características de linguagem de programação:**

1. Tipagem:
   - **texto**: string
   - **número**: number
   - **numero flutantes**: float
   - **verdadeiro ou falso**: boolean

---

**Ferramentas utilizadas:**

- Docker
- NodeJS
- NPM
- VsCode
- DbEaver
- Insomnia
- Postgres como um container do Docker

---

Configuração do projeto para usar TypeScript:

**Módulos:**

- typescript
- ts-node
- ts-node-dev

**Scripts:**

```json
"scripts": {
    "start": "node dist/server.js",
    "start:dev": "ts-node-dev --inspect --respawn --transpile-only --ignore-watch node_modules --no-notify src/server.ts"
  },
```

**tsconfig.json:**

```json
{
  "compilerOptions": {
    "target": "es2017",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "lib": ["es6"],                                   /* Specify library files to be included in the compilation. */
    "allowJs": true,                             /* Allow javascript files to be compiled. */
    "outDir": "./dist",                              /* Redirect output structure to the directory. */
    "removeComments": true,                      /* Do not emit comments to output. */
    "strict": true,                                 /* Enable all strict type-checking options. */
    "strictPropertyInitialization": false,        /* Enable strict checking of property initialization in classes. */
    "baseUrl": "./",                             /* Base directory to resolve non-absolute module names. */
    "typeRoots": [
      "./node_modules/@types",
      "./src/@types"
    ],                            /* List of folders to include type definitions from. */
    "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. */
    "emitDecoratorMetadata": true,               /* Enables experimental support for emitting type metadata for decorators. */
    "skipLibCheck": true,                           /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true        /* Disallow inconsistently-cased references to the same file. */
  },
  "include": [
    "src/**/*"
  ]
}
```