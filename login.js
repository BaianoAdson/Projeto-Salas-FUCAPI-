const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Aqui você faria a verificação de usuário/senha
  
  // Redireciona para a nova página
  window.location.href = "home.html"; 
});