document.addEventListener("DOMContentLoaded", function() {
    const animeBanners = document.getElementById("anime-banners");
    const bemVindo = document.getElementById("bemVindo");

    loadUserPreferences();
    loadUserName();

    function loadUserName() {
        const userName = JSON.parse(localStorage.getItem("usuarioGuardado"));
        console.log(userName.name)
        if (userName != null) {
            bemVindo.textContent = `Seja bem-vindo, ${userName.name}!`;
        } else {
           bemVindo.textContent = "Seja bem-vindo!";
        }
    }

    function loadUserPreferences() {
        try {
            const selectedAnimes = JSON.parse(localStorage.getItem("selectedAnimes")) || [];

            if (selectedAnimes.length > 0) {
                displayBanners(selectedAnimes);
            } else {
                animeBanners.innerHTML = "<p>Nenhum anime selecionado.</p>";
            }
        } catch (error) {
            console.error("Erro ao carregar os dados de animes: ", error);
            animeBanners.innerHTML = "<p>Erro ao carregar preferências de animes.</p>";
        }
    }

    function displayBanners(selectedAnimes) {
        animeBanners.innerHTML = "";

        const banners = {
            "Naruto": "/img/Naruto.webp",
            "One-Piece": "/img/One-Piece.jpg",
            "Attack-On-Titan": "/img/Attack-On-Titan.webp",
            "Dragon-Ball": "/img/Dragon-Ball.jpg",
            "Bleach": "/img/Bleach.jpg"
        };

        let displayedAnimes = [];

        selectedAnimes.forEach(anime => {
            if (banners[anime] && !displayedAnimes.includes(anime)) {
                const imgElement = document.createElement("img");
                imgElement.src = banners[anime];
                imgElement.alt = anime;

                imgElement.onerror = function() {
                    imgElement.alt = "Imagem não encontrada";
                };

                animeBanners.appendChild(imgElement);
                displayedAnimes.push(anime);
            }
        });

        if (animeBanners.innerHTML === "") {
            animeBanners.innerHTML = "<p>Nenhum banner disponível para os animes selecionados.</p>";
        }
    }
});