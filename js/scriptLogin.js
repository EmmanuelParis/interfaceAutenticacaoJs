const UrlLogin = "https://projetoweb-api.vercel.app/auth/login"

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const feedback = document.getElementById('feedback');
  
    feedback.textContent = '';

    //pegando os dados do usuario

    const userLogin = {
      email: email,
      password: password,
    }

    fetch(UrlLogin, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(userLogin)})
    .then(response => {
      if (response === 401){
        throw new Error("Erro: " + response.message);
      }
      return response.json;
    })
    .then(respData => {
      console.log("Usuario logado", respData);
      window.location.href = "homePage.html";
    })
    .catch(err => {
      console.error("Erro: ", err);
    })
  });