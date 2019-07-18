const express = require("express");
const router = express.Router();

/* Create Actor. */
router.post("/", actorController.addActor);

// Read All Actors
router.get("/", actorController.getActors);

// Read One Actor
router.get("/:id", actorController.getActor);

// Update Actor
router.put("/:id", actorController.updateActor);

// Delete Actor
router.delete("/:id", actorController.deleteActor);

module.exports = router;
