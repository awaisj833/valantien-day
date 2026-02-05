import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/website/landingPage";
import Login from "./pages/website/authPages/Login";
import Signup from "./pages/website/authPages/Signup";
import UnauthorizedPage from "./pages/Unauthor";
import NotFoundPage from "./pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      {/* Root route - Home Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Authentication Routes - No Layout (Full Page) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Unauthorized Page */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Catch all route for 404 */}
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
};

export default AppRouter;
