$(document).ready(function(){
  
  $(".main-screen_slider-control_item").click(function(){
    var item = $(this).data('item');
    $(".main-screen_slider-control_item").removeClass('active');
    $(this).addClass('active');
    $(".main-screen_slider-box_item").removeClass('active');
    $(".main-screen_slider-box_item[data-item="+item+"]").addClass('active');
  });
  
  $(".people_box-control_item").click(function(){
    var item = $(this).data('item');
    $(".people_box-control_item").removeClass('active');
    $(this).addClass('active');
    $(".people_box-item").removeClass('active');
    $(".people_box-item[data-item="+item+"]").addClass('active');
  });
  
 
  $(".header_menu-box_item").hover(function(){
    if ($(window).width() > 1019) {
    if($(this).find(".sub-menu").length > 0){
      var o = $(this).children(".sub-menu").width();
      var m = $(".header-menu-cont").width();
      var n = $(this).children(".sub-menu").position().left;
      if (o+n > m) {
        $(this).children(".sub-menu").addClass("right");
      }
      $(".header").addClass("open");
    } 
    }
  },function(){$(".header").removeClass("open");});
  
  $(".partners-control_botom").click(function(){
    $(this).toggleClass("close");
    $(".partners").toggleClass("close");
    $(".partners_box").slideToggle();
  });
  
  $(".header_menu-box_item").click(function(){
    if ($(window).width() < 1020) {
      $(this).toggleClass("open");
      $(this).children(".sub-menu").slideToggle();
    }
  });
  $(".header_menu-burger").click(function(){
    $(".header_menu-box").addClass("open");
  });
  $(".header_menu-box_close").click(function(){
    $(".header_menu-box").removeClass("open");
  });
  $(document).mouseup(function (e){ // событие клика по веб-документу
          var div = $("#mainheader_menubox"); // тут указываем ID элемента
          if (!div.is(e.target) // если клик был не по нашему блоку
              && div.has(e.target).length === 0) { // и не по его дочерним элементам
              div.closest("#mainheader_menubox").removeClass("open"); // скрываем его
          }
    });
  $(window).resize(function(){
    if ($(window).width() > 1019) {
      $(".header_menu-box.sub-menu").css("display","block"); 
    } else {$(".header_menu-box.sub-menu").css("display","none");}
  });
  
});