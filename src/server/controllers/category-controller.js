const Category = require("../models/Category");

class categoryController {
  // Create Category
  static async addCategory(req, res) {
    const name = req.body.name;

    Category.create({
      name: name
    });

    res.send(await Category.find());
  }

  // Read All Categories

  static async getCategories(req, res) {
    res.send(await Category.find());
  }

  // Read One Category

  static async getCategory(req, res) {
    const id = req.params.id;

    res.send(await Category.findOne({ _id: id }).populate("movies"));
  }

  // Update Category

  static async updateCategory(req, res) {
    const id = req.params.id;
    const updates = req.body;

    let changes = {};
    let updateKey = {};

    for (updateKey of Object.keys(updates)) {
      changes[updateKey] = updates[updateKey];
    }

    res.send(
      await Category.findByIdAndUpdate(
        { _id: id },
        { $set: changes },
        { new: true }
      )
    );
  }

  // Delete Category

  static async deleteCategory(req, res) {
    const id = req.params.id;

    res.send(await Category.remove({ _id: id }));
  }

  // Add Movies

  static async addMovies(req, res) {
    const id = req.params.id;
    const moviesToAdd = req.body;

    const categoryToAdd = await Category.findById({ _id: id });
    moviesToAdd.forEach(movie => {
      categoryToAdd.movies.push(movie);
    });
    categoryToAdd.save(categoryToAdd);

    res.send(await categoryToAdd);
  }
}

module.exports = categoryController;
