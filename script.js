//dichiaro variabili

const mainContainer = document.getElementById("main-container");
const polaroid = document.querySelector("card");
const cardImgContainer = document.querySelector(".card .img-container");
const captionEl = document.querySelector(".card .caption");

//variabili overlay per event
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("overlay-close");



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

//event per aprire polaroid


mainContainer.addEventListener("click", (e) => {
  const card = e.target.closest(".card");   //.target -> riconosce l'elemento HTML su cui ho cliccato / .closest(".card") risale all'elemento più vicino che ha come classe .card
  if (!card) return;          // se click fuori dalle card

  overlay.classList.remove("hidden");
});

//chiusura polaroid

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

