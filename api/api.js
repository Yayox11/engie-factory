
const express = require('express');
const router = express.Router();
const sequelize = require('./sequelize');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const autos = sequelize.import('autos', require('../models/autos'));
const clientes = sequelize.import('clientes',require('../models/clientes'));

router.get('/', function (req, res) {
  res.send('Hello Dev!');
});

//Obtener Clientes

router.get('/clientes',function (req,res,next) {
  clientes.findAll().then(clientes => {
    res.status(200).json(clientes)
    console.log(clientes);
  })
    .catch(function (err) {
      console.log("ups algo ha salido mal :C");
      return next(err);
    });
});

//Crear Cliente

router.post('/crear_cliente',function (req,res,next) {
  clientes.build(
    {
      nombre: req.body.nombre,
      rut: req.body.rut,
      auto_id: req.body.auto_id
    }
  ).save()
    .then(auto => {
      res.status(200).json(auto)
    })
    .catch(function (err) {
      console.log("ups algo ha salido mal :C");
      return next(err);
    });
});

//Borrar Cliente

router.delete('/d_cliente/:id',function (req,res,next) {
  id_url = req.params.id;
  clientes.destroy({
      where:{
        id_cliente: id_url
      }
    }
  ).catch(function (err) {
    console.log("ups algo ha salido mal :C");
    return next(err);
  });
});


//Crear Autos

router.post('/crear_autos',function (req,res,next) {
  autos.build(
    {
      marca: req.body.marca,
      modelo: req.body.modelo,
      anio: req.body.anio
    }
  ).save()
    .then(auto => {
    res.status(200).json(auto)
  })
    .catch(function (err) {
      console.log("ups algo ha salido mal :C");
      return next(err);
    });
});

//Obtener Autos

router.get('/autos',function (req,res,next) {
  autos.findAll().then(autos => {
    res.status(200).json(autos)
  })
    .catch(function (err) {
      console.log("ups algo ha salido mal :C");
      return next(err);
    });
});

router.get('/autos_form/:marca/:modelo',function (req,res,next) {
  marca_url = req.params.marca;
  modelo_url = req.params.modelo;
  autos.findAll({
    attributes: ['id_auto'],
    where: {
      marca: marca_url,
      modelo: modelo_url
    }
  }).then(id_auto => {
    res.status(200).json(id_auto[0]);
  })
    .catch(function (err) {
      console.log("ups algo ha salido mal :C");
      return next(err);
    });
});

//Borrar Autos

router.delete('/d_autos/:id',function (req,res,next) {
  id_url = req.params.id;
  console.log("se ha activado el delete");
  autos.destroy({
      where:{
        id_auto: id_url
      }
  }
  ).catch(function (err) {
      console.log("ups algo ha salido mal :C");
      return next(err);
    });
});

// Filtro de clientes segun auto

router.get('/cliente_filter/:id',function (req,res,next) {
  id_url = req.params.id;
  clientes.findAll({
    where: {
      auto_id: id_url
    }
  }).then(id_auto => {
    res.status(200).json(id_auto[0]);
  })
    .catch(function (err) {
      console.log("ups algo ha salido mal :C");
      return next(err);
    });
});



module.exports = router;
