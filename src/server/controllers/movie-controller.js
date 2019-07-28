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

  static async getMovies(req, res) {
    res.send(await Movie.find());
  }

  // Read One Movie

  static async getMovie(req, res) {
    const id = req.params.id;

    res.send(await Movie.findOne({ _id: id }).populate("movies"));
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

  // Add Actors

  static async addActors(req, res) {
    const id = req.params.id;
    const actorsToAdd = req.body;

    const movieToAdd = await Movie.findById({ _id: id });
    actorsToAdd.forEach(actor => {
      movieToAdd.cast.push(actor);
    });
    movieToAdd.save(movieToAdd);

    res.send(await movieToAdd);
  }
}

module.exports = movieController;
