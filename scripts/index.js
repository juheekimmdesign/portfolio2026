/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
 이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */
 
const projectAll = document.querySelector('.project_wrap .project_swiper');
const graphic =document.querySelector('.project3 .graphic_siwper');
const video = document.querySelector('.project7 .video_swiper')
console.log(projectAll, graphic, video);

const projectAllSwiper = new Swiper(projectAll,{
    slidesPerView:4,
    spaceBetween:20,
    scrollbar:{
        el:'.project_wrap .scroll'
    },
    autoplay:{
        delay:2000,
    },
    speed: 2000,
    loop:true,
    pauseOnMouseEnter: true,
})

const graphicSwiper = new Swiper(graphic,{
    slidesPerView:4,
    spaceBetween:20,
    scrollbar:{
        el:'.project3 .scroll'
    },
    autoplay:{
        delay:2000,
    },
    speed: 2000,
    loop:true,
    pauseOnMouseEnter: true,
})

const videoSwiper = new Swiper(video, {
    slidesPerView:3,
    spaceBetween:40,
    scrollbar:{
        el:'.project7 .scroll'
    },
    autoplay:{
        delay:2000,
    },
    speed: 2000,
    loop:true,
    pauseOnMouseEnter: true,
})