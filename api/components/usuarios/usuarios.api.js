const UserModel = require('./usuarios.model');

module.exports.registrar = function(req, res) {
  let newUser = new UserModel({
    nombre: req.body.nombre,
    correo: req.body.correo,
    telefono: req.body.telefono
  });

  newUser.save(function(error) {
    if (error) {
      res.json({ success: false, msg: 'Ha ocurrido un error en el registro de usuarios' + error });
    } else {
      res.json({ success: true, msg: 'Se registró el usuario correctamente' });
    }
  })
};

module.exports.listarTodos = function(req, res) {
  UserModel.find().then(function(usuarios) {
    res.send(usuarios);
  });
};

module.exports.findByEmail = function(req, res) {
  UserModel.findOne({ 'email': req.body.email }, function(err, user) {
    if (err) {
      res.json({ success: false, msg: 'No se ha encontrado.' + handleError(err) });
    } else {
      res.json({ success: true, msg: 'Usuario valido' + user });
    }
  });
};

module.exports.actualizar = function(req, res) {
  UserModel.findByIdAndUpdate(req.body._id, { $set: req.body }, function(err, user) {
    if (err) {
      res.json({ success: false, msg: 'No se ha actualizado.' + handleError(err) });
    } else {
      res.json({ success: true, msg: 'Se ha actualizado correctamente.' + res });
    }
  });
};