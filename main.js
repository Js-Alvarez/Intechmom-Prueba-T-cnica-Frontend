document.addEventListener('DOMContentLoaded', function () {
      
    const userListContainer = document.getElementById('user-list');

    fetch('https://randomuser.me/api/?results=8&nat=us&inc=name,picture,gender,dob,location')
        .then(response => response.json())
        .then(data => {
            
            const users = data.results;
            users.forEach(user => {
                const userCard = createUserCard(user);
                userListContainer.appendChild(userCard);
            });
        });
   
    function createUserCard(user) {
        
        const card = document.createElement('article');
        card.classList.add('slider-content');
   
        card.innerHTML = `
            <div class="card-wrapper">
                <div class="card">
                    <div class="image-content">
                        <span class="overlay"></span>
                        <div class="card-image">
                        <img loading="lazy" src="${user.picture.large}" alt="User Thumbnail" class="card-img">
                        <h1 class="name">${user.name.first} ${user.name.last}</h1>
                        </div>
                    </div>
                    <div class="card-content">
                        <p class="description">Género: ${user.gender}</p>
                        <p class="description">Fecha de Nacimiento: ${user.dob.date}</p>
                        <p class="description">Dirección: ${user.location.city}, ${user.location.country}</p>
                        <p class="description">Email: ${user.email}</p>                     
                    </div>
                </div>
            </div>
        `;

        return card;
    }
    card.addEventListener('click', function() {
       
    });
});

function buscarUsuario() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    const tarjetasUsuarios = document.querySelectorAll('.card');

    tarjetasUsuarios.forEach(tarjeta => {
        const nombreUsuario = tarjeta.querySelector('.name').textContent.toLowerCase();

        
        tarjeta.style.display = nombreUsuario.includes(searchTerm) ? 'block' : 'none';
    });
}
