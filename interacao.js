document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botaoInterativo");
  const mensagem = document.getElementById("mensagem");

  botao.addEventListener("click", () => {
    mensagem.textContent = "🔥 Promoção ativada: 20% de desconto em carros selecionados!";
    botao.style.backgroundColor = "#43a047";
    botao.innerHTML = "✔️ Promoção Ativada";
  });
});
