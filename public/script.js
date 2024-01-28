const URL_API = 'http://localhost:3000/api/beers/';
const TABLE = document.querySelector('tbody');
const ID_INPUT = document.getElementById('id');
const NAME_INPUT = document.getElementById('name');
const TYPE_INPUT = document.getElementById('type');
const ALCOHOL_INPUT = document.getElementById('graduacion');
const DESCRIPTION = document.getElementById('description');
const FORM = document.querySelector('form');
const SEARCH_INPUT = document.getElementById('search');

const MESSAGE = document.getElementById('message');
function loadTable() {
    fetch(URL_API)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            let beers = json.data;
            createTable(beers);
        })
}

function createTable(beers) {
    TABLE.innerHTML = '';
    beers.forEach(beer => {
        const row = document.createElement('tr');
        row.className = 'beer_row';
        row.innerHTML = `
    <td name="beer_data">${beer.name}</td>
    <td>${beer.type}</td>
    <td>
    <button class="btn btn-danger mb-2"  onclick="deleteBeer(${beer.id})">Eliminar</button>
    <button class="btn btn-primary mb-2"  onclick="showBeer(${beer.id})">Ver datos</button>
    </td>
    `;
        TABLE.appendChild(row);
    })
    SEARCH_INPUT.addEventListener('keyup', searchBeer);
}

function showBeer(id) {
    fetch(URL_API + id)
        .then(res => res.json())
        .then(data => {
            let beer = data.data[0]
            ID_INPUT.value = beer.id
            NAME_INPUT.value = beer.name;
            TYPE_INPUT.value = beer.type;
            ALCOHOL_INPUT.value = beer.alcohol;
            DESCRIPTION.value = beer.description;
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
            if (result.success == false) {
                MESSAGE.className = 'alert alert-danger'
                MESSAGE.innerHTML = result.message
            } else {
                MESSAGE.className = 'alert alert-success';
                MESSAGE.innerHTML = result.message;
                loadTable()
            }
        }).catch(error => {
            MESSAGE.className = 'alert alert-danger';
            MESSAGE.innerHTML = error;
        })
}

function modBeer() {
    let beer = JSON.stringify({
        "name": NAME_INPUT.value,
        "type": TYPE_INPUT.value,
        "description": DESCRIPTION.value,
        "alcohol": ALCOHOL_INPUT.value
    });
    fetch(URL_API + ID_INPUT.value, request_options('PUT', beer))
        .then(res => res.json())
        .then(json => {
            if (json.success == false) {
                MESSAGE.className = 'alert alert-danger'
                MESSAGE.innerHTML = json.message
            } else {
                loadTable();
                MESSAGE.className = 'alert alert-success'
                MESSAGE.innerHTML = json.message
            }
        }).catch(error => {
            MESSAGE.className = 'alert alert-danger'
            MESSAGE.innerHTML = error
        })
}

function addBeer() {
    let beer = JSON.stringify({
        "name": NAME_INPUT.value,
        "type": TYPE_INPUT.value,
        "description": DESCRIPTION.value,
        "alcohol": ALCOHOL_INPUT.value
    });
    fetch(URL_API, request_options('POST', beer))
        .then(res => res.json())
        .then(json => {
            if (json.success == false) {
                MESSAGE.className = 'alert alert-danger'
                MESSAGE.innerHTML = json.message
            } else {
                loadTable();
                MESSAGE.className = 'alert alert-success'
                MESSAGE.innerHTML = json.message
            }
        }).catch(error => {
            MESSAGE.className = 'alert alert-danger'
            MESSAGE.innerHTML = error;
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
    let type = SEARCH_INPUT.value;
    fetch(URL_API + type + '/filter')
        .then(res => res.json())
        .then(json => {
            createTable(json.data)
        })
        .catch(error => console.error('error', error));
}

loadTable()