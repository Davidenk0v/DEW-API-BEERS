const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
app.use(express.static('public'))
    .use(morgan('dev'))
    .use(cors())
    .use(express.json());
const BEERS = require('./beers.json')
//PORT NUM
const PORT = 3000;

//GET
app.get('/', (req, res) => {
    res.send('Hola mundo');
});
app.get('/api/beers', (req, res) => {
    let general_data = BEERS.map(beer => {
        return {
            id: beer.id,
            name: beer.name,
            type: beer.type
        }
    })
    res.json({
        success: true,
        message: 'Listado de Cervezas',
        data: {
            count: general_data.length,
            beers: general_data
        }
    });
});
app.get('/api/beers/:id', (req, res) => {
    let id = req.params.id;
    let filter = BEERS.filter(beer => beer.id == id);
    if (filter.length > 0) {
        res.json({
            success: true,
            message: 'Cliente encontrado con id: ' + id,
            data: filter[0]
        })
    } else {
        res.status(404).json({
            success: false,
            error_code: 4321,
            message: 'No se ha encontrado ninguna cerveza con id: ' + id
        })
    }
});

//POST
app.post('/api/beers', (req, res) => {
    let newBeer = req.body;
    if (newBeer.name && newBeer.type) {
        const BEERS = require('./beers.json');
        const newId = BEERS.length;
        newBeer.id = ++newId;
        BEERS.push(newBeer);
        res.status(201).json(newBeer);
    } else {
        res.status(400).json({
            success: false,
            message: 'Falta el nombre y/o el tipo de cerveza',
            data: newBeer
        })
    }
});
//PUT
app.put('/api/beers/:id', (req, res) => {
    let id = req.params.id;
    let filter = BEERS.filter(cliente => cliente.id == id);
    if (filter.length == 0) {
        res.status(404).json({
            success: false,
            error_code: 4322,
            message: 'No se ha encontrado ninguna cerveza con id: ' + id
        })
    } else {
        let newData = req.body;
        let oldData = filter[0];
        MergeRecursive(oldData, newData);
        res.status(200).json({
            success: true,
            message: 'Cerveza actualizada correctamente',
            data: newData
        });
    }
})
//DELETE
app.delete('/api/beers/:id', (req, res) => {
    let id = req.params.id;
    let index = BEERS.findIndex((cliente) => cliente.id == id);
    if (index == -1) {
        res.status(404).json({
            success: false,
            error_code: 4323,
            message: 'No se ha encontrado ninguna cerveza con id: ' + id
        })
    } else {
        BEERS.splice(index, 1);
        res.status(200).json({
            success: true,
            message: 'Cerveza eliminada correctamente',
            data: BEERS
        })
    }
})
//LISTEN
app.listen(PORT, () => {
    console.log('El servidor está escuchando en el puerto ' + PORT);
})

//FUNCTIONS
// Modificación para sobreescribir los objetos
function MergeRecursive(obj1, obj2) {
    for (var p in obj2) {
        try {
            if (obj2[p].constructor === Object) {
                obj1[p] = MergeRecursive(obj1[p], obj2[p]);
            } else {
                obj1[p] = obj2[p];
            }
        } catch (e) {
            obj1[p] = obj2[p];
        }
    }
    return obj1;
}