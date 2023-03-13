import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Passageiros } from "./pages/passageiros";
import { PassageirosVer } from "./pages/passageirosVer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="/home">Home|</a>
        <a href="/passageiros">Passageiros</a>
      </div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/passageiros" element={<Passageiros />} />
          <Route path="/passageiros/:id" element={<PassageirosVer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
