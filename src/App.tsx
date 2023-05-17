import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";
import Ex1 from "./components/Ex1";
import Ex2 from "./components/Ex2";
import Ex3 from "./components/Ex3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/ex1" element={<Ex1 />} />
            <Route path="/ex2" element={<Ex2 />} />
            <Route path="/ex3" element={<Ex3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
