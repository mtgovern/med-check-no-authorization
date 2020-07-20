const db = require('../models');

// Defining methods for the medicationsController
module.exports = {
  findAll(req, res) {
    if (req.user) {
      db.Medication
        .find(req.query)
        .sort({ medname: 1 })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    } else {
      res.status(401).end();
    }
  },
  findById(req, res) {
    if (req.user) {
      db.Medication
        .findById(req.params.id)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    } else {
      res.status(401).end();
    }
  },
  create(req, res) {
    if (req.user) {
      db.Medication
        .create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    } else {
      res.status(401).end();
    }
  },
  update(req, res) {
    if (req.user) {
      db.Medication
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    } else {
      res.status(401).end();
    }
  },
  remove(req, res) {
    if (req.user) {
      db.Medication
        .findById({ _id: req.params.id })
        .then((dbModel) => dbModel.remove())
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    } else {
      res.status(401).end();
    }
  },
};
