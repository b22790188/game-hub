import { useState, useEffect } from "react";
import apiClients from "../../services/api-clients";
interface Game {
    id: number
    name: string
}

interface FetchResponse {
    count: number
    results: Game[]
}

export default function useGame(){
    const controller = new AbortController();

    const [game, setGame] = useState<Game[]>([]);
    const [error, setError] = useState('');
  
    useEffect(() => {  
      apiClients.get<FetchResponse>('/games', {signal: controller.signal})
        .then(res => setGame(res.data.results))
        .catch(err => setError(err.message));

      return () => controller.abort();
    }, []);

    return {game, error}
}