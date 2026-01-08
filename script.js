//dichiaro variabili

const mainContainer = document.getElementById("main-container");
const polaroid = document.querySelector("card");
const cardImgContainer = document.querySelector(".card .img-container");
const captionEl = document.querySelector(".card .caption");



// chiamata all'api

axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(res => {
    generateCards(res.data);
  })
  .catch(console.error);



  //funzioni

  function generateCards(polaroids) {
  let outputPolaroids = "";

  polaroids.forEach(polaroid => {
    outputPolaroids += `
      <div class="card">
        <div class="img-container">
          <img src="${polaroid.url}" alt="${polaroid.title}">
        </div>
        <p class="caption">
          <strong>${polaroid.title}</strong><br>
          <small>${polaroid.date}</small>
        </p>
      </div>
    `;
  });

  mainContainer.innerHTML = outputPolaroids;
}
