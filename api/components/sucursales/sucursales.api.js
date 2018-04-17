//si requiere al archivo model, los nombres del esquema deben coincidir
const userModel = require('./sucursales.model');

module.exports.registrar  = function (req, res){

    let newUser = new  userModel({
        numero : req.body.numero,
        nombre : req.body.nombre,
        tel: req.body.tel,
        activo: req.body.activo,

    });

    newUser.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar la sucursal, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'La sucursal se registró con éxito'});
        }

    });


};

module.exports.listar_sucursales = function(req, res){
    userModel.find().then(
        function(sucursales){
            res.send(sucursales);
        });
};

module.exports.buscar_sucursal_por_id = function(req, res){
    userModel.findOne({'numero' : req.body.numero}).then(
        function(sucursal){
            res.send(sucursal);
        });
};

module.exports.actualizar_sucursal = function(req, res){
    userModel.findOneAndUpdate({'numero' : req.body.numero}, {$set: req.body}).then(
        function(error){
            if(error){
                res.json({ success: false, msg: 'No se ha actualizado la sucursal debido al siguiente error: ' + handleError(error) });
            }else{
                res.json({ success: true, msg: 'La sucursal ha sido modificada con éxito'});
            }
        });
};



