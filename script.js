// Cotação de moedas do dia.
const USD = 5.65; // Valor do dólar em reais
const EUR = 6.42; // Valor do euro em reais
const GBP = 7.65; // Valor da libra em reais

// Obtendo os elementos do formulário.
const form = document.querySelector("form"); // Seleciona o formulário inteiro
const footer = document.querySelector("main footer"); // Seleciona o rodapé dentro da tag <main>
const amount = document.getElementById("amount"); // Seleciona o campo onde o usuário digita o valor
const currency = document.getElementById("currency"); // Seleciona o menu suspenso (select) das moedas

// Manipulando o input "amount" para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g; // Expressão regular que pega tudo que NÃO for número
  amount.value = amount.value.replace(hasCharactersRegex, ""); // Substitui qualquer caractere não numérico por nada (remove)
});

// Capturando o evento de submit no formulário.
form.addEventListener("submit", (event) => {
  event.preventDefault(event); // Impede o recarregamento da página quando o formulário é enviado

  // Verifica qual moeda foi escolhida e chama a função de conversão com os dados certos
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$"); // Converte para dólar
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€"); // Converte para euro
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£"); // Converte para libra
      break;
  }
});

/*form.onsubmit = (event) => {
  event.preventDefault(event)
  console.log(event);
};*/

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result"); // Mostra o rodapé com o resultado da conversão
  } catch (error) {
    console.log(error); // Mostra o erro no console
    footer.classList.remove("show-result"); // Esconde o rodapé caso algo dê errado
    alert("Não foi possível converter. Tente novamente mais tarde."); // Mostra alerta para o usuário
  }
}
