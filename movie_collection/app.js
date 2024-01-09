const myLibrary = [];

function Movie(movieTitle, movieDirector, movieDuration, movieHasWatched) {
    this.movieTitle = movieTitle;
    this.movieDirector = movieDirector;
    this.movieDuration = movieDuration;
    this.movieHasWatched = movieHasWatched;
}

function addMovieToLibrary(movie) {
    myLibrary.push(movie);
}

// FUNCTION TESTS
const testMovie = new Movie('testMovie', 'testDirector', 'testDuration', false);
const secondTestMovie = new Movie('secondTestMovie', 'secondTestDirector', 'secondTestDuration', true);

addMovieToLibrary(testMovie);
addMovieToLibrary(secondTestMovie);
// console.log(myLibrary);

const mainContent = document.querySelector(".main-content");

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#add-movie-button");
const submitButton = document.querySelector("#dialog-submit-button");
const closeDialogButton = document.querySelector("#dialog-close-button");

const titleInput = document.querySelector("#movie-title-input");
const directorInput = document.querySelector("#movie-director-input");
const durationInput = document.querySelector("#movie-duration-input");
const hasWatchedInput = document.querySelector("#has-watched-input");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeDialogButton.addEventListener("click", () => {
    dialog.close();
})

submitButton.addEventListener("click", () => {
    let inputTitle = titleInput.value;
    let inputDirector = directorInput.value;
    let inputDuration = durationInput.value;
    let inputHasWatched = hasWatchedInput.value;

    const inputMovie = new Movie(inputTitle, inputDirector, inputDuration, inputHasWatched);
    addMovieToLibrary(inputMovie);

    renderCollection();
    dialog.close();
})

function renderCollection() {
    mainContent.innerHTML = '';

    myLibrary.forEach(element => {
        let movieCard = document.createElement("div");
        movieCard.classList.add('movie-card');

        let title = document.createElement("h3");
        title.classList.add('movie-header');
        title.innerText = element.movieTitle;

        let director = document.createElement("p");
        director.classList.add('director-paratag');
        director.innerText = 'Directed by: ' + element.movieDirector;

        let duration = document.createElement('p');
        duration.classList.add('duration-paratag');
        duration.innerText = element.movieDuration + ' minutes'

        !element.movieHasWatched ? movieCard.classList.add('not-watched') : movieCard.classList.add('watched');

        movieCard.append(title);
        movieCard.append(director);
        movieCard.append(duration);
        mainContent.append(movieCard);
    });
}