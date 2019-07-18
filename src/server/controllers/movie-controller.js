const Movie = require("../models/Movie");

class movieController {
  // Create Movie
  static async addMovie(req, res) {
    const director = req.body.director;
    const image = req.body.image;
    const rating = req.body.rating;
    const title = req.body.title;

    Movie.create({
      director: director,
      image: image,
      rating: rating,
      title: title
    });

    res.send(await Movie.find());
  }

  // Read All Movies

  static async getMovies(req, res, next) {
    res.send(await Movie.find());
  }

  // Read One Movie

  static async getMovie(req, res) {
    const id = req.params.id;

    res.send(await Movie.findOne({ _id: id }));
  }

  // Update Movie

  static async updateMovie(req, res) {
    const id = req.params.id;
    const updates = req.body;

    let changes = {};
    let updateKey = {};

    for (updateKey of Object.keys(updates)) {
      changes[updateKey] = updates[updateKey];
    }

    res.send(
      await Movie.findByIdAndUpdate(
        { _id: id },
        { $set: changes },
        { new: true }
      )
    );
  }

  // Delete Movie
  static async deleteMovie(req, res) {
    const id = req.params.id;

    res.send(await Movie.remove({ _id: id }));
  }
}

module.exports = movieController;
