// Cotação de moedas do dia.
const USD = 5.65; // Valor do dólar em reais
const EUR = 6.42; // Valor do euro em reais
const GBP = 7.65; // Valor da libra em reais

// Obtendo os elementos do formulário.
const form = document.querySelector("form"); // Seleciona o formulário
const footer = document.querySelector("main footer"); // Seleciona o rodapé da área principal
const amount = document.getElementById("amount"); // Campo onde o usuário digita o valor em reais
const currency = document.getElementById("currency"); // Menu onde o usuário escolhe a moeda (USD, EUR ou GBP)
const description = document.getElementById("description"); // Área de texto onde será exibida a cotação da moeda
const result = document.getElementById("result");

// Manipulando o input "amount" para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g; // Expressão regular que encontra tudo que NÃO for número
  amount.value = amount.value.replace(hasCharactersRegex, ""); // Remove qualquer caractere que não for número
});

// Capturando o evento de submit no formulário.
form.addEventListener("submit", (event) => {
  event.preventDefault(event); // Impede que a página seja recarregada ao enviar o formulário

  // Verifica qual moeda foi escolhida e chama a função para fazer a conversão
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$"); // Se a moeda for USD, chama a função com o valor do dólar
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€"); // Se for euro
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£"); // Se for libra
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
    // Exibindo a cotação da moeda selecionada
    // description.textContent = `${symbol} 1 = ${price}`; Exibe a cotação no elemento <description>
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`; // Exibe a cotação no elemento <description>

    // Calcula o total.
    let total = amount * price;

    // Exibe o resultado total.
    result.textContent = total;

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result"); // Adiciona uma classe CSS que mostra o rodapé com os resultados
  } catch (error) {
    console.log(error); // Se der erro, mostra o erro no console
    footer.classList.remove("show-result"); // Esconde o rodapé para não mostrar dados incorretos
    alert("Não foi possível converter. Tente novamente mais tarde."); // Mostra mensagem de erro para o usuário
  }
}

// Formata a moeda em Real brasileiro.
function formatCurrencyBRL(value) {
  //const value = poderia ser feito desta forma.
  // Converte para número para utilizar o toLocaleString Para formatar no padrão BRL (R$ 00,00).
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
