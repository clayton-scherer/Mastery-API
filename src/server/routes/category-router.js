const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category-controller");

/* Create Category. */
router.post("/", categoryController.addCategory);

// Read All Categories
router.get("/", categoryController.getCategories);

// Read One Category
router.get("/:id", categoryController.getCategory);

// Update Category
router.put("/:id", categoryController.updateCategory);

// Delete Category
router.delete("/:id", categoryController.deleteCategory);

// Add Movies
router.put("/:id/addMovies", categoryController.addMovies);

module.exports = router;
