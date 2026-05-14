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

// GNB active tab 변경
const gnbTab = document.querySelectorAll('#gnb li');

for(let tab of gnbTab){
    tab.addEventListener('click', function(){
        for(let i of gnbTab){
            i.classList.remove('active');
        }
        tab.classList.add('active');
    });
}


// 그래픽을 클릭했을 때 실행되는 팝업 효과 --------------------------------------------------------------
const popupBg = document.querySelector('.graphic_popup_bg');
const popupImg = document.querySelector('.graphic_contents .popup_img img');
const popupTitle = document.querySelector('.popup_title h1');
const popupPeriod = document.querySelector('.popup_title .period');
const popupPhotoshop = document.querySelector('.popup_title .photoshop');
const popupIllustration = document.querySelector('.popup_title .illustration');
const popupPlan = document.querySelector('.popup_info .plan');
console.log(popupBg, popupImg, popupTitle, popupPeriod, popupPhotoshop, popupIllustration, popupPlan);

// 클릭했을 때, 들어갈 내용 준비
const graphicData = [{
    src:'./images/graphic_001.jpg', //popupImg.src = grpahicData[0].src;
    title: '## Home Appliance Promotion Banner',
    tag:['4hours','Photoshop','Illustration'], //popupTag.textContent = graphicData[0].tag[0]
    contents:'다이슨 스팟앤스크럽 AI 로봇청소기의 프로모션 배너 디자인입니다.AI 얼룩 감지 및 셀프 클린 롤러 기능을 강조하여 제품의 스마트한 청소 기능을 직관적으로 전달하였으며, 할인 프로모션과 함께 브랜드의 프리미엄 이미지를 표현할 수 있도록 디자인하였습니다.',
},{
    src:'./images/graphic_002.jpg',
    title: '## Dermatology Event Banner',
    tag:['4hours', 'Photoshop', 'Illustration'],
    contents:'JUVELOOK i 정품 인증 이벤트를 주제로 제작한 피부과 프로모션 배너입니다. 정품 사용 병원의 신뢰감과 프리미엄 스킨부스터 이미지를 강조하였으며, 간결한 레이아웃과 고급스러운 무드로 시술 이벤트를 직관적으로 전달할 수 있도록 디자인하였습니다.',
},{
    src:'./images/graphic_003.jpg',
    title: '## Product Graphic Design',
    tag:['2hours', 'Photoshop', 'Illustration'],
    contents:'‘통통새우 튀김우동’ 제품 홍보를 위한 그래픽 디자인 작업입니다. 제품의 특징과 먹음직스러운 비주얼을 강조하여 시선을 끌 수 있도록 구성했으며, 우동 이미지는 AI를 활용하여 제작했습니다.',
},{
    src:'./images/graphic_004.jpg',
    title: '## Diary Promotion Design',
    tag:['3hours', 'Photoshop', 'Illustration'],
    contents:'소소문구 다이어리 제품 홍보를 위한 그래픽 디자인 작업입니다. 다이어리의 감성과 아날로그 무드를 중심으로 구성하였으며, 제품의 분위기와 활용성을 자연스럽게 전달할 수 있도록 디자인했습니다.',
},{
    src:'./images/graphic_005.jpg',
    title: '## Book Detail Design',
    tag:['4hours', 'Photoshop', 'Illustration'],
    contents:'『괴테는 모든 것을 말했다』 도서를 주제로 제작한 상세페이지 디자인입니다. 도서의 감성과 핵심 내용을 효과적으로 전달할 수 있도록 구성하였으며, 차분한 무드와 가독성을 고려해 디자인 작업을 진행했습니다.',
},{
    src:'./images/graphic_006.jpg',
    title: '## Product Graphic Design',
    tag:['4hours', 'Photoshop', 'Illustration'],
    contents:'풀무원 ‘밀누들 떡볶이’ 제품 홍보를 위한 그래픽 디자인 작업입니다. 제품의 매콤한 분위기와 식감을 시각적으로 표현하고, 먹음직스러운 비주얼과 브랜드 무드를 강조하여 제작했습니다.',
},{
    src:'./images/graphic_007.jpg',
    title: 'Online Class Promotion Design',
    tag:['3hours', 'Photoshop','Illustration'],
    contents:'실무 중심 강좌를 주제로 제작한 인터넷 강의 홍보 디자인입니다.핵심 내용을 직관적으로 전달할 수 있도록 구성했으며,신뢰감 있는 레이아웃과 깔끔한 디자인을 중심으로 작업했습니다.',
}]

// 대상 선택
const thumbnail = document.querySelectorAll('.graphic_siwper .swiper-wrapper .swiper-slide');
const body = document.querySelector('body');
console.log(thumbnail[0], body);

