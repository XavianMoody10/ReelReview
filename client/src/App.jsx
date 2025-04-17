import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Trending } from "./pages/Trending/Trending";
import { SideNavigationProvider } from "./contexts/SideNavigationContext";
import { Movies } from "./pages/Movies/Movies";
import { TVShows } from "./pages/TVShows/TVShows";
import { PageTemplate } from "./templates/PageTemplate";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Details } from "./pages/Details/Details";

const queryClient = new QueryClient();

const App = () => {
  // Routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<PageTemplate />}>
          <Route index element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv_shows" element={<TVShows />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SideNavigationProvider>
        <RouterProvider router={router} />
      </SideNavigationProvider>
    </QueryClientProvider>
  );
};

export default App;
