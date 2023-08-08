document.addEventListener("DOMContentLoaded", function() {
    const arrowContainer = document.querySelector(".arrow-container");
    const arrowLine = document.querySelector(".arrow-line");
    const grid = document.querySelector(".grid");

    arrowContainer.addEventListener("click", function() {
        grid.classList.toggle("hidden");
        if (!grid.classList.contains("hidden")) {
            arrowLine.style.height = "100px"; // Adjust the height as needed
        } else {
            arrowLine.style.height = "0";
        }
    });

    const fullscreenButton = document.querySelector(".fullscreen-button");
    fullscreenButton.addEventListener("click", function() {
        if (!document.fullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) { // Internet Explorer
                document.documentElement.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // Internet Explorer
                document.msExitFullscreen();
            }
        }
    });

    const button1 = document.querySelector(".blur-button:nth-child(1)");
    button1.addEventListener("click", function() {
        window.open("https://www.youtube.com", "_blank");
    });

    const button2 = document.querySelector(".blur-button:nth-child(2)");
    button2.addEventListener("click", function() {
        window.open("https://www.roblox.com", "_blank");
    });

    const button3 = document.querySelector(".blur-button:nth-child(3)");
    button3.addEventListener("click", function() {
        window.open("https://www.soundcloud.com", "_blank");
    });

    const button4 = document.querySelector(".blur-button:nth-child(4)");
    button4.addEventListener("click", function() {
        window.open("https://www.spotify.com", "_blank");
    });

    const button5 = document.querySelector(".blur-button:nth-child(5)");
    button5.addEventListener("click", function() {
        window.open("https://www.discord.com", "_blank");
    });
});
