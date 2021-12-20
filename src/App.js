import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Body from "./Components/Body/Body";
import Categories from "./Components/Body/VideoList/Categories";
import VideoList from "./Components/Body/VideoList/VideoList";
import Header from "./Components/header/Header";
import {movieListAction } from "./State/action/action";
function App() {
  // const movies = useSelector((selector) => selector.movie);
  // const genres = useSelector((selector) => selector.genre);

  return (
    <div className="App" >
      <Header />
      <Body />
      <div className="videos">
        <Categories />
      </div>
    </div>
  );
}


export default App;
