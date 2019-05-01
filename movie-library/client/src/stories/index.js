import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Watchlist from "../components/watchlist/Watchlist.jsx/index.js";

import { MovieWatchlist } from "../components/watchlist/MovieWatchlist.jsx/index.js";

import watchlistItem from "./../components/MovieWatchList.module.css";

// const movies = {
//   a: new
// }

storiesOf("watchlist", module).add("list", () => <Watchlist />);
