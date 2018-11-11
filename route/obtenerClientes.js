const { Clientes } = require('../api/sequelize');

module.exports=(app)=>{
  app.get('/api/get_clientes', (req, res) => {
    Clientes.findAll().then(users => res.json(users))
  });
};

