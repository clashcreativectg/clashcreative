// Inicializar AOS
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });
  
  // Volver arriba (opcional)
  const backToTopButton = document.createElement('button');
  backToTopButton.innerText = "↑";
  backToTopButton.id = "backToTop";
  backToTopButton.title = "Volver arriba";
  document.body.appendChild(backToTopButton);
  
  backToTopButton.style.position = "fixed";
  backToTopButton.style.bottom = "20px";
  backToTopButton.style.right = "20px";
  backToTopButton.style.padding = "10px 15px";
  backToTopButton.style.backgroundColor = "#0d6efd";
  backToTopButton.style.color = "white";
  backToTopButton.style.border = "none";
  backToTopButton.style.borderRadius = "50%";
  backToTopButton.style.display = "none";
  backToTopButton.style.cursor = "pointer";
  backToTopButton.style.zIndex = "999";
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  