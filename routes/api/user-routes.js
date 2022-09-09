const router = require("express").Router();

const {
  allUsers,
  getID,
  newUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);
router.route("/:id").get(getID).put(updateUser).delete(deleteUser);
router.route("/").get(allUsers).post(newUser);



module.exports = router;
