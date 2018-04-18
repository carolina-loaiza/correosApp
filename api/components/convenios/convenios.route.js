const express = require('express');
const router = express.Router();
const convenios = require('./convenios.api');

// route.param('id', function(req, res, next, id){
//     req.body.id = id;
//     next();
// });

router.route('/save_convenio')
    .post(function(req, res){
    convenios.registrar(req, res);
});

router.route('/listar_conv')
    .get(function(req, res){
        convenios.listarConv(req, res);
});


module.exports = router;