function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full px-8 md:px-16">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-6">
            The Last Kingdom
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            A fearless warrior rises to reclaim his destiny in an epic battle
            for power, family, and honor.
          </p>

          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
              ▶ Watch Now
            </button>

            <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
