import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar";

import TeamsPage from "./pages/TeamsPage"
import TeamDetailsPage from "./pages/TeamDetailsPage";
import GamesPage from "./pages/GamesPage";
import GameDetailPage from "./pages/GameDetailPage";
import TablePage from "./pages/TablePage";
import CreateGamePage from "./pages/CreateGame";
import EditGamePage from "./pages/EditGamePage"
import PlayersPage from "./pages/PlayersPage";
import CreateTeamPage from "./pages/CreateTeamPage";
import EditTeamPage from "./pages/EditTeamPage";

function App(){
  return (
    <div className="app-container">
      <BrowserRouter>

          <Navbar />

          <Routes>
            <Route 
              path = "/"
              element = {<TeamsPage />}
            />

            <Route 
              path = "/teams/:id"
              element={<TeamDetailsPage />}
            />

            <Route 
              path = "/games"
              element={<GamesPage />}
            />

            <Route 
              path = "/games/:id"
              element={<GameDetailPage />}
            />

            <Route
              path = "/table"
              element={<TablePage />}
            />

            <Route
              path = "/addGame"
              element={<CreateGamePage />}
            />

            <Route 
              path="/games/:id/edit"
              element={<EditGamePage />}
            />

            <Route
                path="/players"
                element={<PlayersPage />}
            />

            <Route
              path="/teams/create"
              element={<CreateTeamPage />}
            />

            <Route
              path="/teams/:id/edit"
              element={<EditTeamPage />}
            />

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
