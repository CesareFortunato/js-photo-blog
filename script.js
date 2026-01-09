//dichiaro variabili

const mainContainer = document.getElementById("main-container");

//variabili overlay per event
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("overlay-close");
const overlayImg = document.getElementById("overlay-img");



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
  if (!card) return;   // se click fuori dalle card

  const img = card.querySelector("img");
  if (!img) return;

  overlayImg.src = img.src;
  overlayImg.alt = img.alt;

  overlay.classList.remove("hidden");
});




  //chiusura polaroid

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
}); 

