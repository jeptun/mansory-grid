const container = document.querySelector(".container");

function generateGrid(columns, posts) {
  container.innerHTML = "";

  let columnWrappers = {};

  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }

  for (let i = 0; i < posts.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(posts[i]);
  }

  for (let i = 0; i < columns; i++) {
    let columnPosts = columnWrappers[`column${i}`];
    let div = document.createElement("div");
    div.classList.add("column");

    columnPosts.forEach((post) => {
      let postDiv = document.createElement("div");
      postDiv.classList.add("post");
      let image = document.createElement("img");
      image.src = post.image;
      image.setAttribute("loading", "lazy");
      let bellIcon = document.createElement("i");
      bellIcon.classList.add("fa-solid");
      bellIcon.classList.add("fa-heart");
      let hoverDiv = document.createElement("div");
      hoverDiv.classList.add("overlay");
      let title = document.createElement("h3");
      title.innerText = post.title;

      hoverDiv.appendChild(title);
      postDiv.append(image, hoverDiv, bellIcon);
      div.appendChild(postDiv);
    });
    container.appendChild(div);
  }
}

let previousScreenSize = window.innerWidth;
window.addEventListener("resize", () => {
  imageIndex = 0;

  if (window.innerWidth < 600 && previousScreenSize >= 600) {
    generateGrid(1, posts);
  } else if (
    window.innerWidth >= 600 &&
    window.innerWidth < 1000 &&
    (previousScreenSize < 600 || previousScreenSize >= 1000)
  ) {
    generateGrid(2, posts);
  } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
    generateGrid(4, posts);
  }
  previousScreenSize = window.innerWidth;
});

// loading

if (previousScreenSize < 600) {
  generateGrid(1, posts);
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
  generateGrid(2, posts);
} else {
  generateGrid(4, posts);
}
