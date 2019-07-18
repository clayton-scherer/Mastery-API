const Actor = require("../models/Actor");

class actorController {
  // Create Actor
  static async addActor(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const movies = req.body.movies;
    const image = req.body.image;

    Actor.create({
      firstName: firstName,
      lastName: lastName,
      movies: movies,
      image: image
    });

    res.send(await Actor.find());
  }

  // Read All Actors

  static async getActors(req, res, next) {
    res.send(await Actor.find());
  }

  // Read One Actor

  static async getActor(req, res) {
    const id = req.params.id;

    res.send(await Actor.findOne({ _id: id }));
  }

  // Update Actor

  static async updateActor(req, res) {
    const id = req.params.id;
    const updates = req.body;

    let changes = {};
    let updateKey = {};

    for (updateKey of Object.keys(updates)) {
      changes[updateKey] = updates[updateKey];
    }

    res.send(
      await Actor.findByIdAndUpdate(
        { _id: id },
        { $set: changes },
        { new: true }
      )
    );
  }

  // Delete Actor
  static async deleteActor(req, res) {
    const id = req.params.id;

    res.send(await Actor.remove({ _id: id }));
  }
}

module.exports = actorController;
