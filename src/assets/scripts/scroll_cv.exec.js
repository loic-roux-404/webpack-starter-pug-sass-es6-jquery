$(document).ready(function () {

  //scroll reveal load svg anim
  var bm = document.getElementById('bm');

  function svg1() {

    // Set up our animation 

    var animData = {
      container: bm,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      path: 'json/ae/data.json'
    };
    var anim = bodymovin.loadAnimation(animData);

  }

  //touch iscroll
  //
  var myScroll;

  function loaded() {

    myScroll = new IScroll('#wrapper', {
      scrollX: true,
      scrollY: true,
      click: true,
      momentum: false,
      snap: true,
      snapSpeed: 400,
      eventPassthrough: true,
      probeType: 3,
      scrollbars: 'custom',
      interactiveScrollbars: true,
      bounceEasing: {
        style: 'quadratic',
        fn: function (k) {
          return k;
        }
      }
    });
    $('.round-arrow').on('click', function () {
      //alert(pos);
      myScroll.scrollToElement(document.querySelector('#section-2'));
      $('.arrow').removeClass('bounceAlpha');


    });

    /*get width and divide it to get a more earlier event*/

    /*ANIMATIONS CV*/
    /* animation logos*/

    var anime0 = anime({
      targets: '.bg-cv .col-6',
      scale: [1, 1.2, 1],
      rotate: [0, '-20deg', '20deg', 0],
      duration: 2000,
      loop: 1,
      delay: function (_, i) {
        return 200 + (i * 300);
      },
      autoplay: false
    });



    /*====animation 1 section 2 coming from top*/
    var anime1 = anime.timeline({
      autoplay: false,
      delay: 800
    });
    anime1.add({
        targets: '#section-2 .animate.animate-1',
        translateY: {
          value: [50, 0],
          duration: 700,
          easing: 'easeInOutBack',
          delay: function (_, i) {
            return i * 70;
          },
        },
        opacity: {
          value: [0, 1],
          duration: 150,
          delay: 200,
          easing: 'easeInQuint'
        },
      })
      .add({
        targets: '#section-2 .animate.animate-1_1',
        translateY: [-100, 0],
        opacity: {
          value: [0, 1],
          duration: 600
        },
        delay: 0
      });

    /*==========animation2 section 3======*/
    var anime2 = anime.timeline({
      autoplay: false,
      delay: 500
    });

    anime2
      .add({
        targets: '#section-3 .title',
        scale: [0, 1],
        translateY: ['-90%', '-50%'],
        translateX: ['-45%', '-50%'],
        elasticity: 200,
        easing: 'easeOutExpo'
      })

      .add({
        targets: '.animate.timeline1-2',
        scale: {
          value: [0, 1],
          duration: 250,
          delay: function (_, i) {
            return i * 90;
          }
        },
        delay: 700,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.animate.timeline1-1',
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: 'easeInOutBack',
        offset: '-=400',

        duration: function (el, i, l) {
          return 200 + (i * 130);
        },
        elasticity: function (el, i, l) {
          return (140 + i * 190);
        },
        delay: function (_, i) {
          return (i * 90);
        },
      });
    /*==========animation 3 section 4======*/
    var anime3 = anime.timeline({
      autoplay: false,
      delay: 300
    });

    anime3
      .add({
        targets: '.animate.timeline2-1',
        scale: [0, 1],
      })

      .add({
        targets: '.animate.timeline2-2',
        scale: {
          value: [0, 1],
          duration: 250,
          delay: function (_, i) {
            return i * 90;
          }
        },
        delay: 700,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.animate.timeline2-3',
        scale: {
          value: [0, 1],
          duration: 250,
          delay: function (_, i) {
            return i * 90;
          }
        },
        delay: 700,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.animate.timeline2-4',
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: 'easeInOutBack',
        duration: function (el, i, l) {
          return 300 + (i * 177);
        },
        elasticity: function (el, i, l) {
          return (100 + i * 120);
        },
        delay: function (_, i) {
          return i * 50;
        },
      });


    /*events*/
    var windowWidth = window.innerWidth;
    //console.log(windowWidth);

    var pageVisible = myScroll.currentPage.pageX;

    /*section 1*/
    myScroll.on('scroll', function () {
      pageVisible = myScroll.currentPage.pageX;
      //get object pageX element with page number start to 0
      //console.log(pageVisible);
      if (pageVisible == 0) {
        //anime1.play();
        pageVisible = myScroll.currentPage.pageX;
      }
      if (pageVisible == 1) {
        anime0.play();
        anime1.play();
        //anime1.play();
        pageVisible = myScroll.currentPage.pageX;
      }
      if (pageVisible == 2) {
        anime2.play();
        //anime2.play();
        pageVisible = myScroll.currentPage.pageX;
      }
      if (pageVisible == 3) {
        anime3.play();
        //anime2.play();
        pageVisible = myScroll.currentPage.pageX;
      }
    });

    // /*section 2*/
    // myScroll.on('scrollEnd', function () {
    // 	if ( this.x > -windowWidth*1.9) {
    // 		console.log(this.x);
    // 		anime2.play();
    // 	}
    // }); 

    $('.round-arrow').click(function () {
      setTimeout(function () {
        anime1.play();
        anime0.play();
        pageVisible++;
      }, 200);


    });
    $('.iScrollIndicator').on('click', function (e) {

      e.preventDefault();
      setTimeout(function () {
        anime2.play();
        anime3.play();
      }, 400);

    });

  }


  //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

  window.onload = function () {
    loaded();
    svg1();
  };





});
