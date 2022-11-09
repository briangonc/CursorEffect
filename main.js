const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.cssText = `
        top: ${e.y - 40}px;
        left: ${e.x - 40}px;
    `;
});
