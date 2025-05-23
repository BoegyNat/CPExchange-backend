const { authJwt } = require("../middleware");
const replyController = require("../controllers/reply.controller");
const multer = require("multer");
const upload = multer();
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/get_all_reply_by_idComment/:idComment",
    replyController.getAllReplyByIdComment
  );

  app.post(
    "/api/get_all_reply_by_idComment/",
    [authJwt.verifyToken],
    replyController.getAllReplyByIdCommentWithIdUser
  );

  app.post(
    "/api/post_click_like_reply",
    [authJwt.verifyToken],
    replyController.postClickLikeReply
  );

  app.post(
    "/api/post_create_reply",
    [authJwt.verifyToken, upload.array("attachment")],
    replyController.postCreateReply
  );

  app.post(
    "/api/post_edit_reply",
    [authJwt.verifyToken, upload.array("attachment")],
    replyController.postEditReply
  );

  app.delete(
    "/api/delete_reply_by_idReply/:idReply",
    [authJwt.verifyToken],
    replyController.deleteReplyByIdReply
  );

  //   app.post(
  //     "/api/post_click_verify_reply",
  //     [authJwt.verifyToken],
  //     replyController.postClickVerifyReply
  //   );
};
