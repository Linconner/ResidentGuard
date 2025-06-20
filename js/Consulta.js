const selectsearch = document.getElementById("selectseacrh");
const txtsearch = document.getElementById("txtsearch");
const btnlimpartxt = document.getElementById("limpartxt");
const btnlimparfiltro = document.getElementById("limparfiltro");

btnlimpartxt.addEventListener("click", () => {
  txtsearch.value = "";
  txtsearch.focus();
});

btnlimparfiltro.addEventListener("click", () => {
  selectsearch.value = "";
});
