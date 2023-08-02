// 스크롤 올리시 해더 나옴
let prevScroll = window.scrollY;
console.log(prevScroll);

$(window).on('scroll', () => {
  // 스크롤시 변수에 저장
  let currentScroll = window.scrollY;
  console.log('currentScroll', currentScroll);
  console.log('1prevScroll', prevScroll);

  // 이전 스크롤 값이 크면 true, 스크롤을 올리면 header 보임
  if (prevScroll > currentScroll) {
    // $('header').show();
    $('.header').css({ top: 0 });
  } else {
    // 이후 스크롤 값이 크면 false, 스크롤을 내리면 header 숨김
    // $('header').hide();
    $('.header').css({ top: -150 });
  }

  // prev에 현재 스크롤 값 대입
  prevScroll = currentScroll;
  console.log('2prevScroll', prevScroll);
});

// menu 버튼
$(function () {
  $('.checkbox').on('click', () => {
    $('.header').toggleClass('active');
    $('.hamburger_btn').toggleClass('active');
    $('.menu').slideToggle(); // == display: block
  });
});

// 스크롤 이벤트
window.onscroll = function () {
  scrollRotate(); // DOM에서 함수 onscroll(),를 호출할 함수 를 만듭니다 scrollRotate()
};

function scrollRotate() {
  // id를 통해 reload 요소를 찾으면 스크롤하여 회전하고 image변수에 저장합니다 .
  let smile = document.getElementById('reload');
  // 문서가 현재 세로축을 따라 스크롤되는 픽셀수를 반환하는 Window.pageYOffset 속성을 적용 합니다.
  smile.style.transform = 'rotate(' + window.pageYOffset / -15 + 'deg)';

  let rombo = document.getElementById('rel');
  // 문서가 현재 세로축을 따라 스크롤되는 픽셀수를 반환하는 Window.pageYOffset 속성을 적용 합니다.
  rombo.style.transform = 'rotate(' + window.pageYOffset / 15 + 'deg)';
}
