const connection = require('../database/connection');
module.exports = {
    async create(req, res){
        const {name, url} = req.body;
        const car = await connection('cars').insert({
            name,
            url
        });
        return res.json(car);
    },
    async index(req, res){
        const car = await connection('cars').select('*');
        return res.json(car);
    }
}
