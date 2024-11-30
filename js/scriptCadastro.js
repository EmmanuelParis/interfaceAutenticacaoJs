const form = document.getElementById("cadastroForm");

form.addEventListener('submit', async (e) => {
  const api_url = 'https://projetoweb-api.vercel.app';

  e.preventDefault();

  const formData = new FormData(form);

  if (!formData.get('name') || !formData.get("email") || !formData.get("password")) {
      alert("Os campos precisam ser preenchidos");
      return;
  } else if (formData.get("password").length < 8) {
      showToast("A senha precisa conter no minimo 8 caracteres", 'warning');
      return;
  } else if (formData.get("name").length < 3) {
      showToast("O nome precisa conter no minimo 8 caracteres", 'warning');
      return;
  }

  const animePreferences = Array.from(
      document.getElementById("anime_preference").selectedOptions
  ).map(option => option.value);

  if (animePreferences.length === 0) {
      showToast("Selecione ao menos um anime preferido", 'warning');
      return;
  }

  console.log(animePreferences)

  formData.delete("anime_preference");
  formData.append("anime_preference", animePreferences);

  const formDataObject = {};
  formData.forEach((value, key) => {
      formDataObject[key] = value;
  });

  const response = await fetch(api_url + "/auth/register", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataObject)
  });

  if (response.ok) {
      const result = await response.json();

      showToast("Conta criada com sucesso!", 'success');

      setTimeout(() => {
          window.location.href = "/pages/login.html";
      }, 3000);
  } else {
      const error = await response.json();

      showToast(error.message, 'success');
  }
});

    const api_url = 'https://projetoweb-api.vercel.app';
    const select = document.getElementById("anime_preference");

    select.innerHTML = "";

    const getAnimes = async () => {
        
        try {
            const response = await fetch(api_url + "/anime", {
                method: 'GET'
            });

            if (response.ok) {
                let animes = await response.json();
                animes = animes.animes
                
                animes.map((anime) => {
                    const option = document.createElement("option");
                    option.value = anime.id;
                    option.textContent = anime.title;
                    select.appendChild(option);
                })
            }
        } catch (err) {
            console.log(err)
        }
    };

getAnimes();

function showToast(message, type = 'success') {
  const container = document.querySelector('.toast-container');
  const toast = document.createElement('div');
  toast.classList.add('toast', type);
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
      toast.remove();
  }, 3000);
}