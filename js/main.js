$(function(){

    /*** #gnb toggle ***/
    // 1. 열기: #toggle-btn 클릭시 #gnb on
    $('#btn-menu').click(function(){
      $('#gnb-menu').addClass('on');
    });
    // 2. 닫기: #btn-close 클릭시 #gnb 닫음
    $('#btn-close').click(function(){
      $('#gnb-menu').removeClass('on');
    });

// slider
let num = 0  // 이미지 번호

function changeSlider(img_num) {
// 공식 = 높이값(세로기준) * 이미지 번호
let img_height = 1200 * img_num;

$('.slider .sliders').css({
  transform: `translateX(${-img_height}px)`
})
}


setInterval(function(){
    num++;
    if(num > 2) {num = 0; }
    changeSlider(num);
}, 5000)

  }); 