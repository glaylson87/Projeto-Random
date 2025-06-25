function sortearNumero() {

  const min = Math.ceil(document.querySelector(".min").value)

  const max = Math.floor(document.querySelector(".max").value)

  if (max <= min) {
    alert("porfavor coloque um numero Maior que o minimo")
  }
  else {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
  }

}






