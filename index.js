const grid = document.querySelector(".grid"); 

const exersiceList = [
  {
    id: "1",
    tittle: "Showcase 1",
    description: "Product feature with video",
    path: "./showcase1/index.html",
  },
  {
    id: "2",
    tittle: "Showcase 2",
    description: "Website header",
    path: "./showcase2/index.html",
  },
  {
    id: "3",
    tittle: "Showcase 3",

    description: "Hero section with video background",
    path: "./showcase3/index.html",
  },
  {
    id: "4",
    tittle: "Showcase 4",
    description: "Simple dropdown menu",
    path: "./showcase4/index.html",
  },
  {
    id: "5",
    tittle: "Showcase 5",
    description: "Image gallery",
    path: "./showcase5/index.html",
  },
  {
    id: "6",
    tittle: "Showcase 6",
    description: "Cool accordion",
    path: "./showcase6/index.html",
  },
  {
    id: "7",
    tittle: "Showcase 7",
    description: "Simple loading screen",
    path: "./showcase7/index.html",
  },
  {
    id: "8",
    tittle: "Showcase 8",
    description: "Site preloader",
    path: "./showcase8/index.html",
  },
  {
    id: "9",
    tittle: "Showcase 9",
    description: "SVG text loader",
    path: "./showcase9/index.html",
  },
  {
    id: "10",
    tittle: "Showcase 10",
    description: "Button with animated loading dots",
    path: "./showcase10/index.html",
  },
  {
    id: "11",
    tittle: "Showcase 11",
    description: "Animated Lottie icon",
    path: "./showcase11/index.html",
  },
  {
    id: "12",
    tittle: "Showcase 12",
    description: "Animated burger menu",
    path: "./showcase12/index.html",
  },
  {
    id: "13",
    tittle: "Showcase 13",
    description: "Animated illustration",
    path: "./showcase13/index.html",
  },
  {
    id: "14",
    tittle: "Showcase 14",
    description: "Animated avatars",
    path: "./showcase14/index.html",
  },
  {
    id: "15",
    tittle: "Showcase 15",
    description: "Animated logo",
    path: "./showcase15/index.html",
  },
  {
    id: "16",
    tittle: "Showcase 16",
    description: "Typewriter effect",
    path: "./showcase16/index.html",
  },
  {
    id: "17",
    tittle: "Showcase 17",
    description: "Mouse follow effect",
    path: "./showcase17/index.html",
  },
  {
    id: "18",
    tittle: "Showcase 18",
    description: "Scroll-triggered animation",
    path: "./showcase18/index.html",
  },
  {
    id: "19",
    tittle: "Showcase 19",
    description: "Parallax animation",
    path: "./showcase19/index.html",
  },
];

function renderGridItem() {
    const item = exersiceList.map(
      (elem) => `
    <a href=${elem.path} class="card" id=${elem.id}>
          <h2>
            ${elem.tittle} <span> -&gt;</span>
          </h2>
          <p>${elem.description}</p>
        </a>
    `
    ).join('');

    grid.insertAdjacentHTML("beforeend", item);
}

renderGridItem(); 