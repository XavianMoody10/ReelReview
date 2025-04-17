import { delay, http, HttpResponse } from "msw";
import allTrendingMockdata from "./mockdata/allTrending.mockdata.js";
import trendingMoviesMockdata from "./mockdata/trendingMovies.mockdata.js";
import trendingTVShowsMockdata from "./mockdata/trendingTVShows.mockdata.js";
import nowPlayingMoviesMockdata from "./mockdata/nowPlayingMovies.mockdata.js";
import popularMoviesMockdata from "./mockdata/popularMovies.mockdata.js";
import topRatedMoviesMockdata from "./mockdata/topRatedMovies.mockdata.js";
import upcomingMoviesMockdata from "./mockdata/upcomingMovies.mockdata.js";

export const handlers = [
  http.get("https://api.themoviedb.org/3/trending/all/week", async () => {
    await delay(3000);
    return HttpResponse.json(allTrendingMockdata);
    // return HttpResponse.text("Failed getting all trending", { status: 400 });
    // return HttpResponse.error();
  }),

  http.get("https://api.themoviedb.org/3/trending/movie/week", async () => {
    await delay(3000);
    return HttpResponse.json(trendingMoviesMockdata);
    // return HttpResponse.text("Failed getting trending movies", { status: 400 });
    // return HttpResponse.error();
  }),

  http.get("https://api.themoviedb.org/3/trending/tv/week", async () => {
    await delay(3000);
    return HttpResponse.json(trendingTVShowsMockdata);
    // return HttpResponse.text("Failed getting trending tv shows", { status: 400 });
    // return HttpResponse.error();
  }),

  http.get(
    "https://api.themoviedb.org/3/movie/now_playing",
    async ({ request }) => {
      const url = new URL(request.url);

      const page = url.searchParams.get("page");

      const results = nowPlayingMoviesMockdata.find((m) => m.page == page);

      await delay(3000);

      return HttpResponse.json(results);
      // return HttpResponse.text("Failed getting now playing movies", { status: 400 });
      // return HttpResponse.error();
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/movie/popular",
    async ({ request }) => {
      const url = new URL(request.url);

      const page = url.searchParams.get("page");

      const results = popularMoviesMockdata.find((m) => m.page == page);

      await delay(3000);

      return HttpResponse.json(results);
      // return HttpResponse.text("Failed getting now playing movies", { status: 400 });
      // return HttpResponse.error();
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/movie/top_rated",
    async ({ request }) => {
      const url = new URL(request.url);

      const page = url.searchParams.get("page");

      const results = topRatedMoviesMockdata.find((m) => m.page == page);

      await delay(3000);

      return HttpResponse.json(results);
      // return HttpResponse.text("Failed getting now playing movies", { status: 400 });
      // return HttpResponse.error();
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/movie/upcoming",
    async ({ request }) => {
      const url = new URL(request.url);

      const page = url.searchParams.get("page");

      const results = upcomingMoviesMockdata.find((m) => m.page == page);

      await delay(3000);

      return HttpResponse.json(results);
      // return HttpResponse.text("Failed getting now playing movies", { status: 400 });
      // return HttpResponse.error();
    }
  ),
];
