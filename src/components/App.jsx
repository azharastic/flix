import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile/Profile";
import MovieInformation from "./MovieInformation/MovieInformation";
import Movies from "./Movies/Movies";
import Actors from "./Actors/Actors";
import NavBar from "./NavBar/NavBar";
import useStyles from "./styles";
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <Routes className={classes.toolbar}>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
