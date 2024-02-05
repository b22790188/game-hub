import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClients from "../services/api-clients";
import useData from "./useData";
import { genres } from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenre = () => useData<Genre>('/genres');
const useGenre = () => ({
  data: genres.results,
  isLoading: false,
  error: null,
});

export default useGenre;
