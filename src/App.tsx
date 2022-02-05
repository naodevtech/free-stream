import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/layout";
import Home from "./components/pages/home/home";
import MovieDetails from "./components/pages/movieDetails/movieDetails";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
