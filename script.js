
const pixelArt = document.getElementById("pixelArt");

function createPixelGrid(rows, cols) {
  pixelArt.innerHTML = "";
  for (let i = 0; i < rows * cols; i++) {
    const pixel = document.createElement("div");
    pixel.style.width = `${100 / cols}vw`;
    pixel.style.height = `${100 / rows}vh`;
    pixel.style.float = "left";
    pixel.style.backgroundColor = Math.random() < 0.1 ? "#00ff99" : "transparent";
    pixel.style.opacity = Math.random() * 0.2;
    pixelArt.appendChild(pixel);
  }
}

window.addEventListener("resize", () => createPixelGrid(40, 80));
createPixelGrid(40, 80);
