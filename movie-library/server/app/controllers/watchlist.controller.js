const Watchlist = require('../models/watchlist.model.js');

exports.create = (req, res) => {
  // console.log(req.body);
  // console.log('create1');
  if (!req.body.title) {
    return res.status(500).send({err: 'title can not be empty'});
  }
  // console.log(req.body);
  const movie = new Watchlist({
    title: req.body.title.title,
    movieId: req.body.title.movieId,
    poster: req.body.title.poster
  });
  // console.log(movie);
  movie
    .save()
    .then(movie => res.send(movie))
    .catch(err => {
      res.status(500).send({error: err.movie || 'Error'});
    });
};

exports.findAll = async (req, res) => {
  try {
    const movies = await Watchlist.find();
    res.send(movies);
  } catch (err) {
    res.status(500).send({err: err.movie || 'Error'});
  }
};

exports.delete = async (req, res) => {
  try {
    const movie = await Watchlist.findByIdAndRemove(req.params.movieId);
    if (!movie) {
      return res.status(404).send('No movie found');
    }
    res.send(movie);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(417).send('Geen geldig ID');
    }
    return res.status(500).send(err);
  }
};
