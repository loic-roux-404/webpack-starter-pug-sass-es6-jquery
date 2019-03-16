import { loadTiming } from "../../app";

//import assign from 'core-js/modules/es6.object.assign';


let $i = 0;
document.querySelectorAll(".video-bloc-1").forEach(function (el) {

  var descToggle = ".desc-" + $i;
  //console.log(descToggle);
  /*DEFINE ANIMATIONS*/


  /*REALISATIONS CLICK TO SHOW PROJECT DESC*/
  el.addEventListener("click", function (e) {
    //console.log(descToggle);
    e.preventDefault();

    document.querySelector(descToggle).style.display =  "block";
  
  });
  $i++;
});



function toAnime(animeElement) {
  console.log(animeElement.children);
  var animeToggleBut = anime({
    targets: animeElement.children,
    translateZ: {
      value: [-60, 0],
      duration: 430,
      easing: "easeOutCubic",
    },
    translateX: {
      value: [-130, 0],
      duration: 380,
      easing: "easeInSine"
    },
    translateY: {
      value: [100, 0],
      duration: 400,
      easing: "easeOutCubic"
    },
    rotateY: {
      value: ["70deg", 0],
      duration: 400,
    },
    opacity: {
      value: [0, 1],
      duration: 380,
      easing: "easeInQuart"
    },
    elasticity: 0,
    delay: function (el, i) {
      return i * 70;
    },
    loop: false,
    autoplay: false,
  });

}

$('.game').click(function (e) {
  e.preventDefault();
  console.log($(this).data("state"));
  if ($(this).data("state") == 0) {
    $('.game-wrap').css({
      display: 'flex'
    });
    $('.site-wrap').css({
      display: 'none'
    });
  }
  $('.site').data("state", 0);
});
$('.site').click(function (e) {
  e.preventDefault();
  if ($(this).data("state") == 0) {
    $('.site-wrap').css({
      display: 'flex'
    });
    $('.game-wrap').css({
      display: 'none'
    });
    $('.game').data("state", 0);
  }

});


document.addEventListener("DOMContentLoaded", function () {
  var lazyEl = [].slice.call(document.querySelectorAll(".lazy"));

  // if ("IntersectionObserver" in window) {
  //   var lazyObserver = new IntersectionObserver(function (entries, observer) {


  setTimeout(function () {
    lazyEl.forEach(function (entry) {
      //console.log(entry);
      //console.log(entry.tagName);

      //if (entry.isIntersecting) {

      var entrytag = entry.tagName;
      if (typeof entrytag === "string" && entrytag === "IMG") {
        //console.log("entered img");
        for (var image in entry) {
          var imageSrc = image.dataset.src;
          image.src = imageSrc;
        }
        //entry.target.load();
        entry.classList.remove("lazy");
        //lazyObserver.unobserve(entry.target);

      } else if (typeof entrytag === "string" && entrytag === "VIDEO") {
        //console.log("entered video");
        for (var source in entry.children) {
          var videoSource = entry.children[source];
          if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
            videoSource.src = videoSource.dataset.src;
          }
        }

        entry.load();
        entry.classList.remove("lazy");
        //lazyObserver.unobserve(entry.target);
      } else {
        //console.log("background");
        entry.classList.remove("lazy");
        entry.classList.add("visible");
        //lazyObserver.unobserve(entry.target);
      }
    });
    // });
  },loadTiming*2);


  // setTimeout(function () {
  //   lazyEl.forEach(function (lazyEls) {
  //     lazyObserver.observe(lazyEls);
  //   });


  // }, 700);
  //}

});
