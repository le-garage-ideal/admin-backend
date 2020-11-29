const express = require('express');
const { Model, selectModels } = require('../mongodb/process-collections');

const modelsRouter = express.Router();

modelsRouter.get('', (_req, res) => {
  selectModels({}, doc => doc).then(result => res.json(result));
});


modelsRouter.post('', (req, res) => {
  if (req.body._id || !req.body.name) {
    res.status(400).send('Bad parameters');
  } else {
    selectModels({name: req.body.name}, doc => doc).then(result => {
      if (result.length > 0) {
        res.status(400).send(`Model ${req.body.name} already exists`);
      } else {
        const model = new Model();
        model.name = req.body.name;
        model.save().then(result => res.json(result));
      }
    });
  }
});

modelsRouter.put('', (req, res) => {
  if (!req.body._id || !req.body.name) {
    res.status(400).send('Bad parameters');
  } else {
    selectModels({_id: req.body._id}, doc => doc).then(result => {
      if (result.length === 0) {
        res.status(400).send(`Model ${req.body.name} doest not exist`);
      } else {
        result[0].name = req.body.name;
        result[0].save().then(result => res.json(result));
      }
    });
  }
});

modelsRouter.delete('', (req, res) => {
  if (!req.params._id) {
    res.status(400).send('Bad parameters');
  } else {
    Model.deleteOne({_id: req.params._id}).then(() => res.sendStatus(200));
  }
});

exports.modelsRouter = modelsRouter;
