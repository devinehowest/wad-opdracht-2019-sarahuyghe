import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Watchlist from "../components/Watchlist.jsx";

import MovieWatchlist from "./../components/MovieWatchlist.jsx";
import MovieWatchList from "./../models/MovieWatchList";

import watchlistItem from "./../components/MovieWatchList.module.css";

const movie = new MovieWatchList(
	`Hellboy`,
	`537915`,
	`https://image.tmdb.org/t/p/w500//bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg`
);

storiesOf("watchlist", module).add("list", () => (
	<MovieWatchlist movie={movie} />
));
