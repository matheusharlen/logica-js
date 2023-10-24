alert("Sejam bem vindos ao jogo do número secreto"); // Abre uma caixa de diálogo e exibe a mensagem de boas vindas
let numeroMaximo = prompt("Digite o valor máximo que você deseja adivinhar?"); //Solicita ao usuário o número maximo que ele deseja utilizar e atribui esse número a variável numeroMaximo
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //Utiliza a função Math.random para gerar um número pseudo-aleatório entre 1 o valor atribuído a variável de numeroMaximo
console.log(numeroSecreto); //Escreve no console o número secreto gerado para controle
let chute; // Variável de controle para comparar com o número secreto
let tentativas = 1; // Variável incremental para saber quantas tentativas foram necessárias antes do acerto
// Enquanto o chute for diferente do número secreto, realiza as checagens
while(chute!=numeroSecreto){
    chute = prompt (`"Escolha um número entre 1 e ${numeroMaximo}:"`);
    if(chute == numeroSecreto){
       break;
    }else{
        if(chute>numeroSecreto){
            alert(`O número secreto é menor que o chute ${chute}`); //Se o número secreto for menor que o chute, exibe uma mensagem de alerta avisando que é um número menor
        }else{
            alert(`O número secreto é maior que o chute ${chute}`); // Senão, exibe uma mensagem avisando que o número secreto é maior que o chute
        }
        
    }
    tentativas++;// Incrementa a variável tentativas para exibir ao usuário como uma trivia
    
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; // Utiliza o operador ternário para verificação, se tentativas maior que 1, retorna a string tentativas, caso não seja, retorna a string tentativa
alert(`Parabénss! Você acertou o número secreto ${numeroSecreto} após ${tentativas} ${palavraTentativa}!`); // Alerta para avisar que o usuário ganhou, informando o número secreto e o número de tentativas
