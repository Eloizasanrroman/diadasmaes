const carrossel = document.querySelector(".carrossel");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let index = 0;

function updateCarousel() {

  carrossel.scrollTo({
    left: index * carrossel.clientWidth,
    behavior: "smooth"
  });

  dots.forEach(dot => dot.classList.remove("active"));

  if (dots[index]) {
    dots[index].classList.add("active");
  }
}

nextBtn.addEventListener("click", () => {
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index--;

  if (index < 0) {
    index = slides.length - 1;
  }

  updateCarousel();
});

setInterval(() => {
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  updateCarousel();
}, 5000);












const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});














const musica = document.getElementById("musica");
const musicBtn = document.getElementById("musicBtn");

let tocando = false;

musicBtn.addEventListener("click", () => {

  if (!tocando) {
    musica.play();
    musicBtn.innerHTML = "❚❚ Pausar música";
    tocando = true;

  } else {
    musica.pause();
    musicBtn.innerHTML = "▶ Tocar música";
    tocando = false;
  }

});






















function criarCoracoes() {
    const area = document.getElementById("area-coracoes");

    for (let i = 0; i < 30; i++) {
        const coracao = document.createElement("div");
        coracao.classList.add("coracao");
        coracao.innerHTML = "💗";

        // posição aleatória na largura da tela
        coracao.style.left = Math.random() * 100 + "vw";

        // tamanho aleatório
        coracao.style.fontSize = (16 + Math.random() * 20) + "px";

        // velocidade levemente variada
        coracao.style.animationDuration = (2 + Math.random() * 2) + "s";

        area.appendChild(coracao);

        // remove depois da animação
        setTimeout(() => {
            coracao.remove();
        }, 4000);
    }
}