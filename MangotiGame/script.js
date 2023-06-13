window.onload = function(){
    var img = document.getElementById("Mangoti");
    var count = document.getElementById("score");
    var score = Number(localStorage.getItem("score")) || 0;
    var audio = new Audio("Sounds/sound1.m4a");
    var resetBtn = document.getElementById("reset");
    var soundIcon = document.querySelector(".fa-volume-high");
    var menuIcon = document.getElementById("menu");
    var menuBox = document.getElementById("menu-box");

    var isMuted = false;

    count.innerHTML = score;

    img.addEventListener('mousedown', function(){
        increaseScore();
        img.src = 'Images/mangoclick.png';
        if (!isMuted) {
            audio.play();
        }

        var randomX = Math.floor(Math.random() * (window.innerWidth - img.width));
        var randomY = Math.floor(Math.random() * (window.innerHeight - img.height));

        img.style.position = 'absolute';
        img.style.top = randomY + 'px';
        img.style.left = randomX + 'px';
    });

    document.addEventListener('mouseup', function (){
        img.src = 'Images/mango.png';
    });

    resetBtn.addEventListener('click', function(){
        score = 0;
        count.innerHTML = score;
        localStorage.removeItem("score");
    });

    soundIcon.addEventListener("click", function() {
        isMuted = !isMuted;
        if (isMuted) {
            soundIcon.classList.remove("fa-volume-high");
            soundIcon.classList.add("fa-volume-mute");
            audio.pause();
        } else {
            soundIcon.classList.remove("fa-volume-mute");
            soundIcon.classList.add("fa-volume-high");
            audio.play();
        }
    });

    menuIcon.addEventListener("click", function(event) {
        event.preventDefault();
        if (menuBox.style.display === "block") {
            menuBox.style.animation = "fade-out 0.5s ease forwards";
            setTimeout(function() {
                menuBox.style.display = "none";
                menuBox.style.animation = "";
            }, 600);
        } else {
            menuBox.style.display = "block";
            menuBox.style.animation = "fade-in 0.5s ease forwards";
        }
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
        localStorage.setItem("score", score);
    }
}