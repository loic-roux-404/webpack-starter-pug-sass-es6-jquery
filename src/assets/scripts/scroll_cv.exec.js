import IScroll from 'iscroll/build/iscroll-probe';
//import bodymovin from 'bodymovin/build/player/bodymovin.min';

//scroll reveal load svg anim
//var bm = document.getElementById('bm');

// Set up our animation 

// const animData = {
//   container: bm,
//   renderer: 'svg',
//   autoplay: true,
//   loop: true,
//   animationData: require('../json/ae/data.json')
// };


//let circle = document.querySelectorAll('circle');
 //         let data = circle.dataset.level;

/*get width and divide it to get a more earlier event*/
/*ANIMATIONS CV*/
/* animation logos*/
let cvWrapper = {
  iscroll: new IScroll('#wrapper', {
    scrollX: true,
    scrollY: true,
    click: true,
    snap:true,
    momentum: false,
    snapSpeed: 200,
    eventPassthrough: true,
    probeType: 3
  }),
  animes: {
    anime0: anime({
      targets: '.bg-cv .col-6',
      scale: [1, 1.2, 1],
      rotate: [0, '-20deg', '20deg', 0],
      duration: 2000,
      loop: 1,
      delay: function (_, i) {
        return 200 + (i * 300);
      },
      autoplay: false
    }),

    /*====animation 1 section 2 coming from top*/
    anime1: anime.timeline({
        autoplay: false,
        delay: 400,
        loop: 1
      }).add({
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
        delay: 0,
      }),
    /*==========animation2 section 3======*/
    anime2: anime.timeline({
        autoplay: false,
        delay: 500,
        loop: false
      }).add({
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
        loop: false
      }),
    /*==========animation 3 section 4======*/
    anime3: anime.timeline({
        autoplay: false,
        delay: 300,
        loop: 1
      }).add({
        targets: '.animate.timeline2-1',
        scale: [0, 1],
      }).add({
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
        loop: 1
      }),
    /*animation 4*/
    anime4: anime.timeline({
        autoplay: false,
        delay: 300,
        loop: 1
      }).add({
        targets: '.tools li circle',    
        strokeDasharray:function(el){
          return el.dataset.start +",20000";
        },
        duration: 1700,
        delay: function (_, i) {
          return i * 130;
        },
        easing: "easeInExpo"
      })
      .add({
        targets: '.tools',
        opacity: {
          value: [0.8, 1],
          easing: "easeInExpo"
        },
        duration: 200
      }),

  },
  //methods
  activeP: function () {
    var activePage = this.iscroll.currentPage.pageX;
    return activePage;
  },
  myscroll: function () {
    /*events*/
    var windowWidth = window.innerWidth;
    //console.log(windowWidth);
    let pageVisible = this.activeP();
    let Ipage = () => {
      pageVisible = this.activeP();
    };

    const anm = this.animes;
    //console.log(this.iscroll);
    /*section 1*/
    let it = 0;
    this.iscroll.on('scroll', (e) => {
      Ipage();
      //get object pageX element with page number start to 0
      //console.log(pageVisible);
      if (pageVisible == 0 && it < 1) {
        //anime1.play();
        it = 1;
        Ipage();
      } else if (pageVisible == 1 && it < 2) {
        anm.anime0.play();
        anm.anime1.play();
        it = 2;
        Ipage();
      } else if (pageVisible == 2 && it < 3) {

        anm.anime2.play();
        it = 3;
        Ipage();
      } else if (pageVisible == 3 && it < 4) {
        anm.anime3.play();
        it = 4;
        Ipage();
      } else if (pageVisible == 4 && it < 5) {
        anm.anime4.play();

        it = 5;
        Ipage();
        //iframe lazy load
        let iframe = require('../../content/content.json').focus.spotify;
        document.getElementsByClassName('lazy-iframe')[0].innerHTML = iframe;
      } else {
        return false;
      }
    });
  },

  arrow: function () {
    //console.log(this);
    const anm = this.animes;
    const iscroll = this.iscroll;

    var Ipage = () => {
      var pageVisible = this.activeP();
    };

    document.querySelector('.round-arrow').onclick = function () {
      setTimeout(function () {
        anm.anime1.play();
        anm.anime0.play();
        iscroll.scrollToElement(document.querySelector('#section-2'));

        Ipage();
      }, 200);
    };
  },
};

// export const svg1 = () => {
//   var anim = bodymovin.loadAnimation(animData);
// };

const loaded = () => {
  //call methods
  cvWrapper.myscroll();
  //click methods
  cvWrapper.arrow();
  //cvWrapper.indicators();
};


function isPassive() {
  var supportsPassiveOption = false;
  try {
      addEventListener("test", null, Object.defineProperty({}, 'passive', {
          get: function () {
              supportsPassiveOption = true;
          }
      }));
  } catch(e) {}
  return supportsPassiveOption;
}
      

document.querySelector('#wrapper').addEventListener('touchstart touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
	capture: false,
	passive: false
} : false);
 document.querySelector('#wrapper').addEventListener("touchstart touchmove",function (e) { e.preventDefault(); }, false);



window.onload = function () {
  loaded();
  //svg1();
};
