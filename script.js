//dichiaro variabili

const mainContainer = document.getElementById("main-container");
const polaroid = document.querySelector("card");
const cardImgContainer = document.querySelector(".card .img-container");
const captionEl = document.querySelector(".card .caption");



// chiamata all'api

axios.get("https://lanciweb.github.io/demo/api/pictures/")
  .then(response => {
    const firstPhoto = response.data[0]; // prendo la prima foto

    // metto l'immagine dentro .img-container
    cardImgContainer.innerHTML = `
      <img src="${firstPhoto.url}" alt="${firstPhoto.title}">
    `;

    // metto descrizione + data
    captionEl.innerHTML = `
      <strong>${firstPhoto.title}</strong><br>
      <small>${firstPhoto.date}</small>
    `;
  })
  .catch(error => {
    console.error(error);
  });
