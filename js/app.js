function menuToggle(){
    let nav = document.getElementById("nav");
    nav.classList.toggle('active')
    let toggle = document.getElementById("toggle");
    toggle.classList.toggle('active') 
}

function smoothScroll (target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t* (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}


const scroll2 = document.querySelector('.scroll2');
scroll2.addEventListener('click', function(){
    smoothScroll('#section2', 1500);
});

const scroll3 = document.querySelector('.scroll3');
scroll3.addEventListener('click', function(){
    smoothScroll('#section3', 1750);
});

const scroll4 = document.querySelector('.scroll4');
scroll4.addEventListener('click', function(){
    smoothScroll('#section4', 2000);
});