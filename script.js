// ===== Typewriter Effect =====
const words = ["SOFTWARES", "SERVICES", "INTERIOR DESINGS"];
let i = 0, j = 0, currentWord = '', isDeleting = false;
const speed = 150;

function type() {
  const word = words[i];
  currentWord = isDeleting ? word.substring(0, j--) : word.substring(0, j++);
  document.getElementById('typewriter').textContent = currentWord;

  if (!isDeleting && j === word.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? speed / 2 : speed);
  }
}

type();

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(255,255,255,0.25)';
    header.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)';
  } else {
    header.style.background = 'rgba(255,255,255,0.15)';
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
  }
});

// ===== Carousel Logic =====
const track = document.getElementById("track");
const cards = document.querySelectorAll(".carousel-container .card");
const totalCards = cards.length;
const visibleCards = 3;
let index = 0;

function updateSlide() {
  const cardWidth = cards[0].offsetWidth + 20; // card width + margin
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

function moveSlide(dir) {
  index += dir;
  if (index < 0) index = totalCards - visibleCards;
  if (index > totalCards - visibleCards) index = 0;
  updateSlide();
}


// Buttons
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

// Auto-slide every 4 seconds
setInterval(() => moveSlide(1), 4000);







const chatBtn = document.getElementById('chat-btn');
const chatbot = document.getElementById('chatbot');
const chatSend = document.getElementById('chat-send');
const chatInput = document.getElementById('chat-input');
const chatBody = document.getElementById('chat-body');

// Toggle chatbot visibility
chatBtn.addEventListener('click', () => {
  chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
});

// Add message
function addMessage(msg, user=false){
  const p = document.createElement('p');
  p.textContent = msg;
  if(user) p.classList.add('user-msg');
  chatBody.appendChild(p);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Send message
function sendMsg(){
  const msg = chatInput.value.trim();
  if(!msg) return;
  addMessage(msg, true);
  chatInput.value = '';
  setTimeout(()=> respond(msg), 500);
}

// Trigger on button or Enter
chatSend.addEventListener('click', sendMsg);
chatInput.addEventListener('keypress', e => { if(e.key==='Enter') sendMsg(); });

// Chatbot responses
function respond(msg){
  msg = msg.toLowerCase();
  if(msg.includes('services')) addMessage('We offer Custom Software, Web & App Development, Data Science & Cloud Integration.');
  else if(msg.includes('contact')) addMessage('Reach us at email@example.com or call +91-1234567890.');
  else if(msg.includes('pricing')) addMessage('Please share your requirements and we will provide a custom quote.');
  else if(msg.includes('hey')) addMessage('Hey! How can I assist you?');
  else addMessage('Sorry, I didn\'t understand. Try: Services, Contact, or Pricing.');
}
