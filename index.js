const grid = document.querySelector(".grid"); 

const exersiceList = [
  {
    id: "1",
    tittle: "Exercise 1",
    description: "Product feature with video",
    path: "exercise-1.html",
  },
  {
    id: "2",
    tittle: "Exercise 2",
    description: "Hero section with video background",
    path: "exercise-2.html",
  },
  {
    id: "3",
    tittle: "Exercise 3",
    description: "Website header",
    path: "exercise-3.html",
  },
  {
    id: "4",
    tittle: "Exercise 4",
    description: "Simple dropdown menu",
    path: "exercise-4.html",
  },
  {
    id: "5",
    tittle: "Exercise 5",
    description: "Image gallery",
    path: "exercise-5.html",
  },
  {
    id: "6",
    tittle: "Exercise 6",
    description: "Cool accordion",
    path: "exercise-6.html",
  },
  {
    id: "7",
    tittle: "Exercise 7",
    description: "Simple loading screen",
    path: "exercise-7.html",
  },
  {
    id: "8",
    tittle: "Exercise 8",
    description: "Site preloader",
    path: "exercise-8.html",
  },
  {
    id: "9",
    tittle: "Exercise 9",
    description: "SVG text loader",
    path: "exercise-9.html",
  },
  {
    id: "10",
    tittle: "Exercise 10",
    description: "Button with animated loading dots",
    path: "exercise-10.html",
  },
  {
    id: "11",
    tittle: "Exercise 11",
    description: "Animated Lottie icon",
    path: "exercise-11.html",
  },
  {
    id: "12",
    tittle: "Exercise 12",
    description: "Animated menu icon",
    path: "exercise-12.html",
  },
  {
    id: "13",
    tittle: "Exercise 13",
    description: "Animated illustration",
    path: "exercise-13.html",
  },
  {
    id: "14",
    tittle: "Exercise 14",
    description: "Animated avatars",
    path: "exercise-14.html",
  },
  {
    id: "15",
    tittle: "Exercise 15",
    description: "Animated logo",
    path: "exercise-15.html",
  },
  {
    id: "16",
    tittle: "Exercise 16",
    description: "Typewriter effect",
    path: "exercise-16.html",
  },
  {
    id: "17",
    tittle: "Exercise 17",
    description: "Mouse follow effect",
    path: "exercise-17.html",
  },
  {
    id: "18",
    tittle: "Exercise 18",
    description: "Scroll-triggered animation",
    path: "exercise-18.html",
  },
  {
    id: "19",
    tittle: "Exercise 19",
    description: "Parallax animation",
    path: "exercise-19.html",
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