//Cancela comportamento padrão de envio do formulário
document.querySelector("form")
.addEventListener("submit", evento => evento.preventDefault())

let campos = document.querySelectorAll("input");



for (campo of campos)
{
  campo.addEventListener("invalid", (e)=>e.preventDefault())
  campo.addEventListener("blur", (e)=> verificarCampo(e));

  // Sobe e desce "placeholder" nome do campo
  campo.addEventListener("blur", (e)=> verificarCampoPreenchido(e));
}

function verificarCampo (campo)
{
  if(campo.target.validity.valid == false)
  {
    campo.target.classList.add("erro");
  }

  else
  {
    campo.target.classList.remove("erro");
  }
}

// Sobe e desce "placeholder" nome do campo
function verificarCampoPreenchido(e)
{
  if(e.target.value != "")
    e.target.parentNode.querySelector("label").classList.add("preenchido");
  else
    e.target.parentNode.querySelector("label").classList.remove("preenchido");
}

function verificarEnvio()
{
  for (campo of campos)
  {
    if(campo.value === "")
      campo.classList.add("erro");
    else
      campo.classList.remove("erro");
  }
}
