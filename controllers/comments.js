const Comments = require("../models/Comments");

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comments.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
        user: req.user.id
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  }
};