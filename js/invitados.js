const categoriaPelicula = {
    araki: ["JoJo's Bizarre Adventure"],
    mario: ["Dragon Ball Z"],
    michael: ["Scott Pilgrim vs. the World"],
    grey: ["Avatar: The Last Airbender 2005"],
  };
  
  for (const categoria in categoriaPelicula) {
    const categoriaContainer = document.getElementById(`${categoria}-obras`);
  
    const pelicula = categoriaPelicula[categoria];
  
    pelicula.forEach(searchTerm => {
      fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${searchTerm}`, {
        "method": "GET",
        "headers": {
          "X-RapidAPI-Key": "a4dd3bf4e6msh8aa4a49d1e78e2fp18d23bjsn4a782f01ba37",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
        }
      })
        .then(response => response.json())
        .then(data => {
          const list = data.d;
          const primera = list[0];
          if (primera) {
            const nombre = primera.l;
            const poster = primera.i.imageUrl;
            const pelicula = `<div class="movie">
                                  <img src="${poster}">
                                  <h2>${nombre}</h2>
                              </div>`;
            categoriaContainer.innerHTML += pelicula;
          }
        })
        .catch(err => {
          console.error(error);
        });
    });
  }