import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Aeroportos } from "./pages-aeroportos/aeroportos";
import { AeroportosAtualizar } from "./pages-aeroportos/aeroportosAtualizar";
import { AeroportosNovo } from "./pages-aeroportos/aeroportosNovo";
import { AeroportosVer } from "./pages-aeroportos/aeroportosVer";
import { Passageiros } from "./pages-passageiros/passageiros";
import { PassageirosVer } from "./pages-passageiros/passageirosVer";
import { PassageirosAtualizar } from "./pages-passageiros/passageirosAtualizar";
import { PassageirosNovo } from "./pages-passageiros/passageirosNovo";
import { Home } from "./pages-home/home";
import { Voos } from "./pages-voos/voos";
import { VoosNovo } from "./pages-voos/voosNovo";
import { VoosAtualizar } from "./pages-voos/voosAtualizar";
import { VoosVer } from "./pages-voos/voosVer";
import { Box } from "@mui/system";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

import "./App.css";
import { red } from "@mui/material/colors";
function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link href="/home" color="inherit">
              Home
            </Link>
            <Link href="/aeroportos" color="inherit">
              Aeroportos
            </Link>
            <Link href="/passageiros" color="inherit">
              Passageiros
            </Link>
            <Link href="/voos" color="inherit">
              Voos
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <div className="router">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aeroportos" element={<Aeroportos />} />
            <Route path="/aeroportos/:id" element={<AeroportosVer />} />
            <Route
              path="/aeroportos-atualizar/:id"
              element={<AeroportosAtualizar />}
            />
            <Route path="/aeroportos-novo" element={<AeroportosNovo />} />
            <Route path="/passageiros" element={<Passageiros />} />
            <Route path="/passageiros/:id" element={<PassageirosVer />} />
            <Route
              path="/passageiros-atualizar/:id"
              element={<PassageirosAtualizar />}
            />
            <Route path="/passageiros-novo" element={<PassageirosNovo />} />
            <Route path="/voos" element={<Voos />} />
            <Route path="/voos/:id" element={<VoosVer />} />
            <Route path="/voos-atualizar/:id" element={<VoosAtualizar />} />
            <Route path="/voos-novo" element={<VoosNovo />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
