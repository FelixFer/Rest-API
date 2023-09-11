const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getTasks);
router.post("/", controller.createTasks);
router.put("/:id", controller.updateTasks);
router.delete("/:id", controller.deleteTasks);

module.exports = router;