// 클릭 이벤트 했을 때, 내용이 들어가기
thumbnail[0].addEventListener('click', function(e){
    e.preventDefault();
    body.style.overflow = 'hidden';
    popupBg.style.display = 'block';
    popupImg.src = graphicData[0].src;
    popupImg.parentElement.style.width = '400px';
    popupImg.parentElement.style.height = '700px';
    popupTitle.innerHTML =graphicData[0].title;
    popupPeriod.textContent = graphicData[0].tag[0];
    popupPhotoshop.textContent = graphicData[0].tag[1];
    popupIllustration.textContent = graphicData[0].tag[2];
    popupPlan.innerHTML =graphicData[0].contents;
    popupBg.addEventListener('click', function(){
        popupBg.style.display = ' none';
        body.style.overflow ='auto';
    })
});
thumbnail[1].addEventListener('click', function(e){
    e.preventDefault();
    body.style.overflow = 'hidden';
    popupBg.style.display = 'block'
    popupImg.src = graphicData[1].src;
    popupImg.parentElement.style.width = '400px';
    popupImg.parentElement.style.height = '700px';
    popupTitle.innerHTML =graphicData[1].title;
    popupPeriod.textContent = graphicData[1].tag[0];
    popupPhotoshop.textContent = graphicData[1].tag[1];
    popupIllustration.textContent = graphicData[1].tag[2];
    popupPlan.innerHTML =graphicData[1].contents;
    popupBg.addEventListener('click', function(){
        popupBg.style.display = ' none';
        body.style.overflow = 'auto';
    })
});
thumbnail[2].addEventListener('click', function(e){
    body.style.overflow = 'hidden';
    e.preventDefault();
    popupBg.style.display = 'block'
    popupImg.src = graphicData[2].src;
    popupImg.parentElement.style.width = '400px';
    popupImg.parentElement.style.height = '700px';
    popupTitle.innerHTML =graphicData[2].title;
    popupPeriod.textContent = graphicData[2].tag[0];
    popupPhotoshop.textContent = graphicData[2].tag[1];
    popupIllustration.textContent = graphicData[2].tag[2];
    popupPlan.innerHTML =graphicData[2].contents;
    popupBg.addEventListener('click', function(){
        popupBg.style.display = ' none';
        body.style.overflow = 'auto';
    })
});
thumbnail[3].addEventListener('click', function(e){
    e.preventDefault();
    body.style.overflow = 'hidden';
    popupBg.style.display = 'block'
    popupImg.src = graphicData[3].src;
    popupTitle.innerHTML =graphicData[3].title;
    popupImg.parentElement.style.width = '600px';
    popupImg.parentElement.style.height = '620px';
    popupPeriod.textContent = graphicData[3].tag[0];
    popupPhotoshop.textContent = graphicData[3].tag[1];
    popupIllustration.textContent = graphicData[3].tag[2];
    popupPlan.innerHTML =graphicData[3].contents;
    popupBg.addEventListener('click', function(){
        popupBg.style.display = ' none';
        body.style.overflow = 'auto';
    })
});
thumbnail[4].addEventListener('click', function(e){
    e.preventDefault();
    body.style.overflow = 'hidden';
    popupBg.style.display = 'block'
    popupImg.src = graphicData[4].src;
    popupTitle.innerHTML =graphicData[4].title;
    popupImg.parentElement.style.width = '400px';
    popupImg.parentElement.style.height = '700px';
    popupPeriod.textContent = graphicData[4].tag[0];
    popupPhotoshop.textContent = graphicData[4].tag[1];
    popupIllustration.textContent = graphicData[4].tag[2];
    popupPlan.innerHTML =graphicData[4].contents;
    popupBg.addEventListener('click', function(){
        popupBg.style.display = ' none';
        body.style.overflow = 'auto';
    })
});
thumbnail[5].addEventListener('click', function(e){
    e.preventDefault();
    body.style.overflow = 'hidden';
    popupBg.style.display = 'block'
    popupImg.src = graphicData[5].src;
    popupTitle.innerHTML =graphicData[5].title;
    popupImg.parentElement.style.width = '400px';
    popupImg.parentElement.style.height = '700px';
    popupPeriod.textContent = graphicData[5].tag[0];
    popupPhotoshop.textContent = graphicData[5].tag[1];
    popupIllustration.textContent = graphicData[5].tag[2];
    popupPlan.innerHTML =graphicData[5].contents;
    popupBg.addEventListener('click', function(){
        popupBg.style.display = ' none';
        body.style.overflow = 'auto';
    })
});
thumbnail[6].addEventListener('click', function(e){
    e.preventDefault();
    body.style.overflow = 'hidden';
    popupBg.style.display = 'block'
    popupImg.src = graphicData[6].src;
    popupImg.parentElement.style.width = '600px';
    popupImg.parentElement.style.height = '550px';
    popupTitle.innerHTML =graphicData[6].title;
    popupPeriod.textContent = graphicData[6].tag[0];
    popupPhotoshop.textContent = graphicData[6].tag[1];
    popupIllustration.textContent = graphicData[6].tag[2];
    popupPlan.innerHTML =graphicData[6].contents;
    popupBg.addEventListener('click', function(){
        popupBg.style.display = ' none';
        body.style.overflow = 'auto';
    })
});

/* // 비디오를 클릭했을 때 실행되는 팝업 효과:작성중
const popupVideoBg = document.querySelector('.video_popup_bg');
const popupVideo = document.querySelector('.popup_video');
console.log(popupVideoBg, popupVideo);

// 클릭했을 때, 들어갈 내용 준비
const videoData = [{
    innerHTML:'<iframe width="1335" height="751" src="https://www.youtube.com/embed/_oaYUoU-9Y8" title="2021 국내산 우유·치즈 9초컷 광고 콘테스트 후보7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
},{
    innerHTML:'<iframe width="1335" height="751" src="https://www.youtube.com/embed/S4045IyacbI" title="Stanley Holiday Collection Promotion Video ✨" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
},{
    innerHTML:'<iframe width="1335" height="751" src="https://www.youtube.com/embed/au7PqaG6JME" title="Apple Music Promotion Video 🎧" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
},{
    innerHTML:'<iframe width="458" height="815" src="https://www.youtube.com/embed/r-IntHLKmak" title="European Bread Intro Motion 🍞" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
}]

// 대상선택
const thumbnailV = document.querySelectorAll('.video_swiper .swiper-wrapper .swiper-slide') */