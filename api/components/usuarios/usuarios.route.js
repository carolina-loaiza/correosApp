
const express = require('express'),
      router = express.Router(),
      users = require('./usuarios.api');

router.param('id', function(req, res, next, id) {
  req.body.id = id;
  next();
});

router.route('/user_by_email')
  .post(function(req, res){
    users.findByEmail(req, res);
});

router.route('/save_user')
  .post(function(req, res){
    users.registrar(req, res);
});

router.route('/get_all_users')
  .get(function(req, res) {
    users.listarTodos(req, res);
});

router.route('/update_users')
  .put(function(req, res){
    users.actualizar(req, res);
});

module.exports = router;