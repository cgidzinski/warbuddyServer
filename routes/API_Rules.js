var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var API = require('../models/Rules_Schemas.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  API.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});


/* POST /todos */
router.post('/', function(req, res, next) {
  API.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  API.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  API.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
