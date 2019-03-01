import {scrollToTop,s,d,ns,nd,loadTiming} from '../../app.js';
import {smoothScroll} from './smooth-scroll.exec';
// Wrap every letter in a span
$('.load-text').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});



$(window).on('load',function(){

 $('html,body,#main').css({
   'overflow-y':'hidden'
 })
 .removeClass('overflow-auto');

 //scrollToTop();
var loadtext = $('.load-text');

loadtext.fadeToggle(200,"easeOutQuart");

 $('body').addClass('bg-light');
 setTimeout(
  function(){
    $('.loadbar h1').fadeIn(300);
    $('.percentage').fadeIn(200);

  },300);

 var width = 100,
    perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = loadTiming;



    (function(){
      var words = [
      'WEB DESIGN',
      'Development',
      'COMMUNICATION',
      'LOïC ROUX',
      'Fullstack'


      ], i = 0;
      setInterval(function(){
        $('#changingword').fadeOut(function(){
          $(this).html(words[i=(i+1)%words.length]).delay(800).fadeIn(900);


        });

      }, 800);
    })();

    var PercentageID = $(".percentage"),
    start = 0,
    end = 27,
    durataion = time;
    animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {

      var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);

      var timer = setInterval(function() {
        current += increment;
                      //$(obj).text(current + "%");
                      $(obj).css({
                        'width':current + '%'
                      });
                        //obj.innerHTML = current;
                        if (current == end) {
                          clearInterval(timer);
                  //letter effect

                }
              }, stepTime);
    }

//======-- Fading Out Loadbar on Finised--======\\
// ======before end======\\

//portfolio write style effect and show
// Wrap every letter in a span

setTimeout(function(){

  $('.ml10').toggleClass('d-block');
  $('.ml10 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline({loop: false})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 3700,
    delay: function(el, i) {
      return 70 * i;
    }
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 4000,
    easing: "easeOutExpo",
    delay: 1000
  });

}, time-1000);
// end
setTimeout(function(){
  $('.preloader-wrap').fadeOut(1050);
  $('.loadbar h1').slideDown(600);
  $('#main').addClass('visible');
  $('header').addClass('visible');
  $('body').removeClass('bg-light');
  $('html,body').css({
    'overflow-y':'auto'
  });
  smoothScroll(s,d);
}, time);



});



