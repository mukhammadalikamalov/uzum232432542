import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../App";
import Favourites from "../pages/favorites/Favorites";


function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </Router>
  );
}

export default RoutesPage;
