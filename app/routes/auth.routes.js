const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/signup", controller.signup);

  app.post("/api/auth/check_username", controller.checkUserName);

  app.post("/api/auth/edit_profile", controller.editProfile);
};
