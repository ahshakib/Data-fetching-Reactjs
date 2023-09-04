import { useEffect, useState } from "react";
import "./App.css";
import GameCard from "./componets/GameCard";

const API_URL =
  "https://api.rawg.io/api/games?key=3285838dead84429b1a8ed2261825e34";

function App() {
  const [games, setGames] = useState([]);
  const searchGames = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setGames(data.results);
  };

  useEffect(() => {
    searchGames();
  }, []);

  return (
    <div className="app">
      <h1>KhelaDhula</h1>
      <div>
        <input
          type="text"
          placeholder="Search games here..."
          value=""
          onChange={() => {}}
        />
        <span className="material-symbols-outlined">search</span>
      </div>
      <div className="content">
        {games?.length > 0 ? (
          <div className="container">
            {games.map((game) => (
              <GameCard game={game} key={game.id} />
            ))}
          </div>
        ) : (
          <h2>No games found</h2>
        )}
      </div>
    </div>
  );
}

export default App;
