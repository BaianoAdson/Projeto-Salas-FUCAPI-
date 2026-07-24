// Seleciona o formulário pelo ID
const cadastroForm = document.getElementById('cadastroForm');

cadastroForm.addEventListener('submit', function(event) {
  // Impede o envio padrão da página (evita recarregar)
  event.preventDefault();

  // Captura os valores inseridos nos campos de entrada
  const nome = document.getElementById('nome').value;
  const user = document.getElementById('user').value;
  const senha = document.getElementById('senha').value;

  // Cria um objeto para organizar os dados capturados
  const dadosCadastro = {
    nome: nome,
    usuario: user,
    senha: senha
  };

  // Exibe no console do navegador apenas para confirmação visual
  console.log('Dados capturados:', dadosCadastro);

  // Exemplo: Salvar temporariamente no navegador (LocalStorage)
//   localStorage.setItem('usuarioCadastrado', JSON.stringify(dadosCadastro));

  // Redireciona para a página desejada
  // Altere "index.html" para a sua tela destino (ex: "login.html" ou "dashboard.html")
  window.location.href = "login.html";
});