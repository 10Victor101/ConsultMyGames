import { useState } from 'react';
import Card from './Componentes/Card';
import Gameform from './Componentes/GameForm';

function App() {
  const [games, setGames] = useState([])

  const statusArray = [
    {
      name: "Em andamento",
      hex: "#7c7c7c",
    },
    {
      name: "Pausado",
      hex: "#e5b358",
    },
    {
      name: "Largado",
      hex: "#cc6363",
    },
    {
      name: "Finalizado",
      hex: "#097600",
    },
  ]

  const addGame = (game) => {
    setGames([...games, game])
  }

  return (
    <div>
      <Gameform sendGame={(game) => addGame(game)} statusArray={statusArray} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {games.map((game) => <Card key={game.name} name={game.name} status={game.status} price={game.price} statusHEX={game.hex} />)}
      </div>
    </div>
  );
}

export default App;
