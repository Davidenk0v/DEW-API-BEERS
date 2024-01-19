const URL_API = 'http://localhost:3000/api/beers/';
const TABLE = document.querySelector('tbody');
const ID_INPUT = document.getElementById('id');
const NAME_INPUT = document.getElementById('name');
const TYPE_INPUT = document.getElementById('type');
const ALCOHOL_INPUT = document.getElementById('graduacion');
const DESCRIPTION = document.getElementById('description');
const FORM = document.querySelector('form');

const MESSAGE = document.getElementById('message');
function loadTable() {
    TABLE.innerHTML = '';
    fetch(URL_API)
        .then(res => res.json())
        .then(json => {
            let beers = json.data.beers;
            beers.forEach(beer => {
                const row = document.createElement('tr');
                row.innerHTML = `
            <td>${beer.name}</td>
            <td>${beer.type}</td>
            <td>
            <button class="btn btn-danger mb-2"  onclick="deleteBeer(${beer.id})">Eliminar</button>
            <button class="btn btn-primary mb-2"  onclick="showBeer(${beer.id})">Ver</button>
            </td>
            `;
                TABLE.appendChild(row);
            })
        })
}

function showBeer(id) {
    fetch(URL_API + id)
        .then(res => res.json())
        .then(data => {
            let beer = data.data
            ID_INPUT.value = beer.id
            NAME_INPUT.value = beer.name;
            TYPE_INPUT.value = beer.type;
            ALCOHOL_INPUT.value = beer.graduacion_alcoholica;
            DESCRIPTION.value = beer.descripcion;
        })
}

function deleteBeer(id) {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(URL_API + id, requestOptions)
        .then(response => response.json())
        .then(result => {
            loadTable()
            MESSAGE.className = 'alert alert-success';
            MESSAGE.innerHTML = result.message;
        }).catch(error => {
            console.log(error);
            MESSAGE.className = 'alert alert-danger';
            MESSAGE.innerHTML = error;
        })
}

function modBeer() {
    let id = ID_INPUT.value
    let name = NAME_INPUT.value;
    let type = TYPE_INPUT.value;
    let graduacion = ALCOHOL_INPUT.value;
    let description = DESCRIPTION.value;
    let beer = JSON.stringify({
        "name": name,
        "type": type,
        "descripcion": description,
        "graduacion_alcoholica": graduacion
    });

    fetch(URL_API + id, request_options('PUT', beer))
        .then(res => res.json())
        .then(json => {
            loadTable();
            MESSAGE.className = 'alert alert-success'
            MESSAGE.innerHTML = json.message
        }).catch(error => {
            MESSAGE.className = 'alert alert-danger'
            MESSAGE.innerHTML = error
        })
}

function addBeer() {
    let name = NAME_INPUT.value;
    let type = TYPE_INPUT.value;
    let graduacion = ALCOHOL_INPUT.value;
    let description = DESCRIPTION.value;
    let beer = JSON.stringify({
        "name": name,
        "type": type,
        "descripcion": description,
        "graduacion_alcoholica": graduacion
    });
    fetch(URL_API, request_options('POST', beer))
        .then(res => res.json())
        .then(json => {
            console.log(json)
            loadTable();
            MESSAGE.className = 'alert alert-success'
            MESSAGE.innerHTML = json.message
        }).catch(error => {
            MESSAGE.className = 'alert alert-danger'
            MESSAGE.innerHTML = error
        })
}


function request_options(type, data) {
    const requestOptions = {
        method: type,
        headers: {
            "Content-Type": "application/json"
        },
        body: data,
        redirect: 'follow'
    };
    return requestOptions;
}

function searchBeer() {
    TABLE.innerHTML = '';
    let forSearch = document.getElementById('search').value;
    fetch(URL_API)
        .then(res => res.json())
        .then(json => {
            let beers = json.data.beers;
            console.log(forSearch)
            beers.forEach(beer => {
                if (beer.name.include(forSearch)) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                <td>${beer.name}</td>
                <td>${beer.type}</td>
                <td>
                <button class="btn btn-danger mb-2"  onclick="deleteBeer(${beer.id})">Eliminar</button>
                <button class="btn btn-primary mb-2"  onclick="showBeer(${beer.id})">Ver</button>
                </td>
                `;
                    TABLE.appendChild(row);
                } else {
                    console.log('No hay resultados')
                }
            })
        })
}


loadTable()