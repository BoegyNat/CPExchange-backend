const { authJwt } = require("../middleware");
const commentController = require("../controllers/comment.controller");
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
    "/api/get_all_comment_by_idPost/:idPost",
    commentController.getAllCommentByIdPost
  );

  app.post(
    "/api/get_all_comment_by_idPost/",
    [authJwt.verifyToken],
    commentController.getAllCommentByIdPostWithIdUser
  );

  app.post(
    "/api/post_click_like_comment",
    [authJwt.verifyToken],
    commentController.postClickLikeComment
  );

  app.post(
    "/api/post_create_comment",
    [authJwt.verifyToken, upload.array("attachment")],
    commentController.postCreateComment
  );

  app.post(
    "/api/post_edit_comment",
    [authJwt.verifyToken, upload.array("attachment")],
    commentController.postEditComment
  );

  app.post(
    "/api/post_click_verify_comment",
    [authJwt.verifyToken],
    commentController.postClickVerifyComment
  );

  app.delete(
    "/api/delete_comment_by_idComment/:idComment",
    [authJwt.verifyToken],
    commentController.deleteComment
  );
};
