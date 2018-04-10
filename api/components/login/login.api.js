const LoginModel = require('./login.model');

module.exports.registrar = function(req, res) {
  let newLogin = new LoginModel({
    pass: req.body.pass,
    email: req.body.email,
    temp: req.body.temp
  });

  newLogin.save(function(error) {
    if (error) {
      res.json({ success: false, msg: 'Ha ocurrido un error en el registro de usuarios' + error });
    } else {
      res.json({ success: true, msg: 'Se registró el usuario correctamente' });
    }
  })
};

module.exports.find = function(req, res) {
  LoginModel.findOne({ 'pass': req.body.pass, 'email': req.body.email }, function(err, user) {
    if (err) {
      res.json({ success: false, msg: 'No se ha encontrado.' + handleError(err) });
    } else {
      res.json({ success: true, msg: 'Usuario valido' + user });
    }
  });
};

module.exports.actualizar = function(req, res) {
  LoginModel.findByIdAndUpdate(req.body._id, { $set: req.body }, function(err, user) {
    if (err) {
      res.json({ success: false, msg: 'No se ha actualizado.' + handleError(err) });
    } else {
      res.json({ success: true, msg: 'Se ha actualizado correctamente.' + res });
    }
  });
};