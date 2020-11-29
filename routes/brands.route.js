const express = require('express');
const { selectBrands, Brand } = require('../mongodb/process-collections');

const brandsRouter = express.Router();

brandsRouter.get('', (_req, res) => {
  selectBrands({}, doc => doc).then(result => res.json(result));
});

brandsRouter.post('', (req, res) => {
  if (req.body._id || !req.body.name) {
    res.status(400).send('Bad parameters');
  } else {
    selectBrands({name: req.body.name}, doc => doc).then(result => {
      if (result.length > 0) {
        res.status(400).send(`Brand ${req.body.name} already exists`);
      } else {
        const brand = new Brand();
        brand.name = req.body.name;
        brand.save().then(result => res.json(result));
      }
    });
  }
});

brandsRouter.put('', (req, res) => {
  if (!req.body._id || !req.body.name) {
    res.status(400).send('Bad parameters');
  } else {
    selectBrands({_id: req.body._id}, doc => doc).then(result => {
      if (result.length === 0) {
        res.status(400).send(`Brand ${req.body.name} doest not exist`);
      } else {
        result[0].name = req.body.name;
        result[0].save().then(result => res.json(result));
      }
    });
  }
});

brandsRouter.delete('', (req, res) => {
  if (!req.params._id) {
    res.status(400).send('Bad parameters');
  } else {
    Brand.deleteOne({_id: req.params._id}).then(() => res.sendStatus(200));
  }
});

exports.brandsRouter = brandsRouter;
