const body = document.body;

for (let i = 0; i < 150; i++) {
    const dot = document.createElement("div");

    dot.className = "dot";

    dot.style.left = Math.random() * window.innerWidth + "px";
    dot.style.top = Math.random() * window.innerHeight + "px";

    body.appendChild(dot);
}