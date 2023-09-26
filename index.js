function halloweenCountdown () {
    const halloweenDate = new Date ("October 31, 2023 00:00:00");
    const todayDate = new Date ();
    const diff = halloweenDate - todayDate;

    const msInSeconds = 1000;
    const msInMinutes = 60 * 1000;
    const msInHours = 60 * 60 * 1000;
    const msInDays = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor (diff / msInDays);
    document.querySelector (".days").textContent = displayDay;
    
    const displayHour = Math.floor ((diff % msInDays)/ msInHours);
    document.querySelector (".hours").textContent = displayHour;

    const displayMinute = Math.floor ((diff % msInHours) / msInMinutes);
    document.querySelector (".minutes").textContent = displayMinute;

    const displaySecond = Math.floor ((diff % msInMinutes) / msInSeconds);
    document.querySelector (".seconds").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerStop);
        halloweenIsHere()
    }
    
}

let timerStop = setInterval(halloweenCountdown, 1000);

function halloweenIsHere () {
    const heading = document.querySelector ("h1");
    heading.textContent = "Happy Halloween!!!";
    heading.classList.add ("newHeading")
}

const button = document.querySelector("#playButton");
button.addEventListener("click", function(){
    document.querySelector("#halloweenAudio").play();
})

gsap.from("h1", {x: -300, duration: 2, delay: 0.8})
gsap.from(".block", {x: 300, duration: 2.5, delay: 3.5, stagger: 1})