let ecra = document.getElementById("ecra");
let conta = "";

function adicionar(valor) {
  if (ecra.innerText === "0") {
    conta = valor;
  } else {
    conta += valor;
  }
  ecra.innerText = conta;
}

function limpar() {
  conta = "";
  ecra.innerText = "0";
}

function calcular() {
  try {
    conta = eval(conta);
    ecra.innerText = conta;
  } catch {
    ecra.innerText = "Erro";
    conta = "";
  }
}
