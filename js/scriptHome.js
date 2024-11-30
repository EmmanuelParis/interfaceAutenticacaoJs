const data = JSON.parse(localStorage.getItem('usuario'));

    document.getElementById('name').textContent = data.name
    document.getElementById('email').textContent = data.email

    const sectionAnimes = document.getElementById('anime-banners');

    data.animes.map(anime => {
        const cover = new Image();
        cover.src = anime.cover;
        cover.alt = anime.title;

        const title = document.createElement('p');
        title.textContent = anime.title;

        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');

        animeCard.append(cover);
        animeCard.append(title);

        sectionAnimes.append(animeCard);
    })


    function logout() {
        showToast('Você foi deslogado com sucesso.', 'success');
        setTimeout(() => {
            localStorage.removeItem('usuario');
            window.location.href = "/pages/login.html";
        }, 3000);
    }

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
