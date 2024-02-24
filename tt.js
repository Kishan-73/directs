let allPlanets = [];
let currentPage = 1;

async function fetchPlanets(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchAllPlanets() {
    let url = 'https://swapi.dev/api/planets/';
    while (url) {
        const data = await fetchPlanets(url);
        allPlanets = [...allPlanets, ...data.results];
        url = data.next;
    }
}
async function datafetch(i){
    const response = await fetch("https://swapi.dev/api/planets/?format=json");
    const movies = await response.json();
    movies.results[i].residents.forEach(async (item)=>{
        var mylinks=await fetch(item)
        var x=await mylinks.json()
        console.log(x)
        console.log(x.name)
    })
    
    console.log(movies);
}

fetchPlanets('https://swapi.dev/api/planets/')
            .then(data => {
                displayPlanets(data.results);
                displayPagination(data.next);
            })
            .catch(error => console.error('Error fetching planets:', error));
            
            async function filterPlanets(searchQuery) {
            const filteredPlanets = allPlanets.filter(planet => planet.name.toLowerCase().includes(searchQuery.toLowerCase()));
            const planetsList = document.getElementById('planets-list');
            planetsList.innerHTML = '';
            filteredPlanets.forEach(planet => {
                const planetCard = document.createElement('div');
                planetCard.classList.add('planet-card');
                planetCard.innerHTML = `
                    <h2>${planet.name}</h2>
                    <p><strong>Climate:</strong> ${planet.climate}</p>
                    <p><strong>Population:</strong> ${planet.population}</p>
                    <p><strong>Terrain:</strong> ${planet.terrain}</p>
                `;
                planetsList.appendChild(planetCard);
            });
        }
        function filterPlanets(value) {
            var planets = document.querySelectorAll('.card-title');
            
            planets.forEach(function(planet) {
                var card = planet.closest('.col');
                if (planet.textContent.toLowerCase().includes(value.toLowerCase())) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
            if (value.trim() === '') {
                planets.forEach(function(planet) {
                    var card = planet.closest('.col');
                    card.style.display = '';
                });
            }
        }
        
            async function init() {
            await fetchAllPlanets();
            await displayPlanets(currentPage);
        }init();
        function filterByPlanet(planet) {
            var planets = document.querySelectorAll('.card-title');
    
            planets.forEach(function (planetCard) {
                var card = planetCard.closest('.col');
                if (planet === 'All' || planetCard.textContent.trim() === planet) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    
        function filterPlanets(value) {
            var planets = document.querySelectorAll('.card-title');
    
            planets.forEach(function (planet) {
                var card = planet.closest('.col');
                if (planet.textContent.toLowerCase().includes(value.toLowerCase())) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
    
            if (value.trim() === '') {
                planets.forEach(function (planet) {
                    var card = planet.closest('.col');
                    card.style.display = '';
                });
            }
        }
