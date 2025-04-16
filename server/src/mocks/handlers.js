import { delay, http, HttpResponse } from "msw";
import allTrendingMockdata from "./mockdata/allTrending.mockdata.js";
import trendingMoviesMockdata from "./mockdata/trendingMovies.mockdata.js";
import trendingTVShowsMockdata from "./mockdata/trendingTVShows.mockdata.js";

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
];
