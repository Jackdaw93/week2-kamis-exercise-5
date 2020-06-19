let fruits = [
  {
    name: "Badam",
    latin: "Prunus dulcis",
    divisi: "Tracheophyta",
    imgUrl: "./images/1.jpg",
  },
  {
    name: "Anggur",
    latin: "Vitis vinifera",
    divisi: "Vitaceae",
    imgUrl: "./images/2.jpg",
  },
  {
    name: "Apel",
    latin: "Malus domestica",
    divisi: "Magnoliophyta",
    imgUrl: "./images/3.jpg",
  },
  {
    name: "Aprikot",
    latin: "Armeniaca vulgaris",
    divisi: "Magnoliophyta",
    imgUrl: "./images/4.jpg",
  },
  {
    name: "Enau",
    latin: "Arenga pinnata",
    divisi: "Magnoliophyta",
    imgUrl: "./images/5.jpg",
  },
  {
    name: "Stroberi",
    latin: "aardbei",
    divisi: "	Magnoliophyta",
    imgUrl: "./images/6.jpeg",
  },
  {
    name: "Alpukat",
    latin: "Persea americana",
    divisi: "Magnoliophyta",
    imgUrl: "./images/7.jpg",
  },
  {
    name: "Bacang",
    latin: "Mangifera foetida",
    divisi: "Magnoliophyta",
    imgUrl: "./images/8.jpg",
  },
  {
    name: "Belimbing",
    latin: "Averrhoa carambola",
    divisi: "Magnoliophyta",
    imgUrl: "./images/9.jpg",
  },
  {
    name: "Bengkuang",
    latin: "Pachyrhizus erosus",
    divisi: "Magnoliophyta",
    imgUrl: "./images/10.png",
  },
  {
    name: "Binjai",
    latin: "Mangifera caesia",
    divisi: "Magnoliophyta",
    imgUrl: "./images/11.jpg",
  },
  {
    name: "Bisbul",
    latin: "Diospyros blancoi",
    divisi: "Magnoliophyta",
    imgUrl: "./images/12.png",
  },
];

let position = document.querySelector(".show");

const showFruits = () => {
  for (let data in fruits) {
    // console.log(fruits[data]);
    let card = document.createElement("div");
    card.innerHTML = `
  <div class="card rounded" style="width: 18rem;">
  <img src="${fruits[data].imgUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center">${fruits[data].name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> Divisi: ${fruits[data].divisi}</li>
    <li class="list-group-item">Nama Latin: ${fruits[data].latin}</li>
  </ul>
</div>
`;
    position.appendChild(card);
  }
};

showFruits();
