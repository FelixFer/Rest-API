const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getGroups);
router.post("/", controller.createGroups);
router.put("/:id", controller.updateGroups);
router.delete("/:id", controller.deleteGroups);

module.exports = router;
