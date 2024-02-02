import { useState, useEffect } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

interface Genre {
    id: number
    name: string
    slug: string
}   

interface FetchGenreResponse {
    count: number
    results: Genre[]
}

export default function useGenre(){
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {  
      const controller = new AbortController();
        
      setLoading(true);
      apiClients.get<FetchGenreResponse>('/genres', {signal: controller.signal})
        .then(res => {
            setGenre(res.data.results)
            setLoading(false)
        })
        .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        })

      return () => controller.abort();
    }, []);

    return { genres, error, isLoading }
}