import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClients from "../services/api-clients";
import useData from "./useData";

export interface Genre {
    id: number
    name: string
    slug: string
}   

const useGenre = () => useData<Genre>('/genres');

export default useGenre;