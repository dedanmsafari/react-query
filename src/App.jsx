import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation.component";
import HomePage from "./components/Home.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQIndividualHeroPage from "./components/RQIndividualHero.page";
import ParallelQueriesPage from "./components/ParallelQueriesPage";
import PaginatedQueriesPage from "./components/PaginatedQueriesPage";
import InfiniteQueriesPage from "./components/InfiniteQueriesPage";
import DynamicParallelQueriesPage from "./components/DynamicParallelQueriesPage";
import DependentQueriesPage from "./components/DependentQueriesPage";
import ErrorPage from "./error-page";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="reactquery" element={<RQSuperHeroesPage />} />
          <Route
            path="/reactquery/:heroid"
            element={<RQIndividualHeroPage />}
          />
          <Route path="normalhooks" element={<SuperHeroesPage />} />
          <Route path="parallelqueries" element={<ParallelQueriesPage />} />
          <Route path="paginatedqueries" element={<PaginatedQueriesPage />} />
          <Route path="infinitequeries" element={<InfiniteQueriesPage />} />
          <Route
            path="dynamicparallelqueries"
            element={<DynamicParallelQueriesPage heroids={[1, 2]} />}
          />
          <Route
            path="dependentqueries"
            element={<DependentQueriesPage email="dedan@gmail.com" />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
