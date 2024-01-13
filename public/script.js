const URL_API = 'http://localhost:3000/api/beers/';
const TABLE = document.querySelector('tbody');
loadTable()
function loadTable() {
    fetch(URL_API)
        .then(res => res.json())
        .then(data => {
            let beers = data.data.beers;
            beers.forEach(beer => {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${beer.name}</td>
                <td>${beer.type}</td>
                <td>
                <button onclick="showBeer(${beer.id})">Ver</button>
                <button onclick="modBeer(${beer.id})">Modificar</button>
                <button onclick="deleteBeer(${beer.id})">Eliminar</button>
                </td>
            `;
                TABLE.appendChild(row);
            })
        })
}

function showBeer(id) {
    TABLE.innerHTML = '';
    fetch(URL_API + id)
        .then(res => res.json())
        .then(data => {
            let beer = data.data
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${beer.name}</td>
            <td>${beer.type}</td>
            <td>${beer.graduacion_alcoholica}</td>
            <td>${beer.descripcion}</td>
            <td>
            <button onclick="modBeer(${beer.id})">Modificar</button>
            <button onclick="deleteBeer(${beer.id})">Eliminar</button>
            </td>
        `;
            TABLE.appendChild(row);
        })
}

