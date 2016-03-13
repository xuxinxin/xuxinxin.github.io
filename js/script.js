(function($){

  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  var path = window.location.pathname;
  switch (true){
    case path.indexOf('/arch') != -1 :
          $('a[href="/archives"]').addClass('nav-current');
          break;
    case path.indexOf('/cate') != -1 :
          $('a[href="/categories"]').addClass('nav-current');
          break;
    case path.indexOf('/tag') != -1 :
          $('a[href="/tags"]').addClass('nav-current');
          break;
    default :
          $('a[href="/"]').addClass('nav-current');
          break;
  }

  // Mobile nav
  $('#main-nav-toggle').click(function () {
    $('#header').toggleClass('mobile-on');
  });

  $('.hide-button').click(function (){
    $('#sidebar').toggleClass('sidebar-hide');
    if($('#main').hasClass('ml-has-sidebar')){
      $('#main').removeClass('ml-has-sidebar');
      $('#main').addClass('ml-no-sidebar');
    }else{
      $('#main').removeClass('ml-no-sidebar');
      $('#main').addClass('ml-has-sidebar');
    }
  })

  $('.menu-toggle').click(function(){
    $('#sidebar').addClass('sidebar--open');
  })

  $('.close-button').click(function(){
    $('#sidebar').removeClass('sidebar--open');
  })

  $('#search-area').on('keyup',function (event) {

    if(event.keyCode == 13){
      window.open("http://www.google.com//#newwindow=1&safe=strict&q="+$(this).val()+' site:xuxinxin.github.io', "topFrame");
    }
  })
})(jQuery);