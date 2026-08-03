import { useEffect, useState } from "react";
import api from "../services/api";

function useMovieCategory(endpoint) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get(endpoint);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [endpoint]);

  return { movies, loading };
}

export default useMovieCategory;
