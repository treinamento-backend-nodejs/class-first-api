// Tabela: User (Usuário)
// 1. Id
// 2. Nome
// 3. Cpf
// 4. Email
// 5. Telefone

export class User {
  id: number;
  name: string;
  cpf: string;
  email: string;
  phone: string;

  // Recebe todos os parâmetros acima exceto o id
  constructor(props: Omit<User, "id">) {
    // Atribui à classe todos os dados que o usuário passar como parâmetro
    Object.assign(this, props);
    // Gera um ID automático
    this.id = Number(Math.floor(Math.random()).toFixed(1)) * 10;
  }
}
