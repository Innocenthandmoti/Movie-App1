// import { useEffect, useState } from "react";
// import api from "../services/api";

// function useMovieCategory(endpoint) {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchMovies() {
//       try {
//         const response = await api.get(endpoint);
//         setMovies(response.data.results);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchMovies();
//   }, [endpoint]);

//   return { movies, loading };
// }

// export default useMovieCategory;

import MovieCard from "./MovieCard";
import useMovieCategory from "../hooks/useMovieCategory";

function CategoryRow({ title, endpoint }) {
  const { movies, loading } = useMovieCategory(endpoint);

  if (loading) return null;

  return (
    <section className="px-8 py-8 bg-black">
      <h2 className="text-white text-3xl font-bold mb-6">{title}</h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[220px]">
            <MovieCard
              id={movie.id}
              title={movie.title}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              rating={movie.vote_average.toFixed(1)}
              year={movie.release_date?.split("-")[0]}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryRow;
