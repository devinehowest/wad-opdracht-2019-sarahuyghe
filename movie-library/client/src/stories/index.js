import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Watchlist from "./../components/Watchlist.jsx";

import { MovieWatchlist } from "./../components/MovieWatchlist.jsx";

import watchlistItem from "./../components/MovieWatchList.module.css";

// const movies = {
//   a: new
// }

storiesOf("watchlist", module).add("list", () => <Watchlist />);
