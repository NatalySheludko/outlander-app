import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage/ReviewsPage"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage/FeaturesPage"));

export default function App() {
  return (
    <div>
      <Header />
      <div>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<DetailsPage />}>
              <Route path="/catalog/:id/features" element={<FeaturesPage />} />
              <Route path="/catalog/:id/reviews" element={<ReviewsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </Suspense>
      </div>
    </div>
  );
}

