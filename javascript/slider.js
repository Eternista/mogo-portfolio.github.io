const slider = document.querySelector('.slider');
const slides = [... document.querySelectorAll('.slider .slide')];
var i = 0;
const progressBar = document.querySelector(".progress-bar");
const progressChilds = document.querySelectorAll(".progress-bar>div");

const nextSlide = () => {
    for(i = 0; i < slides.length; i++) {
        if(slides[i].classList.contains('left')){
            slides[i].classList.remove('left');
            i++;
            if(i == slides.length) {
                i = 0;
            }
            slides[i].classList.add('left');
        }
    }
    for(i = 0; i < slides.length; i++) {
        if(slides[i].classList.contains('active')){
            slides[i].classList.remove('active');
            i++;
            if(i == slides.length) {
                i = 0;
            }
            slides[i].classList.add('active');
        }
    }
    for(i = 0; i < progressChilds.length; i++) {
        if(progressChilds[i].classList.contains('active')){
            progressChilds[i].classList.remove('active');
            i++;
            if(i == progressChilds.length) {
                i = 0;
            }
            progressChilds[i].classList.add('active');
        }
    }
    for(i = 0; i < slides.length; i++) {
        if(slides[i].classList.contains('right')){
            slides[i].classList.remove('right');
            i++;
            if(i == slides.length) {
                i = 0;
            }
            slides[i].classList.add('right');
        }
    }
    for(const single of progressChilds) {
        if(single.classList.contains("active") && i < progressChilds.length) {
                progressChilds[i].classList.remove("active");
                i = i + 1;
                if(i === progressChilds.length) {
                    i=0;
                }
                progressChilds[i].classList.add("active");
        }
    }
}

// const previousSlide = () => {
//     // prevBtn.classList.add('clicked');
//     for(i = slides.length - 1; i >= 0; i--) {
//         if(slides[i].classList.contains('left')){
//             slides[i].classList.remove('left');
//             i--;
//             if(i < 0) {
//                 i = slides.length - 1;
//             }
//             slides[i].classList.add('left');
//         }
//     }
//     for(i = slides.length - 1; i >= 0; i--) {
//         if(slides[i].classList.contains('active')){
//             slides[i].classList.remove('active');
//             i--;
//             if(i < 0) {
//                 i = slides.length - 1;
//             }
//             slides[i].classList.add('active');
//         }
//     }
//     for(i = slides.length - 1; i >= 0; i--) {
//         if(slides[i].classList.contains('right')){
//             slides[i].classList.remove('right');
//             i--;
//             if(i < 0) {
//                 i = slides.length - 1;
//             }
//             slides[i].classList.add('right');
//         }
//     }
//     for(i = dots.length - 1; i >= 0; i--) {
//         if(dots[i].classList.contains('active')){
//             dots[i].classList.remove('active');
//             i--;
//             if(i < 0) {
//                 i = dots.length - 1;
//             }
//             dots[i].classList.add('active');
//         }
//     }
// }

setInterval(() => {
    nextSlide();
}, 5000);