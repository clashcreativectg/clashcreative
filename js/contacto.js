// Animación de enfoque en los campos del formulario
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('focused');
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      input.parentElement.classList.remove('focused');
    }
  });
});

// Animación de botón de envío al hacer clic
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', () => {
  submitButton.classList.add('submitting');
  setTimeout(() => {
    submitButton.classList.remove('submitting');
    alert('Formulario enviado con éxito!');
  }, 1500); // Simula una pequeña animación de "enviando" por 1.5 segundos
});

// Animación de entrada para el formulario
const formSection = document.querySelector('.contact-section');

window.addEventListener('scroll', () => {
  const sectionTop = formSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    formSection.classList.add('visible');
  }
});
