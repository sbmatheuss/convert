// Cotacao de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


// Obtendo os elementos do formulario.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números.
amount.addEventListener ("input", () => {
  
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})


 // Captando o evento de submit (enviar) do formulario.
  form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
      case "USD":
        convertcurrency(amount.value, USD, "US$")
        break
      case "EUR":
        convertcurrency(amount.value, EUR, "€")
        break
      case "GBP":
        convertcurrency(amount.value, GBP, "£")
        break
    }
  } 

  // Funcao para converter a moeda.
  function convertcurrency(amount, price, symbol) {
    try {
      // Exibindo a cotação da moeda selecionada.
      description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

      // Calcula o total.
      let total = amount * price

      // Exibe o resultado total.
      result.textContent = total
      
      // Aplica a classe que exibe o footer para mostrar o resultado.
      footer.classList.add("show-result")

    } catch (error) {
      // Remove a classe do footer removendo ele da tela.
      footer.classList.remove("show-result")

      console.log(error)
      alert("Nao foi possivel converter. Tente novamente mais tarde.")
    }
  }

  // Formata a moeda em Real Brasileiro.
  function formatCurrencyBRL(value) {
    // Converte para número para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00).
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }