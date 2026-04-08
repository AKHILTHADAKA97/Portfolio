import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));

const LazyLoadingHome = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Home />
  </Suspense>
);

export default LazyLoadingHome;
