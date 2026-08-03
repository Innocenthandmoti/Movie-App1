// import { useParams } from "react-router-dom";

// function MovieDetails() {
//   const { id } = useParams();

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold">Movie Details</h1>
//         <p className="mt-4 text-gray-400">Movie ID: {id}</p>
//       </div>
//     </div>
//   );
// }

// export default MovieDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const [movieResponse, videoResponse, creditsResponse] =
          await Promise.all([
            api.get(`/movie/${id}`),
            api.get(`/movie/${id}/videos`),
            api.get(`/movie/${id}/credits`),
          ]);

        setMovie({
          ...movieResponse.data,
          videos: videoResponse.data.results,
          cast: creditsResponse.data.cast,
        });
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }
  const trailer = movie.videos.find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  );
  return (
    <div className="min-h-screen bg-black text-white">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-[500px] object-cover"
      />

      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-5xl font-bold">{movie.title}</h1>
        <p className="text-yellow-400 mt-4">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>
        <p className="text-gray-400 mt-2">
          {movie.release_date} • {movie.runtime} mins
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {movie.genres.map((genre) => (
            <span
              key={genre.id}
              className="bg-red-600 px-3 py-1 rounded-full text-sm"
            >
              {genre.name}
            </span>
          ))}
        </div>
        <p className="mt-6 text-lg text-gray-300">{movie.overview}</p>{" "}
        <h2 className="text-3xl font-bold mt-12 mb-6">Cast</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {movie.cast.slice(0, 6).map((actor) => (
            <div key={actor.id} className="text-center">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={actor.name}
                className="w-full rounded-lg"
              />

              <h3 className="mt-3 font-semibold">{actor.name}</h3>

              <p className="text-gray-400 text-sm">{actor.character}</p>
            </div>
          ))}
        </div>
        {trailer && (
          <button
            onClick={() => setShowTrailer(!showTrailer)}
            className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold transition"
          >
            {showTrailer ? "Hide Trailer" : "▶ Watch Trailer"}
          </button>
        )}
        {showTrailer && trailer && (
          <div className="mt-8 aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="Movie Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
