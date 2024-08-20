// Definição da classe "Heroi" que representa um herói genérico em uma aventura
class Heroi {
    // O construtor é uma função especial que é chamada quando um objeto da classe é criado.
    constructor(nome, idade, tipo) {
        
      // A propriedade "nome" do objeto é inicializada com o valor passado no parâmetro "nome".
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Definição de um método chamado "atacar", que é uma função pertencente à classe "Heroi".
    // Este método será utilizado para realizar o ataque do herói, exibindo uma mensagem no console.
    atacar() {
      // Declaração de uma variável chamada "ataque" que armazenará o tipo de ataque baseado no tipo do herói.
      let ataque;
  
      // Estrutura de decisão "switch" que avalia o tipo do herói e define o ataque correspondente.
      switch (this.tipo) {
        case "mago":
          ataque = "magia"; // Se o herói for um "mago", o ataque é definido como "magia".
          break;
        case "guerreiro":
          ataque = "espada"; 
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken"; 
          break;
        default:
          ataque = "ataque desconhecido"; 
      }

      // método "escrever" para exibir a mensagem no console.
      this.escrever(ataque);  
    }
  
    // método "escrever" responsável por exibir a mensagem formatada no console.
    escrever(ataque) {
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Criação de um objeto 
  // Aqui usamos a palavra-chave "new" para instanciar um novo objeto da classe "Heroi".
  let heroi1 = new Heroi("Aragorn", 35, "guerreiro");
  // Chamada do método "atacar" no objeto "heroi1", que exibe a mensagem de ataque no console.
  heroi1.atacar(); // Saída esperada: "O guerreiro Aragorn atacou usando espada"
  
  let heroi2 = new Heroi("Gandalf", 1000, "mago");
  heroi2.atacar(); 
  
  let heroi3 = new Heroi("Leonardo", 25, "ninja");
  heroi3.atacar(); 
  
  let heroi4 = new Heroi("Splinter", 38, "monge");
  heroi4.atacar(); 
  