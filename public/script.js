const URL_API = 'http://localhost:3000/api/beers/';
const TABLE = document.querySelector('tbody');
const ID_INPUT = document.getElementById('id');
const NAME_INPUT = document.getElementById('name');
const TYPE_INPUT = document.getElementById('type');
const ALCOHOL_INPUT = document.getElementById('graduacion');
const DESCRIPTION = document.getElementById('description');
const FORM = document.querySelector('form');

const MESSAGE = document.getElementById('message');
loadTable()
function loadTable() {
    TABLE.innerHTML = '';
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
            MESSAGE.className = 'success';
            MESSAGE.innerHTML = result.message;
        }).catch(error => {
            console.log(error);
            MESSAGE.className = 'error';
            MESSAGE.innerHTML = error;
        })
}

function modBeer() {
    FORM.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    let id = ID_INPUT.value
    var formdata = new FormData();
    formdata.append('id', id);
    formdata.append('name', NAME_INPUT.value)
    formdata.append('type', TYPE_INPUT.value)
    formdata.append('graduacion_alcoholica', ALCOHOL_INPUT.value)
    formdata.append('descripcion', DESCRIPTION.value);
    var requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
    };
    fetch(URL_API + id, requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            loadTable();
        }).catch(error => {
            console.log(error)
        })
}

function addBeer() {
    FORM.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    var formdata = new FormData();
    formdata.append('name', NAME_INPUT.value)
    formdata.append('type', TYPE_INPUT.value)
    formdata.append('graduacion_alcoholica', ALCOHOL_INPUT.value)
    formdata.append('descripcion', DESCRIPTION.value);
    console.log(formdata)
    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    fetch(URL_API, requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            loadTable();
        }).catch(error => {
            MESSAGE.className = 'error'
            MESSAGE.innerHTML = error
        })
}

