document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const feedback = document.getElementById('feedback');
  
    feedback.textContent = '';

    // Simulação de verificação simples (email e senha corretos)
    if (email === 'a@gmail.com' && password === '12345678') {
      feedback.textContent = 'Login bem-sucedido!';
      feedback.style.color = 'green';
      window.location.href = 'https://developer.mozilla.org/pt-BR/docs/Learn/Forms';
    } else {
      feedback.textContent = 'Usuário ou senha incorretos!';
      feedback.style.color = 'red';
    }
  });