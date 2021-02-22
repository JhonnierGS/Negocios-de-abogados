const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const track = document.getElementById('track');
const slickList = document.getElementById('slick-list');
const slick = document.querySelectorAll('.slick');

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value){
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftposition = track.style.left = 0 : leftposition = parseFloat(track.style.left.slice(0, -2) * -1);
    
    if(leftposition < (trackWidth - listWidth) && value == 2){
        track.style.left = `${-1 * (leftposition + slickWidth)}px`;
    }else if(leftposition > 0 && value == 1){
        track.style.left = `${-1 * (leftposition- slickWidth)}px`;
    }
}