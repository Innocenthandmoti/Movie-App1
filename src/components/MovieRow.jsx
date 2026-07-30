// import MovieCard from "./MovieCard";

// function MovieRow() {
//   return (
//     <section className="bg-black px-8 py-10">
//       <h2 className="text-white text-3xl font-bold mb-8">Trending Movies</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         <MovieCard
//           title="The Last Kingdom"
//           image="https://picsum.photos/300/450?random=1"
//           rating="8.9"
//           year="2022"
//         />

//         <MovieCard
//           title="Avatar"
//           image="https://picsum.photos/300/450?random=2"
//           rating="8.2"
//           year="2009"
//         />

//         <MovieCard
//           title="John Wick"
//           image="https://picsum.photos/300/450?random=3"
//           rating="8.4"
//           year="2023"
//         />

//         <MovieCard
//           title="Black Panther"
//           image="https://picsum.photos/300/450?random=4"
//           rating="8.0"
//           year="2018"
//         />

//         <MovieCard
//           title="Inception"
//           image="https://picsum.photos/300/450?random=5"
//           rating="8.8"
//           year="2010"
//         />
//       </div>
//     </section>
//   );
// }

// export default MovieRow;

import MovieCard from "./MovieCard";
import useMovies from "../hooks/useMovies";

function MovieRow() {
  const { movies, loading } = useMovies();

  if (loading) {
    return (
      <section className="bg-black text-white py-10 px-8">
        <h2 className="text-3xl font-bold mb-6">Trending Movies</h2>
        <p>Loading movies...</p>
      </section>
    );
  }

  return (
    <section className="bg-black py-10 px-8">
      <h2 className="text-3xl font-bold text-white mb-8">Trending Movies</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            rating={movie.vote_average.toFixed(1)}
            year={movie.release_date?.split("-")[0]}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieRow;
