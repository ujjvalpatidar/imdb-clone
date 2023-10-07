import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./Components/NoPage";
import Home from './Components/Home';
import Header from './Components/Header';
import MovieList from './Components/MovieList';
import SingleMoviePage from "./Components/SingleMoviePage";

function App() {
  return (
    <Router>
    <Header />
      <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<SingleMoviePage />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<NoPage/>}></Route>
      </Routes>
  </Router>
  );
}

export default App;
