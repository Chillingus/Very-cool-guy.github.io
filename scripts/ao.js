const btn = document.getElementById("aoButton");

btn.onclick = () => {
    const img = document.createElement("img");
    img.src = "https://frostcat224.neocities.org/ao.png";

    img.style.position = "fixed";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
    img.style.width = "400px";
    img.style.zIndex = "999998";
    img.style.pointerEvents = "none";

    document.body.appendChild(img);

    const deleteInterval = setInterval(() => {
        const all = [...document.body.querySelectorAll("*")];

        const filtered = all.filter(el =>
            el !== img &&
            el !== btn &&
            !btn.contains(el)
        );

        if (filtered.length === 0) {
            clearInterval(deleteInterval);
            return;
        }

        const randomEl = filtered[Math.floor(Math.random() * filtered.length)];

        randomEl.style.transition = "all 0.8s";
        randomEl.style.opacity = "0";
        randomEl.style.transform = "scale(0) rotate(360deg)";

        setTimeout(() => {
            randomEl.remove();
        }, 800);

    }, 700);
};