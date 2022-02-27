import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body/Body";
import SearchResults from "./Components/Body/SearchResults/SearchResults";
import Categories from "./Components/Body/VideoList/Categories";
import VideoList from "./Components/Body/VideoList/VideoList";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import { movieListAction } from "./State/action/action";
import HeaderResults from "./Components/header/HeaderResults/HeaderResults"
import Login from "./Components/Login/Login";
function App() {
  // const movies = useSelector((selector) => selector.movie);
  // const genres = useSelector((selector) => selector.genre);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/series" element={<HeaderResults />} />
          <Route path="/films" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
