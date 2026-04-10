// =========================
// 🌙 MODO ESCURO + SALVAMENTO
// =========================

const btnTema = document.getElementById("toggle-theme");

// Carregar tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
  document.body.classList.add("dark");
  btnTema.textContent = "☀️ Modo Claro";
}

// Evento de clique
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btnTema.textContent = "☀️ Modo Claro";
    localStorage.setItem("tema", "dark");
  } else {
    btnTema.textContent = "🌙 Modo Escuro";
    localStorage.setItem("tema", "light");
  }
});


// =========================
// 💬 MENSAGEM DINÂMICA
// =========================

const botao = document.getElementById("btn-acao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "🔥 Boa! Você está evoluindo no JavaScript!";
});


// =========================
// 🎨 TROCA DE CORES
// =========================

const botoesCor = document.querySelectorAll(".cor");

botoesCor.forEach(botao => {
  botao.addEventListener("click", () => {
    const cor = botao.dataset.cor;
    document.body.style.background = cor;
  });
});