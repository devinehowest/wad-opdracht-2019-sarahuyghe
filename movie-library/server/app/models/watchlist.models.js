const mongoose = require('mongoose');

const WatchlistSchema = mongoose.Schema(
  {
    title: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Watchlist', WatchlistSchema);
