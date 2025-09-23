// Cotacao de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


// Obtendo os elementos do formulario.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

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
    console.log(amount, price, symbol)
  }