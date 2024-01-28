module.exports = function (app) {
    const PORT = 3000;
    const TABLE = 'cervezas'
    const KNEX = require('./db_connection');

    //GETs

    //Todas las cervezas
    app.get('/api/beers', async (req, res) => {
        try {
            let response = await KNEX.select().from(TABLE);
            res.json({
                success: true,
                message: 'Cervezas encontradas',
                data: response
            });
        } catch (error) {
            res.json({
                success: false,
                message: error
            })
        }
    });

    //Cervezas que contengan el tipo indicado
    app.get('/api/beers/:type/filter', async (req, res) => {
        let type = req.params.type ?? '';
        try {
            let response = await KNEX.select()
                .from(TABLE)
                .where('type', 'like', `%${type}%`);
            res.json({
                success: true,
                message: 'Cervezas encontradas',
                data: response
            });
        } catch (error) {
            res.json({
                success: false,
                message: error
            })
        }
    });
    //Cerveza con el ID indicado
    app.get('/api/beers/:id', async (req, res) => {
        let id = req.params.id;
        try {
            let response = await KNEX.select()
                .from(TABLE)
                .where('id', id);
            if (response.length == 0) {
                res.json({
                    success: false,
                    error_code: 4321,
                    message: 'No se ha encontrado ninguna cerveza con id: ' + id
                })
            } else {
                res.json({
                    success: true,
                    message: 'Cerveza encontrada con id: ' + id,
                    data: response
                });
            }
        } catch (error) {
            res.json({
                success: false,
                message: error
            })
        }
    });

    //POSTs
    app.post('/api/beers', async (req, res) => {
        let newBeer = req.body;
        if (newBeer.name && newBeer.type && newBeer.description && newBeer.alcohol) {
            let exist = await KNEX(TABLE).where('name', newBeer.name);
            if (exist.length > 0) {
                res.status(422).json({
                    success: false,
                    error_code: 5555,
                    message: 'Ya existe una cerveza con el nombre ' + newBeer.name,
                    data: exist
                })
            } else {
                let allBeers = await KNEX.select().from(TABLE)
                const newId = allBeers.length + 1;
                newBeer.id = newId;
                await KNEX('cervezas').insert({
                    id: newId,
                    name: newBeer.name,
                    type: newBeer.type,
                    description: newBeer.description,
                    alcohol: newBeer.alcohol
                });
                res.status(201).json({
                    success: true,
                    message: 'Cerveza creada correctamente',
                    data: newBeer
                });
            }
        } else {
            res.status(422).json({
                success: false,
                error_code: 5555,
                message: 'Falta el nombre y/o el tipo de cerveza',
                data: newBeer
            });
        }
    });

    //PUT
    app.put('/api/beers/:id', async (req, res) => {
        let id = req.params.id;
        let newData = req.body;
        let rowModify = await KNEX(TABLE).where('id', id).update(newData);
        if (rowModify == 0) {
            res.status(404).json({
                success: false,
                error_code: 4322,
                message: 'No se ha encontrado ninguna cerveza con id: ' + id
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Cerveza actualizada correctamente',
                data: 'Filas alteradas ' + rowModify
            });
        }
    })
    //DELETE
    app.delete('/api/beers/:id', async (req, res) => {
        let id = req.params.id;
        let rowModify = await KNEX(TABLE).where('id', id).del();
        if (rowModify == 0) {
            res.status(404).json({
                success: false,
                error_code: 4323,
                message: 'No se ha encontrado ninguna cerveza con id: ' + exist
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Cerveza eliminada correctamente',
                data: 'Filas alteradas ' + rowModify
            })
        }
    })
    //LISTEN
    app.listen(PORT, () => {
        console.log('El servidor está escuchando en el puerto ' + PORT);
    });
}
