import express from "express";
import { startDatabase } from "./configs/database";
import { User } from "./entities/user.entity";

// Cria um servidor HTTP
const app = express();

// Inicia a conexão com o banco de dados
startDatabase();

const user = new User({
  cpf: "032.165.487-54",
  email: "rickson@uea.com.br",
  name: "Rickson Thompson",
  phone: "(92) 99967-7158",
});

console.log("Usuário instanciado com sucesso:", user);

// Cria uma rota GET para acessar a aplicação
app.get("/", (req: any, res: any) => {
  console.log("Alguem acessou a aplicação!");

  return res.json({ message: "Acessou com sucesso!" });
});

// Inicia o servidor rodando na porta 3000
app.listen(3000, () => {
  console.log("Servidor está rodando na porta 3000!");
});
