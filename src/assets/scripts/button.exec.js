
$(function(){

    $('.btn-6')
    .on('mouseenter', function(e) {
     var parentOffset = $(this).offset(),
     relX = e.pageX - parentOffset.left,
     relY = e.pageY - parentOffset.top;
     $(this).find('span').css({top:relY, left:relX});
   })
    .on('mouseout', function(e) {
     var parentOffset = $(this).offset(),
     relX = e.pageX - parentOffset.left,
     relY = e.pageY - parentOffset.top;
     $(this).find('span').css({top:relY, left:relX});
   });



  var height = '200%',
  width='100%';

  var animeClick = anime.timeline({autoplay:false,delay:0});


  animeClick.add({

    targets: '.back-desc',
    width:{
      value:[5,width],
      duration:400,
    },
    height:{
      value:[5,height],
      duration:400
    },
    translateX:{
      value:[-150,0],
      duration:500,
      delay:100
    },
    borderRadius:{
      value:0,
      delay:200,
      duration:500,
    },
    opacity:[0.85,1],
    
    easing:'easeInOutCubic',
    
  })
  .add({

    targets: '.close',
    rotate:{
      value:['-90deg',0],
      elasticity:400,
      easing:'easeInOutCubic',
    },
    opacity:{
      value:[0,1],
      delay:100,
      easing: 'easeInOutExpo',
    },
    offset:-100

  })
  .add({
    targets: '.desc .container>*',
    opacity:{
      value:[0,1],
      delay:function(_, i) {
        return i * 40;
      },
      duration:500,
      easing: 'easeInExpo',
    },
    translateY:{
      value:[200,0],
      delay:function(_, i) {
        return i * 60;
      },
      elasticity:200,
      easing:'easeOutCubic',
      duration:260
    },
    offset:'-=600',
  });



  $('.video-bloc-1').each(function(){

    $(this).on('click',function(e){
      e.preventDefault();

      offset = $('#realisations').offset();
      var viewport = offset.top - $(document).scrollTop();
      viewport += 40;
      //console.log(viewport);

      $('.back-desc').css({
       top:-viewport,
       left:0,
       display:'block'
     });

      animeClick.restart();
      animeClick.play();

      smoothScroll(ns,nd);
      $('html,body').css({
        overflow:'hidden'
      });

    });
  });


  $('.close-wrapper').on('click',function(e) {
    e.preventDefault();
    
    // vidTimeline.play();
    // vidTimeline.reverse();

    animeClick.play();
    animeClick.reverse();


    $('html,body').css({
      overflow:'auto'
    });
    smoothScroll(s,d);

    setTimeout(function(){$('.desc').css({
      display:'none'
    });},1500);



  });





});






