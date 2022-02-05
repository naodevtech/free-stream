import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
