// On Loading,
window.addEventListener("load" , () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.getElementById("visual");
    const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

    // Looping Through The Sounds
    pads.forEach((pad, index) => {
        pad.addEventListener("click", () => {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    // Creating a Function That Makes Bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 2s ease";
        bubble.addEventListener("animationend", () => {
            visual.removeChild(this);
        });
    };
});

