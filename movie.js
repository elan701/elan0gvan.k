    

    // Get movie ID from URL
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');

    // Fetch and display movie details
    async function fetchMovieDetails(id) {
      const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      const movie = await res.json();
   
      const container = document.getElementById('movie-details');
     container.innerHTML = `
  <div class="flex flex-col md:flex-row gap-8">
    
    <!-- Left side: Poster -->
    <div class="w-full md:w-1/3">
      <img src="${IMAGE_BASE + movie.poster_path}" 
           alt="${movie.title}" 
           class="w-full rounded-lg shadow-lg" />
    </div>

    <!-- Right side: Movie details -->
    <div class="flex-1">
      <h2 class="text-3xl font-bold mb-2">${movie.title}</h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
        Release Date: ${movie.release_date}
      </p>
      <p class="mb-4">${movie.overview}</p>

      <p class="font-semibold">Genres:</p>
      <div class="flex flex-wrap gap-2 mt-1">
        ${movie.genres.map(g => 
          `<span class="px-2 py-1 bg-blue-600 text-white text-sm rounded">${g.name}</span>`
        ).join("")}
      </div>

      <p class="mt-4 font-semibold">Rating: ⭐ ${movie.vote_average} / 10</p>

      <!-- ✅ Extra text below details -->
      <div class="mt-6">
  <video controls class="w-full rounded-lg shadow-lg">
    <source src="movie.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  </div>

    </div>
  </div>
`;


   
    }

    fetchMovieDetails(movieId);