import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Movie Details</h1>
        <p className="mt-4 text-gray-400">Movie ID: {id}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
