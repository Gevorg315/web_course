const addMovieModel = document.getElementById("add-modal");
// const addMovieModel = document.querySelector('#add-modal');
// const addMovieModel = document.body.children[1];
//const startAddMovieButton = document.querySelector("header").lastElementChild;
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModel.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModel.querySelectorAll("input");
//const userInputs = addMovieModel.getElementsByTagName("input");
const enteryTextSection = document.getElementById("entry-text");
const deleteMovieModel = document.getElementById("delete-modal");

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const updateUI = () => {
  if (movies.length === 0) {
    enteryTextSection.style.display = "block";
  } else {
    enteryTextSection.style.display = "none";
  }
};

const cancelMovieDeletion = () => {
  toggleBackdrop();
  deleteMovieModel.classList.remove("visible");
};

const toggleMovieModel = () => {
  addMovieModel.classList.toggle("visible");
  toggleBackdrop();
};

const confirmDeleteMovie = (movieId) => {
  let movieIndex = 0;
  for (let movie of movies) {
    if (movie.id == movieId) {
      break;
    }
    movieIndex++;
  }

  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  //listRoot.removeChild(listRoot.children[movieIndex]);
  cancelMovieDeletion();
  updateUI();
};

const deleteMovieElement = (movieId) => {
  deleteMovieModel.classList.add("visible");
  toggleBackdrop();
  const cancelBtn = deleteMovieModel.querySelector(".btn--passive");
  let confirmBtn = deleteMovieModel.querySelector(".btn--danger");
  // confirmBtn.removeEventListener(
  //   "click",
  //   confirmDeleteMovie.bind(null, movieId)
  // ); // will not work

  confirmBtn.replaceWith(confirmBtn.cloneNode(true));
  confirmBtn = deleteMovieModel.querySelector(".btn--danger");
  cancelBtn.removeEventListener("click", cancelMovieDeletion);
  cancelBtn.addEventListener("click", cancelMovieDeletion);
  confirmBtn.addEventListener("click", confirmDeleteMovie.bind(null, movieId));
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.classList = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}"/>
    </div>
    <div class="movie-element__info"> 
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
    `;
  newMovieElement.addEventListener("click", deleteMovieElement.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const addMovieHandler = () => {
  const movieTitle = userInputs[0].value;
  const movieImageUrl = userInputs[1].value;
  const movieRating = parseInt(userInputs[2].value);
  console.log(typeof movieRating);
  if (
    movieTitle.trim() === "" ||
    movieImageUrl.trim() === "" ||
    movieRating < 1 ||
    movieRating > 5
  ) {
    alert("Please input valid value");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: movieTitle,
    imageUrl: movieImageUrl,
    rating: movieRating,
  };
  movies.push(newMovie);
  toggleMovieModel();
  clearMovieInputs();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.imageUrl,
    newMovie.rating
  );
  updateUI();
};

const closeMovieModel = () => {
  addMovieModel.classList.remove("visible");
};

const showMovieModel = () => {
  addMovieModel.classList.add("visible");
  toggleBackdrop();
};

const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancelAddMovie = () => {
  toggleMovieModel();
  clearMovieInputs();
};

const backdropClickHandler = () => {
  closeMovieModel();
  cancelMovieDeletion();
  clearMovieInputs();
};

startAddMovieButton.addEventListener("click", showMovieModel);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
