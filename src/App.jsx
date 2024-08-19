import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { AuthProvider } from "./AuthContext/AuthContext";
import MovieDetails from "./components/MovieDetails";
import Movie from "./Movie";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
