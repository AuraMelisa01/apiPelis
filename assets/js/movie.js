window.getPelis = (api, search) => {
    return fetch(`https://www.omdbapi.com/?apikey=${api}&s=${search}`)
        .then(response => response.json())
        .then(data => {
            return (data);
            card(data);
        });
};

btnBuscar.addEventListener('click', () => {
    document.getElementById('movies').innerHTML = '';
    const buscar = document.getElementById("search").value;
    getPelis('83655ae3', buscar)
        .then(data => {
            console.log(data);
            card(data);
        })
});




const card = (data) => {
    for (let i = 0; i < data.Search.length; i++) {
        if (data.Search[i].Poster === 'N/A') {
            data.Search[i].Poster = '../assets/images/cine.png';
        }
        document.getElementById("movies").innerHTML += `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src=${data.Search[i].Poster} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${data.Search[i].Title}</h5>
        <p class="card-text"> Tipo: ${data.Search[i].Type} <p>
        <p class="card-text"> Año: ${data.Search[i].Year} <p>
      </div>
    </div> `
    }
}