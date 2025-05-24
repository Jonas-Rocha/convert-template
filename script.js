// Cotação de moedas do dia.
const USD = 5.65;
const EUR = 6.42;
const GBP = 7.65;

// Obtendo os elementos do formulário.
const form = document.querySelector("form"); //obtendo formulário
const amount = document.getElementById("amount"); //obtendo input:
const currency = document.getElementById("currency"); //obtendo o select das moedas

// Manipulando o input "amount" para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturando o evento de submit no formulário.

form.addEventListener("submit", (event) => {
  event.preventDefault(event);
  //console.log(currency.value);

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
});

/*form.onsubmit = (event) => {
  event.preventDefault(event)
  console.log(event);
};*/

// Função para converter a moeda.

function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol);
}
