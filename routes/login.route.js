const express = require('express');
const jwt = require('jsonwebtoken');
const { jwtSecret, backendUsers } = require('../config');

const loginRouter = express.Router();
loginRouter.post('', (req, res) => {
  if (!req.body.username || !backendUsers.has(req.body.username)) {
    res.status(401).send({ errorMessage: 'Unknown username / password' });
  } else if (!req.body.password || backendUsers.get(req.body.username) !== req.body.password) {
    res.status(401).send({ errorMessage: 'Unknown username / password' });
  } else {
    const data = {
      name: req.body.username,
    };
    const expiration = '6h';

    const token = jwt.sign({ data, }, jwtSecret, { expiresIn: expiration, algorithm: 'HS256' });
    res.status(200).json({ username: req.body.username, token });
  }
});

exports.loginRouter = loginRouter;
