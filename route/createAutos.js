const { Autos } = require('../api/sequelize');

module.exports=(app)=>{
  app.post('/api/create_auto', (req, res) => {
    Autos.create(req.body)
      .then(user => res.json(user))
  });
};

