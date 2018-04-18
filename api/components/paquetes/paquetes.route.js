
const express = require('express'),
      router = express.Router(),
      paquetes = require('./paquetes.api');

router.param('id', function(req, res, next, id) {
  req.body.id = id;
  next();
});

router.route('/user_by_email')
  .post(function(req, res){
    paquetes.findByEmail(req, res);
});

router.route('/save_paquete')
  .post(function(req, res){
    paquetes.registrar(req, res);
});

router.route('/update_paquete')
  .put(function(req, res){
    paquetes.actualizar(req, res);
});

module.exports = router;