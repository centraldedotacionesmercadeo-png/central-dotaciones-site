// Script for demo form behavior
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    console.log('Contacto (demo):', values);
    alert('Gracias, hemos recibido tu mensaje. (Demo)\nRevisa la consola para ver los datos.');
    form.reset();
  });
});
