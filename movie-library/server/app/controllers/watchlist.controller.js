const Watchlist = require('../models/watchlist.model.js');

exports.create = (req, res) => {
  // if (!req.body.title) {
  //   return res.status(500).send({err: 'title can not be empty'});
  // }

  const movie = new Watchlist({
    title: req.body.title,
    authorId: req.body.authorId
  });

  movie
    .save()
    .then(movie => res.send(movie))
    .catch(err => {
      res.status(500).send({error: err.book || 'Error'});
    });
};
