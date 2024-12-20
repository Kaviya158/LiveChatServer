const {register, setAvatar} = require("../controllers/usersController");
const {login} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register",register);
router.post("/login",login);
router.post("/setAvatar/:id",setAvatar)

module.exports = router;