
document.addEventListener('DOMContentLoaded', async function () {
    const apiKey = "4b2be9e64e0712d7d1fe8de2c9576e11";
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`;

    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
        });
        if (!response.ok) {
            throw new Error('failed to fetch');
        }
        const data = await response.json();
console.log(data)
        popularMovieList(data.results, 4); 
    } catch (error) {
        console.error('Error:', error);
    }
});

function popularMovieList(movies, initialCount) {
    const movieListContainer = document.getElementById('movie-list');
    let currentRow;

    
    for (let index = 0; index < initialCount; index++) {
        const movie = movies[index];

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie', 'NewMovies');
        movieElement.classList.add('movie');
        movieElement.setAttribute('data-movie-id', movie.id);
        movieElement.setAttribute('id', `movie-${index}`);

        const imgElement = document.createElement('img');
        imgElement.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
        imgElement.alt = movie.title;

        const h3Element = document.createElement('h3');
        h3Element.textContent = movie.title;

        movieElement.appendChild(imgElement);
        movieElement.appendChild(h3Element);

        movieListContainer.appendChild(movieElement);
    }

    const signupbutton = document.getElementById('SignUp-btn');
    signupbutton.addEventListener('click',function(){
        window.location.href ='signupPage.html'
    })
  
    const showMoreButton = document.createElement('button');
    showMoreButton.textContent = 'Show More';
    showMoreButton.addEventListener('click', function () {
 
        for (let index = initialCount; index < movies.length; index++) {
            const movie = movies[index];

            const movieElement = document.createElement('div');
            movieElement.classList.add('movie', 'NewMovies');
            movieElement.classList.add('movie');
            movieElement.setAttribute('data-movie-id', movie.id);
            movieElement.setAttribute('id', `movie-${index}`);

            const imgElement = document.createElement('img');
            imgElement.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
            imgElement.alt = movie.title;

            const h3Element = document.createElement('h3');
            h3Element.textContent = movie.title;

            movieElement.appendChild(imgElement);
            movieElement.appendChild(h3Element);

            movieListContainer.appendChild(movieElement);
        }

      
        showMoreButton.remove();
    });

    movieListContainer.appendChild(showMoreButton);

    const movieTemplate = document.querySelectorAll('.movie');
    movieTemplate.forEach((movieTemplate) => {
        movieTemplate.addEventListener("click", (event) => {
            const movieId = event.currentTarget.getAttribute('data-movie-id');

            if (movieId) {
                console.log("Movie id is:", movieId);
                navigateToMovie(movieId);
            }
        });
    });
}

function navigateToMovie(movieId) {
    const moviedetailUrl = `MovieBooking.html?movieId=${movieId}`;
    window.location.href = moviedetailUrl;
}
// document.addEventListener("DOMContentLoaded", async function () {
//   const apiKey = "4b2be9e64e0712d7d1fe8de2c9576e11";
//   const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${apiKey}`,
//       },
//     });
//     if (!response.ok) {
//       throw new Error("failed to fetch");
//     }
//     const data = await response.json();
//     console.log(data);
//     popularMovieList(data.results);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });
// function popularMovieList(movies) {
//   const movieListContainer = document.getElementById("movie-list");
//   let currentRow;

//   movies.forEach((movie, index) => {
//     // const movieElement = document.createElement('div');
//     const movieElement = document.createElement("div");
//     movieElement.classList.add("movie", "NewMovies");
//     movieElement.classList.add("movie");

//     movieElement.setAttribute("data-movie-id", movie.id);
//     movieElement.setAttribute("id", `movie-${index}`);
//     const imgElement = document.createElement("img");
//     imgElement.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
//     imgElement.alt = movie.title;

//     const h3Element = document.createElement("h3");
//     h3Element.textContent = movie.title;

//     movieElement.appendChild(imgElement);
//     movieElement.appendChild(h3Element);

//     movieListContainer.appendChild(movieElement);
//   });

//   const movieTemplate = document.querySelectorAll(".movie");
//   movieTemplate.forEach((movieTemplate) => {
//     movieTemplate.addEventListener("click", (event) => {
//       const movieId = event.currentTarget.getAttribute("data-movie-id");

//       if (movieId) {
//         console.log("Movie id is:", movieId);
//         navigateToMovie(movieId);
//       }
//     });
//   });
// }

// function navigateToMovie(movieId) {
//   const moviedetailUrl = `MovieBooking.html?movieId=${movieId}`;
//   window.location.href = moviedetailUrl;

// }
