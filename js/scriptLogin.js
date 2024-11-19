document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const feedback = document.getElementById('feedback');
  
    feedback.textContent = '';

    //pegando os dados do usuario
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioGuardado'));

    if(usuarioSalvo){
      console.log(usuarioSalvo.email);
      console.log(usuarioSalvo.password);
    }

    // Simulação de verificação simples (email e senha corretos)
    if (usuarioSalvo.email === email && usuarioSalvo.password === password) {
      feedback.textContent = 'Login bem-sucedido!';
      feedback.style.color = 'green';
      window.location.href = './homePage.html';
    } else {
      feedback.textContent = 'Usuário ou senha incorretos!';
      feedback.style.color = 'red';
    }
  });