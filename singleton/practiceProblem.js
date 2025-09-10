// Classe Database com Singleton
class Database {
  constructor(connectionString) {
    // Se já existir uma instância, retorna ela
    if (Database.instance) {
      return Database.instance;
    }

    // Caso contrário, cria a conexão
    this.connectionString = connectionString;
    this.id = Math.random();
    this.logs = [];
    console.log(`🔌 Nova conexão criada: ${this.id}`);

    // Salva a instância criada
    Database.instance = this;
  }

  query(sql) {
    this.logs.push(sql);
    console.log(`Executando query [${sql}] na conexão ${this.id}`);
    console.log("Histórico de logs:", this.logs);
  }
}

// Cliente tenta criar várias conexões
const db1 = new Database("db://meu-banco");
db1.query("SELECT * FROM users");

const db2 = new Database("db://meu-banco");
db2.query("SELECT * FROM products");

// Teste para ver se são a mesma instância
console.log(db1 === db2); // true ✅