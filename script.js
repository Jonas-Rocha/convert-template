const form = document.querySelector("form"); //obtendo formulário
const amount = document.getElementById("amount"); //obtendo input:
const currency = document.getElementById("currency"); //obtendo o select das moedas

// Manipulando o input "amount" para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturando o evento de submit no formulário

form.addEventListener("submit", (event) => {
  event.preventDefault(event);
  console.log(currency.value);
});

/*form.onsubmit = (event) => {
  event.preventDefault(event)
  console.log(event);
};*/
