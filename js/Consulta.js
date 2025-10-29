const cardM = document.getElementById("registro-moradores");
const cardF = document.getElementById("funcionario-page");

cardF.addEventListener("click", () => {
  window.location.href = "ConsultaFuncionario.html";
});

cardM.addEventListener("click", () => {
  window.location.href = "ConsultaMorador.html";
});
