import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SeatLayout from "./pages/SeatLayout";
import MyBookkings from "./pages/MyBookkings";
import Favourite from "./pages/Favourite";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/bookingsmy-" element={<MyBookkings />} />
        <Route path="Favourites" element={<Favourite />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
