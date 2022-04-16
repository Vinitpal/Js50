// API stuff
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

// document variables
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// Get intial movies
getMovies(API_URL);

page = 1;

leftBtn.addEventListener("click", () => {
  if (page > 1) {
    page--;
    console.log(page, API_URL + "&page=" + String(page));
    getMovies(API_URL + "&page=" + String(page));
  }
});

rightBtn.addEventListener("click", () => {
  if (page >= 1) {
    console.log(page, API_URL + "&page=" + String(page));
    page++;
    getMovies(API_URL + "&page=" + String(page));
  }
});

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `         
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
    `;

    main.append(movieEl);
  });
}

// classes for rating
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

// search bar util
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});

// todo: add more functionality of moving pages and showing details
