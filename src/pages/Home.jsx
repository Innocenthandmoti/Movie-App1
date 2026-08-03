// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import MovieRow from "../components/MovieRow";

// function Home() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <MovieRow />
//     </div>
//   );
// }

// export default Home;

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryRow from "../components/CategoryRow";

function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <Hero />

      <CategoryRow title="🔥 Trending Movies" endpoint="/trending/movie/week" />

      <CategoryRow title="⭐ Popular Movies" endpoint="/movie/popular" />

      <CategoryRow title="🏆 Top Rated" endpoint="/movie/top_rated" />

      <CategoryRow
        title="🎭 Action"
        endpoint="/discover/movie?with_genres=28"
      />

      <CategoryRow
        title="😂 Comedy"
        endpoint="/discover/movie?with_genres=35"
      />
    </div>
  );
}

export default Home;
