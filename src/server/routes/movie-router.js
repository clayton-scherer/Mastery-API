const express = require("express");
const router = express.Router();

/* Create Movie. */
router.post("/", movieController.addMovie);

// Read All Movies
router.get("/", movieController.getMovies);

// Read One Movie
router.get("/:id", movieController.getMovie);

// Update Movie
router.put("/:id", movieController.updateMovie);

// Delete Movie
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
