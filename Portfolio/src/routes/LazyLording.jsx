import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));

<Suspense fallback={<div>Loading...</div>}>
< Home />
</Suspense>