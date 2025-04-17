import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByList } from "../../services/movies.services";
import { MediaPoster } from "../../components/MediaPoster/MediaPoster";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { ErrorMessageOverlay } from "../../components/ErrorMessageOverlay/ErrorMessageOverlay";
import { MediaPagination } from "../../components/MediaPagination/MediaPagination";
import { MediaListSelect } from "../../components/MediaListSelect/MediaListSelect";

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const list = searchParams.get("list") || "now_playing";
  const page = searchParams.get("page") || 1;
  const optionsList = [
    { option: "Now Playing", value: "now_playing" },
    { option: "Popular", value: "popular" },
    { option: "Top Rated", value: "top_rated" },
    { option: "Upcoming", value: "upcoming" },
  ];

  const moviesQuery = useQuery({
    queryKey: ["movies", list, page],
    queryFn: () => fetchMoviesByList(list, page),
    staleTime: 300000,
    retry: false,
  });

  const posters = moviesQuery.data?.results.map((s) => {
    return (
      <MediaPoster
        key={s.id}
        id={s.id}
        poster_path={s.poster_path}
        title={s.title || s.name || s.original_name}
      />
    );
  });

  return (
    <section className=" pt-10">
      <div className=" w-[90%] max-w-[1500px] min-h-[750px] mx-auto relative flex flex-col items-center gap-5 pb-5">
        <div className=" w-full">
          <MediaListSelect
            optionsList={optionsList}
            name={"list"}
            defaultValue={list}
            onChange={(e) => setSearchParams({ list: e.target.value, page: 1 })}
          />
        </div>

        <LoadingOverlay isLoading={moviesQuery.isLoading} zIndex={20} />

        {moviesQuery.error && (
          <ErrorMessageOverlay message={moviesQuery.error.message} />
        )}

        <div className=" grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posters}
        </div>

        <div className=" mt-8">
          <MediaPagination
            currentPage={page}
            amountOfPages={3}
            onChange={(e, v) => {
              setSearchParams({ list, page: v });
              window.scrollTo(0, 0);
            }}
          />
        </div>
      </div>
    </section>
  );
};
