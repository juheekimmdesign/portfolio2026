/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
 이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */
 
const projectAll = document.querySelector('.project_wrap .project_swiper');
console.log(projectAll);

const projectAllSwiper = new Swiper(projectAll,{
    slidesPerView:4.5,
    spaceBetween:20,
    scrollbar:{
        el:'.project_wrap .scroll'
    },
    autoplay:{
        delay:3000,
    },
    speed: 3000,
})