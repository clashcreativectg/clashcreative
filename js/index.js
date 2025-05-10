// AOS para otras páginas (si lo usas en algún lugar)
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
  });
  
  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);
  
  // HERO - Animación de entrada
  gsap.from(".hero__title", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
  });
  gsap.from(".hero__paragraph", {
    opacity: 0,
    y: -30,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });
  gsap.from(".cta", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.6,
    ease: "power2.out"
  });
  
  // ABOUT - Títulos y párrafo
  gsap.from(".about .subtitle", {
    scrollTrigger: ".about .subtitle",
    opacity: 0,
    y: 30,
    duration: 0.8
  });
  gsap.from(".about__paragraph", {
    scrollTrigger: ".about__paragraph",
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2
  });
  gsap.utils.toArray(".about__icons").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
      opacity: 0,
      y: 40,
      duration: 0.7,
      delay: i * 0.1,
      ease: "back.out(1.7)"
    });
  });
  
  // KNOWLEDGE
  gsap.from(".knowledge__texts", {
    scrollTrigger: {
      trigger: ".knowledge__texts",
      start: "top 85%",
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out"
  });
  gsap.from(".knowledge__picture", {
    scrollTrigger: {
      trigger: ".knowledge__picture",
      start: "top 85%",
    },
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.out"
  });
  
  // SERVICES
  gsap.from(".services .subtitle", {
    scrollTrigger: ".services .subtitle",
    opacity: 0,
    y: 30,
    duration: 0.8
  });
  gsap.utils.toArray(".services__element").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
      opacity: 0,
      y: 40,
      duration: 0.7,
      delay: i * 0.05,
      ease: "power2.out"
    });
  });
  