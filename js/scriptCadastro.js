const UrlCadastro = "https://projetoweb-api.vercel.app/auth/register"

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
  
    // Captura os valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Elementos para exibir os erros
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    // Limpa as mensagens de erro
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    feedback.textContent = '';
  
    // Validação de e-mail (RegEx para verificar formato de e-mail)
    const nameRegEx = /([a-zA-Z0-9_\s]+)/g;
    if (!nameRegEx.test(name)) {
      nameError.textContent = 'Formato de nome inválido';
      return;
    };
    // Validação de e-mail (RegEx para verificar formato de e-mail)
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegEx.test(email)) {
      emailError.textContent = 'Formato de e-mail inválido';
      return;
    };
  
    // Validação de senha (mínimo de 8 caracteres, com pelo menos 1 letra e 1 número)
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegEx.test(password)) {
      passwordError.textContent = 'A senha deve ter no mínimo 8 caracteres, incluindo letras e números.';
      return;
    };
  
    const selectedAnimes = Array.from(document.getElementById('anime-select').selectedOptions).map(option => option.value);

    if (selectedAnimes.length > 0) {
      alert('Animes salvos com sucesso!');
    } else {
      alert('Por favor, selecione pelo menos um anime!');
      return; 
    }

    const usuarioCadastrado = {
      name : name,
      email: email,
      password: password,
      anime_preference: selectedAnimes
    };

    fetch(UrlCadastro, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(usuarioCadastrado)})
    .then(response => {
      if(response.code === 400){
        throw new Error("Erro: " + response.message);
      }
      return response.json();
    })
    .then(respData => {
      console.log("Teste da resposta da Api", respData)
    })
    .catch(err => {
      console.error("erro", err)
    })

    feedback.textContent = 'Cadastro bem-sucedido!';
});