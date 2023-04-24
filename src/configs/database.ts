// Biblioteca responsável pela comunicação com o Postgres
import { Client } from "pg";

// Configurações do banco de dados
const config = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "first-api",
  dialect: "postgres",
};

// Conexão com o banco de dados Postgres
const client = new Client({
  user: config.username,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port,
});

// Faz uma consulta no banco para listar todos os usuários
client
  .query(`select * from "first-api".public."User"`)
  .then((result) => {
    console.log("Usuários cadastrados:", result.rows);
  })
  .catch((error) => console.log(error));

export function startDatabase() {
  // Inicia a conexão com o banco de dados
  client.connect(function (err) {
    if (err) throw err;

    console.log("Conectou com sucesso ao banco de dados!");
  });
}
