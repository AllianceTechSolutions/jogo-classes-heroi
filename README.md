# 🛡️ Desafio: Escrevendo as Classes de um Jogo
<p align="center">
  <img src="https://th.bing.com/th/id/OIG2.Dy0e_SLwEXi9Bh88LoYv?pid=ImgGn" width="50%">
</p>

Este projeto faz parte de um desafio que envolve a criação de uma classe para representar um herói em uma aventura. A classe deve incluir propriedades básicas e métodos que permitam simular ataques baseados no tipo de herói.

## 📚 Conceitos Utilizados

### 1. Variáveis
As variáveis são utilizadas para armazenar informações essenciais sobre o herói, como seu nome, idade e tipo.

### 2. Operadores
Operadores são utilizados principalmente na lógica de tomada de decisão para verificar o tipo do herói e definir o tipo de ataque que ele usará.

### 3. Laços de Repetição
Embora não tenha sido usado neste código específico, laços de repetição poderiam ser implementados para iterar sobre várias instâncias de heróis ou para simular uma sequência de ataques.

### 4. Estruturas de Decisão
As estruturas de decisão são usadas para determinar qual ataque o herói realizará com base em seu tipo. No código, isso é feito com um `switch` statement, que compara o tipo do herói (`this.tipo`) com os casos definidos (como "mago", "guerreiro", etc.) e, dependendo do caso, define a variável `ataque` com o tipo de ataque correspondente.

### 5. Funções
O código utiliza várias funções:
- **Construtor**: O método `constructor` é usado para inicializar as propriedades de cada instância da classe `Heroi`.
- **Método atacar**: O método `atacar` é responsável por determinar o tipo de ataque que o herói realizará.
- **Método escrever**: O método `escrever` exibe uma mensagem formatada no console, indicando o tipo de herói e o ataque realizado.

### 6. Classes e Objetos
- **Classe Heroi**: Representa um herói com propriedades como nome, idade e tipo. A classe também inclui métodos que permitem que o herói execute um ataque.
- **Objetos**: Instâncias da classe `Heroi` são criadas para representar heróis específicos, como "Aragorn" (guerreiro) ou "Gandalf" (mago).

## 🎯 Objetivo do Desafio

O objetivo é criar uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:
- **nome**: Nome do herói.
- **idade**: Idade do herói.
- **tipo**: Tipo do herói (ex: guerreiro, mago, monge, ninja).

Além disso, a classe deve ter um método chamado `atacar` que exibe uma mensagem conforme o tipo de ataque baseado no tipo do herói:
- Se o tipo for "mago", o ataque exibirá "usou magia".
- Se o tipo for "guerreiro", o ataque exibirá "usou espada".
- Se o tipo for "monge", o ataque exibirá "usou artes marciais".
- Se o tipo for "ninja", o ataque exibirá "usou shuriken".

## 🚀 Como Executar

1. Clone o repositório para a sua máquina local.
2. Navegue até o diretório do projeto.
3. Execute o arquivo JavaScript no terminal usando `node` para ver os heróis atacando de acordo com seu tipo.

## 🔍 Saída Esperada

O programa exibirá uma mensagem como:
- `"O guerreiro Aragorn atacou usando espada"`
- `"O mago Gandalf atacou usando magia"`
- `"O ninja Leonardo atacou usando shuriken"`
- `"O monge Splinter atacou usando artes marciais"`

Essas mensagens são geradas com base nas propriedades e métodos da classe `Heroi`.

Divirta-se criando e atacando com seus heróis! 🎮
