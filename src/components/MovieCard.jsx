// function MovieCard({ title, image, rating, year }) {
//   return (
//     <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
//       {/* Movie Poster */}
//       <img src={image} alt={title} className="w-full h-80 object-cover" />

//       {/* Movie Details */}
//       <div className="p-4">
//         <h2 className="text-white text-xl font-semibold truncate">{title}</h2>

//         <div className="flex justify-between text-gray-400 mt-2">
//           <span>⭐ {rating}</span>
//           <span>{year}</span>
//         </div>

//         <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition">
//           ▶ Watch Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;

import { useNavigate } from "react-router-dom";

function MovieCard({ id, title, image, rating, year }) {
  const navigate = useNavigate();

  <button
    onClick={() => navigate(`/movie/${id}`)}
    className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
  >
    ▶ Watch Now
  </button>;
}
