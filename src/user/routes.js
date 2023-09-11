const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.createUsers);
router.put("/:id", controller.updateUsers);
router.delete("/:id", controller.deleteUsers);

module.exports = router;
