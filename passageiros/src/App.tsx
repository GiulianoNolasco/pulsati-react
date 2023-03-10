import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Passageiros } from "./pages/passageiros";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
