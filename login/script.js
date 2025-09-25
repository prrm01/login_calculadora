async function logar() {
  var login = document.getElementById("input").value;

  var senha = document.getElementById("senha").value;

  var mensagem = document.getElementById("mensagem");

  if (login === "" && senha === "") {
    mensagem.innerText = "preencha os campos de login e senha";
  } else if (login === "") {
    mensagem.innerText = "preencha os campos de login";
  } else if (senha === "") {
    mensagem.innerText = "preencha os campos de senha";
  } else {
    if (login === "admin" && senha === "admin") {
      window.location.href = "../calculator/calculator.html";
    } else if (senha !== "admin") {
      mensagem.innerText = "senha incorreta";
    } else {
      mensagem.innerText = "usuário não encontrado";
    }
  }
}
