let tela = "";
let pontos = 0;
let questoes = 3;

function mostrarElemento(divId) {
  document.getElementById(divId).style.display = "block";
}

function reiniciarPontos() {
  pontos = 0;
}

function ocultarElemento(divId) {
  document.getElementById(divId).style.display = "none";
}

function enviarNome() {
  const nomeJogador = document.getElementById("nomeJogador").value;
  if (nomeJogador != "") {
    ocultarElemento("TelaBemVindo");
    mostrarElemento("TelaEscolhaTema");
    mensagemBoasVindas(nomeJogador);
  }
}

function mensagemBoasVindas(nome) {
  document.getElementById("nomeBemVindo").innerHTML = nome;
}

function perguntasTecnologia() {
  ocultarElemento("TelaEscolhaTema");
  mostrarElemento("TecnologiaQ1");
  tela = "TecnologiaQ1";
}
function perguntasHistoria() {
  ocultarElemento("TelaEscolhaTema");
  mostrarElemento("HistoriaQ1");
  tela = "HistoriaQ1";
}

function verificaAcerto(bool) {
  if (bool == true) {
    pontos = pontos + 1;
  }
}

function proximaTela(bool = false) {
  if (tela == "TecnologiaQ1") {
    ocultarElemento("TecnologiaQ1");
    mostrarElemento("TecnologiaQ2");
    tela = "TecnologiaQ2";
    verificaAcerto(bool);
    return;
  }

  if (tela == "TecnologiaQ2") {
    ocultarElemento("TecnologiaQ2");
    mostrarElemento("TecnologiaQ3");
    tela = "TecnologiaQ3";
    verificaAcerto(bool);
    return;
  }

  if (tela == "TecnologiaQ3") {
    ocultarElemento("TecnologiaQ3");
    mostrarElemento("TelaEscolhaTema");
    tela = "TelaEscolhaTema";
    verificaAcerto(bool);
    alert("Porcentagem de Acertos:" + (pontos / questoes) * 100 + "%");
    reiniciarPontos();
    return;
  }

  if (tela == "HistoriaQ1") {
    ocultarElemento("HistoriaQ1");
    mostrarElemento("HistoriaQ2");
    tela = "HistoriaQ2";
    verificaAcerto(bool);
    return;
  }

  if (tela == "HistoriaQ2") {
    ocultarElemento("HistoriaQ2");
    mostrarElemento("HistoriaQ3");
    tela = "HistoriaQ3";
    verificaAcerto(bool);
    return;
  }

  if (tela == "HistoriaQ3") {
    ocultarElemento("HistoriaQ3");
    mostrarElemento("TelaEscolhaTema");
    tela = "TelaEscolhaTema";
    verificaAcerto(bool);
    alert("Porcentagem de Acertos:" + (pontos / questoes) * 100 + "%");
    reiniciarPontos();
    return;
  }
}
