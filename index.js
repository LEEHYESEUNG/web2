$(function(){
// a 태그 click 이벤트
    $('a').click(function(e){
      e.preventDefault();
    });
    
// 언어선택 영역
    $('#btnGo').click(function(){
      url = $('#lang').val();
      window.open(url)
    })

// swiper
  const visualTop = new Swiper(".visual-slide1", {
    spaceBetween: 30,
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      // 컨트롤하고나서 움직일 것인가 아닐것인가
    },
      pagination: {
        el: ".visual-slide1 .fraction",
        type: "fraction",
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
  });

  const visualBottom = new Swiper(".visual-slide2", {
    spaceBetween: 30,
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".visual-slide2 .fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  // 2번 슬라이드는 정지인 상태
  visualBottom.autoplay.stop();

// visual 슬라이드 선택 영역
$('.visual-area .link-slide').click(function(e){
  e.preventDefault();
  $(this).parent().addClass('active').siblings().removeClass('active');

  if ($(this).siblings().hasClass('visual-slide1')) {
    
    visualBottom.autoplay.stop(); 

    if ($('.visual-slide1 .autoplay').hasClass('active')) {
      visualTop.autoplay.stop();
    } else{
      visualTop.autoplay.start();
    }

  } else {

    visualTop.autoplay.stop();
    
    if ($('.visual-slide2 .autoplay').hasClass('active')) {
      visualBottom.autoplay.stop();
    } else{
      visualBottom.autoplay.start();
    }
  }
});

   // 재생 버튼 클릭 시 이벤트 
    $('.sc-visual .visual-slide1 .autoplay').click(function(e){
      e.preventDefault();
    
      if ($(this).hasClass('active')) {  
        visualTop.autoplay.start();
        $(this).removeClass('active');
      } else {
        visualTop.autoplay.stop();
        $(this).addClass('active');
      }
    });
    $('.sc-visual .visual-slide2 .autoplay').click(function(e){
      e.preventDefault();
    
      if ($(this).hasClass('active')) {
        visualBottom.autoplay.start();
        $(this).removeClass('active');
      } else {
        visualBottom.autoplay.stop();
        $(this).addClass('active');
      }
    });

// 하단 광고 슬라이드 영역
 const adSlide = new Swiper(".ad-slide", {
    slidesPerView: 3,
    spaceBetween: 43,
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      // disableOnInteraction : 컨트롤 후 재생여부 (false:움직임 / true:안움직임)
    },
    pagination: {
      el: ".ad-area .fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".ad-area .next",
      prevEl: ".ad-area .prev",
    },
  });

$('.ad-area .autoplay').click(function(e){
  e.preventDefault();

  if ($(this).hasClass('active')) {
    adSlide.autoplay.start();
    $(this).removeClass('active');
  } else {
    adSlide.autoplay.stop();
    $(this).addClass('active');
  }
});

// 하단 기관 선택 영역
$('.organization-list .btn-organization').click(function(){

  if ($(this).hasClass('on')) {
    $('.btn-organization').removeClass('on');
    $('.sub-organization').stop().slideUp();    
  } else {
    $('.btn-organization').removeClass('on');  
    $(this).addClass('on');
    $('.sub-organization').stop().slideUp();    
    $(this).siblings('.sub-organization').stop().slideDown();
  }
});


// tab 이동
$('.sub-list li:first-child a').keydown(function(e){

  key = e.keyCode;

  if (key == 9 && e.shiftKey) {
    $('.btn-organization').removeClass('on');
    $('.sub-organization').stop().slideUp();    
  }
});

$('.sub-list li:last-child a').keydown(function(e){

  key = e.keyCode;

  if (key == 9 && !e.shiftKey) {
    $('.btn-organization').removeClass('on');
    $('.sub-organization').stop().slideUp();    
  }

});
    
  //  상위버튼 영역
  $(window).scroll(function(){
      
    curr = $(this).scrollTop();
    
    if( curr >= 150 ){
      $('.scroll-btn').addClass('show');
    }else{
      $('.scroll-btn').removeClass('show');
    }
  });

  $('.scroll-btn').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},300);
  })

});
