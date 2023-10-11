const HOST = "http://localhost:8090";
function getAllMovies(){
    $.ajax({
        method: "get",
        url: `${HOST}/movie/`,
    })
    .done((response) =>{
        document.getElementById("first-movie").value = response.title;
    })
    .fail((xhrObj) => {
        alert(xhrObj);
    });
}


const addMovieModal = document.getElementById('addMovieModal')
if (addMovieModal) {
    addMovieModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = addMovieModal.querySelector('.modal-title')
    const modalBodyInput = addMovieModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}

function createMovie() {
    const title = document.getElementById("movie-title").value;
    const genre = document.getElementById("movie-genre").value;
    const year = document.getElementById("movie-year").value;
    const rating = document.getElementById("movie-rating").value;
    const director = document.getElementById("movie-director").value;
    const cast = document.getElementById("movie-cast").value;
  
    $.ajax({
      method: "post",
      url: `${HOST}/movies/`,
      data: JSON.stringify({
        'title': title,
        'genre': genre,
        'year': year,
        'rating': rating,
        'director': director,
        'cast': cast,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .done((response) => {
        alert('movie created')
      })
      .fail((xhrObj) => {
        if (xhrObj && xhrObj.responseJSON && xhrObj.responseJSON.message)
            alert(xhrObj.responseJSON.message);
        if (xhrObj && xhrObj.responseText){
            alert(xhrObj.responseText);
        }    
      });
  }
  