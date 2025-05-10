// Inicializa AOS
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
  });
  
  // GSAP + ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Animar tarjetas de blog (contenedor general)
  gsap.utils.toArray('.blog__card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power3.out',
    });
  
    // Zoom-in y fade-in para imágenes
    const img = card.querySelector('img');
    gsap.from(img, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      scale: 1.1,
      duration: 1,
      ease: 'power2.out',
    });
  
    // Animación en cascada para el contenido interno
    const elements = card.querySelectorAll('.blog__card-title, .blog__card-text, .blog__btn');
    gsap.from(elements, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out',
    });
  
    // Parallax sutil al hacer scroll (efecto profundidad en imágenes)
    gsap.to(img, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
  
  // Animación de entrada para el hero
  gsap.from('.blog__hero h1', {
    opacity: 0,
    y: -60,
    duration: 1,
    delay: 0.3,
    ease: 'power4.out',
  });
  gsap.from('.blog__hero p', {
    opacity: 0,
    y: -30,
    duration: 1,
    delay: 0.6,
    ease: 'power4.out',
  });
  
  // Newsletter con efecto suave
  gsap.from('.newsletter', {
    scrollTrigger: {
      trigger: '.newsletter',
      start: 'top 80%',
    },
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: 'back.out(1.7)',
  });
  
  // Navbar fade-in desde arriba
  gsap.from('.navbar', {
    opacity: 0,
    y: -30,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out',
  });
  
  // Footer fade-in con delay
  gsap.from('.footer_social', {
    scrollTrigger: {
      trigger: '.footer_social',
      start: 'top 90%',
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out',
  });
  
  // Animación del botón hamburguesa (menú móvil)
  const toggler = document.getElementById('navbar-toggler');
  const bars = document.querySelectorAll('#hamburger-icon .bar');
  let isOpen = false;
  
  toggler.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
      gsap.to(bars[0], { rotation: 45, y: 10, transformOrigin: 'center', duration: 0.3 });
      gsap.to(bars[1], { opacity: 0, duration: 0.3 });
      gsap.to(bars[2], { rotation: -45, y: -10, transformOrigin: 'center', duration: 0.3 });
    } else {
      gsap.to(bars[0], { rotation: 0, y: 0, duration: 0.3 });
      gsap.to(bars[1], { opacity: 1, duration: 0.3 });
      gsap.to(bars[2], { rotation: 0, y: 0, duration: 0.3 });
    }
  });
  
  // Fade-in de enlaces del navbar uno por uno
  gsap.from('.navbar-nav .nav-item', {
    scrollTrigger: {
      trigger: '.navbar-nav',
      start: 'top 90%',
    },
    opacity: 0,
    y: -10,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power1.out',
  });
  