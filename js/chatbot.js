let conversationHistory = [];

function toggleChatbot() {
  const box = document.getElementById('chatbotBox');

  if (box.style.display === 'flex') {
    box.classList.remove('fade-in');
    box.classList.add('fade-out');

    setTimeout(() => {
      box.style.display = 'none';
      box.classList.remove('fade-out');
    }, 500); // duración igual a la animación CSS
  } else {
    box.style.display = 'flex';
    box.classList.add('fade-in');
  }
}

// Animación de entrada para el botón al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.chatbot-btn');
  btn.classList.add('float-in');
});

function sendMessage() {
  const input = document.getElementById('userInput');
  const userText = input.value.trim();
  if (!userText) return;

  addMessage(userText, 'user-message');
  input.value = '';

  conversationHistory.push({ sender: 'user', text: userText });

  const lowerText = userText.toLowerCase();
  const response = generateBotResponse(lowerText);

  setTimeout(() => {
    addMessage(response.text, 'bot-message');
    conversationHistory.push({ sender: 'bot', text: response.text });
    if (response.action) {
      handleBotAction(response.action);
    }
    scrollChatToBottom();
  }, 500);
}

function addMessage(text, className) {
  const messages = document.getElementById('chatbotMessages');
  const message = document.createElement('div');
  message.className = `${className} fade-message`; // Añade animación
  message.textContent = text;
  messages.appendChild(message);
}

function scrollChatToBottom() {
  const messages = document.getElementById('chatbotMessages');
  messages.scrollTop = messages.scrollHeight;
}

function generateBotResponse(text) {
  const respuestas = [
    { palabras: ['hola', 'buenas'], respuesta: '¡Hola! 👋 ¿En qué puedo ayudarte hoy?' },
    { palabras: ['servicios'], respuesta: '📌 Ofrecemos:\n- Diseño gráfico\n- Desarrollo web\n- Branding\n¿Te gustaría más detalles o agendar una reunión?', action: 'showServices' },
    { palabras: ['precio', 'cuánto'], respuesta: '💸 Nuestros precios varían según el servicio. ¿Qué necesitas exactamente?' },
    { palabras: ['contacto', 'whatsapp'], respuesta: '📲 Puedes escribirnos directamente a WhatsApp: https://wa.me/573127307351', action: 'whatsapp' },
    { palabras: ['gracias'], respuesta: '¡Con gusto! 😊 Si necesitas algo más, estoy aquí.' },
    { palabras: ['ayuda'], respuesta: '🆘 Estoy aquí para ayudarte. ¿En qué te gustaría obtener más información?' },
  ];

  for (const r of respuestas) {
    if (r.palabras.some(p => text.includes(p))) {
      return { text: r.respuesta, action: r.action };
    }
  }

  return { text: '🤖 Gracias por tu mensaje. Un miembro de nuestro equipo te responderá pronto.' };
}

function handleBotAction(action) {
  if (action === 'whatsapp') {
    enviarMensajeAWhatsApp('¡Hola, necesito ayuda!');
  } else if (action === 'showServices') {
    showServicesList();
  }
}

function showServicesList() {
  addMessage('Nuestros servicios incluyen: \n1. Diseño gráfico\n2. Desarrollo web\n3. Branding\n¿Te gustaría saber más sobre alguno?', 'bot-message');
}

function enviarMensajeAWhatsApp(texto) {
  const numero = '573127307351';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}
