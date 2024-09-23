document.querySelector(".explore-btn").addEventListener("click", function () {
  alert("Exploring More!");
});

// Анимация при скролле (Пример)
window.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero");
  hero.style.opacity = 1 - window.scrollY / 600;
});
