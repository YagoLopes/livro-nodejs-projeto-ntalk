module.exports = function (app) {
  const HomeController = {
    index: function (req, res) {
      res.render("home/index");
    },
    login: function (req, res) {
      const email = req.body.usuario.email,
        nome = req.body.usuario.nome;

      if (email && nome) {
        const usuario = req.body.usuario;
        usuario["contatos"] = [];
        req.session.usuario = usuario;
        res.redirect("/contatos");
      } else {
        res.redirect("/");
      }
    },
    logout: function (req, res) {
      req.session.destroy();
      res.redirect("/");
    }
  };
  return HomeController;
};
