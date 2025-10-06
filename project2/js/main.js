const box = document.getElementById("textBox");
const garden = document.getElementById("garden");

box.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    let flower = document.createElement("div");
    flower.className = "flower";

    // Randomize flower colors
    let colors = ["pink", "purple", "yellow", "cyan", "lime", "orange"];
    let c1 = colors[Math.floor(Math.random() * colors.length)];
    let c2 = colors[Math.floor(Math.random() * colors.length)];
    flower.style.background = `radial-gradient(circle, ${c1}, ${c2})`;

    garden.appendChild(flower);
    box.value = "";
  }
});