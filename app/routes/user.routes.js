const { authJwt } = require("../middleware");
const userController = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/users/profile/:id",
    [authJwt.verifyToken],
    userController.userProfile
  );
};
