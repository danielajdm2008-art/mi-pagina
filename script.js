/* LOADER */

window.addEventListener('load', ()=>{

setTimeout(()=>{

document.getElementById('loader').style.display='none';

},2000);

});

/* PARTICLES */

particlesJS('particles-js', {

particles: {

number: {
value: 80
},

color: {
value: '#00d4ff'
},

shape: {
type: 'circle'
},

opacity: {
value: 0.5
},

size: {
value: 3
},

line_linked: {
enable: true,
distance: 150,
color: '#00d4ff',
opacity: 0.4,
width: 1
},

move: {
enable: true,
speed: 3
}

}

});

/* TITULO EFECTO TYPE */

const title = "Soporte Técnico Profesional";
const subtitle = "Especialistas en redes, ciberseguridad, desarrollo web y tecnología moderna.";

let i = 0;
let j = 0;

function typeTitle(){

if(i < title.length){

document.getElementById('typing-title').innerHTML += title.charAt(i);

i++;

setTimeout(typeTitle,100);

}

}

function typeSubtitle(){

if(j < subtitle.length){

document.getElementById('typing-subtitle').innerHTML += subtitle.charAt(j);

j++;

setTimeout(typeSubtitle,40);

}

}

typeTitle();

setTimeout(typeSubtitle,2500);

/* CONTADORES */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{

counter.innerText='0';

const updateCounter=()=>{

const target=+counter.getAttribute('data-target');

const c=+counter.innerText;

const increment=target/100;

if(c<target){

counter.innerText=`${Math.ceil(c+increment)}`;

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});

/* ANIMACIONES SCROLL */

const hiddenElements=document.querySelectorAll(
'.card, .testimonial, .faq, .contact-card, .stat-card, .why-card'
);

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

});

hiddenElements.forEach((el)=>{

el.classList.add('hidden');

observer.observe(el);

});

/* BOTON ARRIBA */

const topBtn=document.getElementById('topBtn');

window.onscroll=function(){

if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

topBtn.style.display='block';

}else{

topBtn.style.display='none';

}

};

topBtn.onclick=function(){

window.scrollTo({
top:0,
behavior:'smooth'
});

};

/* CHATBOT */

function toggleChat(){

const chatbox=document.getElementById('chatbox');

if(chatbox.style.display==='block'){

chatbox.style.display='none';

}else{

chatbox.style.display='block';

}

}

function sendMessage(){

const input=document.getElementById('userInput');

const text=input.value.toLowerCase().trim();

const messages=document.getElementById('messages');

const typing=document.getElementById('typing');

if(text==='') return;

messages.innerHTML += `
<div class="message user">
<b>Tú:</b> ${text}
</div>
`;

typing.style.display='block';

let response='';

if(text.includes('hola')){

response='👋 Hola, ¿en qué puedo ayudarte hoy?';

}else if(text.includes('internet') || text.includes('wifi')){

response='🌐 Reinicia el router y verifica los cables de red.';

}else if(text.includes('virus')){

response='🛡️ Ejecuta un análisis antivirus completo.';

}else if(text.includes('lenta')){

response='💻 Tu computadora puede necesitar mantenimiento.';

}else if(text.includes('pagina web')){

response='🌍 También desarrollamos páginas web profesionales.';

}else if(text.includes('gracias')){

response='😊 Con gusto. Gracias por contactar TechFix.';

}else if(text.includes('precio')){

response='💲 Los precios dependen del servicio requerido.';

}else{

response='🤖 Puedo ayudarte con soporte técnico, redes, computadoras, seguridad y desarrollo web.';

}

setTimeout(()=>{

typing.style.display='none';

messages.innerHTML += `
<div class="message bot">
<b>Bot:</b> ${response}
</div>
`;

messages.scrollTop=messages.scrollHeight;

},1500);

input.value='';

}

/* ENTER */

document.getElementById('userInput').addEventListener('keypress', function(e){

if(e.key==='Enter'){

sendMessage();

}

});