const testimonial = document.getElementsByClassName('testimonial');
const playPauseBtn = document.querySelector('.play-pause');

let currState = "pause";
let testimonialActive = 0;
let interval;

playPauseBtn.addEventListener('click',slideShow);

function slideShow(){
    if(currState === 'pause'){
        playPauseBtn.textContent = '⏸'
        currState = "play"
        interval = setInterval(()=>{
            testimonial[testimonialActive].setAttribute('class','testimonial');
            if(testimonialActive === 2){
                testimonialActive = 0;
            }else{
                testimonialActive += 1;
            }
            testimonial[testimonialActive].setAttribute('class','testimonial active');
        },1000)
    }else{
        playPauseBtn.textContent = '▶';
        currState ="pause";
        clearInterval(interval)
    }
}
