import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchAllTrendingData,
  fetchTrendingMoviesData,
  fetchTrendingTVShowsData,
} from "../../services/trending.services";
import { MediaBackdropSlider } from "../../components/MediaBackdropSlider/MediaBackdropSlider";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { ErrorMessageOverlay } from "../../components/ErrorMessageOverlay/ErrorMessageOverlay";
import { MediaPosterSlider } from "../../components/MediaPosterSlider/MediaPosterSlider";
import { Link } from "react-router-dom";

export const Trending = () => {
  const trendingAllQuery = useQuery({
    queryKey: ["trending"],
    queryFn: fetchAllTrendingData,
    staleTime: 300000,
    retry: false,
  });

  const trendingMoviesQuery = useQuery({
    queryKey: ["trending-movies"],
    queryFn: fetchTrendingMoviesData,
    staleTime: 300000,
    retry: false,
  });

  const trendingTVShowsQuery = useQuery({
    queryKey: ["trending-tv_shows"],
    queryFn: fetchTrendingTVShowsData,
    staleTime: 300000,
    retry: false,
  });

  return (
    <>
      <section>
        <div className="  min-h-[750px] w-[90%] max-w-[1500px] mx-auto relative">
          {trendingAllQuery?.data?.results && (
            <MediaBackdropSlider results={trendingAllQuery.data.results} />
          )}

          <LoadingOverlay isLoading={trendingAllQuery.isLoading} />

          {trendingAllQuery.error && (
            <ErrorMessageOverlay message={trendingAllQuery.error.message} />
          )}
        </div>
      </section>

      <section className=" mt-10">
        <div className="  min-h-[300px] w-[90%] max-w-[1500px] mx-auto relative space-y-5">
          <Link
            to={"/movies"}
            className=" block w-fit text-3xl text-white font-jost font-bold"
          >
            Trending Movies
          </Link>

          {trendingMoviesQuery?.data?.results && (
            <MediaPosterSlider results={trendingMoviesQuery.data.results} />
          )}

          <LoadingOverlay isLoading={trendingMoviesQuery.isLoading} />

          {trendingMoviesQuery.error && (
            <ErrorMessageOverlay message={trendingMoviesQuery.error.message} />
          )}
        </div>
      </section>

      <section className=" mt-10">
        <div className="  min-h-[300px] w-[90%] max-w-[1500px] mx-auto relative space-y-5">
          <Link
            to={"/tv_shows"}
            className=" block w-fit text-3xl text-white font-jost font-bold"
          >
            Trending TV Shows
          </Link>
          {trendingTVShowsQuery?.data?.results && (
            <MediaPosterSlider results={trendingTVShowsQuery.data.results} />
          )}

          <LoadingOverlay isLoading={trendingTVShowsQuery.isLoading} />

          {trendingTVShowsQuery.error && (
            <ErrorMessageOverlay message={trendingTVShowsQuery.error.message} />
          )}
        </div>
      </section>
    </>
  );
};
