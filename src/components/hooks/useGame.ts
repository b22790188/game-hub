import { useState, useEffect } from "react";
import apiClients from "../../services/api-clients";
import { CanceledError } from "axios";
interface Game {
    id: number
    name: string
}

interface FetchResponse {
    count: number
    results: Game[]
}

export default function useGame(){
    
    const [game, setGame] = useState<Game[]>([]);
    const [error, setError] = useState('');
    
    useEffect(() => {  
      const controller = new AbortController();
      apiClients.get<FetchResponse>('/games', {signal: controller.signal})
        .then(res => setGame(res.data.results))
        .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message);
        })

      return () => controller.abort();
    }, []);

    return {game, error}
}