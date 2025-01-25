const selection = document.querySelector("#sort");
const moviesDisplay = document.querySelector("#movies");

const API_KEY = "f1a87d30ad8792e0dd1c12ce07d37337";
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data.results);
    return data.results
  } catch (error) {
    console.log(error);
  }
};

const createMovieList = (movie) => {
  return `<div class="movie">
    <img class="poster" src=https://image.tmdb.org/t/p/w500${movie.poster_path} alt="movie.title"/>
        <div>
            <h2 class="movie-title">${movie.title}</h2>
            <p class="release-year">${movie.release_date}</p>
            <p class="movie-overview">${movie.overview}</p>
        </div>
    </div>`;
};

const sortAndDisplay =async(selection)=>{
    let data = await fetchData()
    data.sort((a,b)=>{
        let yearA = parseInt(a.release_date.substring(0,4))
        let yearB = parseInt(b.release_date.substring(0,4))
        if(selection === "asc"){
            return yearA - yearB;
        }else{
            return yearB - yearA;
        }
    })

    moviesDisplay.innerHTML = '';

    data.forEach((obj)=>{
        moviesDisplay.innerHTML += createMovieList(obj);
    })
}

selection.addEventListener('change',()=>{
    sortAndDisplay(selection.value);
})


const fetchAllMovies = async()=>{
    let data = await fetchData();
    data.forEach((obj)=>{
        moviesDisplay.innerHTML += createMovieList(obj);
    })
}

fetchAllMovies();
