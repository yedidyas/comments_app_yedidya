let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let commentModel = require('../models/comment');
let md5 = require('md5');


router.get('/comments', function (req, res, next) {

  commentModel.find((err, comments) => {
    if (err) {
      res.send({ status: 'ERROR', error: err });
      console.log(err);
    }
    else {
      res.send({ status: 'OK', comments: comments });
      console.log(comments);
    }
  });
});

router.post('/comments/add', function (req, res, next) {

  commentModel.create({
    mail: req.body.mail,
    message: req.body.message,
    date: new Date(),
    gravatar: md5(req.body.mail.toLowerCase())
  }, (err, comment) => {
    if (err) {
      console.log(err);
      res.send({ status: 'ERROR', error: err });
    }
    else {
      console.log('comment saved: ' + comment);
      res.send({ status: 'OK', comment: comment});
    }
  });
});

router.post('/comments/getNewest', function (req, res, next) {
  let mail = req.body.mail;
  let sort = { "date": -1 };
  let filter = { "mail": mail };

  let query = commentModel.find(filter).sort(sort).limit(1);
  query.exec((err, comment) => {
    if (err) {
      res.send({ status: 'ERROR', error: err });
      console.log(err);
    }
    else {
      res.send({ status: 'OK', comment: comment });
      console.log(comment);
    }
  });
});

module.exports = router;
