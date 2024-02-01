import { useEffect, useState } from "react";
import apiClients from "../../services/api-clients";
import { Text } from "@chakra-ui/react";

interface Game {
    id: number
    name: string
}

interface FetchResponse {
    count: number
    results: Game[]
}

export default function GameGrid(){
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {  
    apiClients.get<FetchResponse>('/games')
      .then(res => setGame(res.data.results))
      .catch(err => setError(err.message));
  })

  return (
    <>
      { error && <Text>{error}</Text> }
      <ul>
        {game.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  )
}

