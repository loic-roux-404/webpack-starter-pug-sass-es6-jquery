import { loadTiming } from "../../app";

import assign from 'core-js/modules/es6.object.assign';


let $i = 0;
document.querySelectorAll(".video-bloc-1").forEach(function (el) {

  var descToggle = ".desc-" + $i;
  //console.log(descToggle);
  /*DEFINE ANIMATIONS*/


  /*REALISATIONS CLICK TO SHOW PROJECT DESC*/
  el.addEventListener("click", function (e) {
    //console.log(descToggle);
    e.preventDefault();

    document.querySelector(descToggle).style.display = "block";

  });
  $i++;
});



// let tempAnime = (elt, topush) => {

//   console.log(elt);
//   elt.forEach(function (el, i) {

//     let k = i + 1;
//     //i++;
//     topush.push(
//       anime({
//         targets: el,
//         opacity: {
//           value:[1,0],
//           duration: k % 2 ? 100 : 200,
//         },
//         easing: "easeInQuart",
//         delay: 0,
//         elasticity: 0,
//         loop: false,
//         autoplay: false,
//       }
//       )
//     );
//   });
// };

//console.log(animeGame);

let game = document.getElementsByClassName('game')[0],
  site = document.getElementsByClassName('site')[0],
  gameWrapper = document.getElementsByClassName('game-wrap')[0],
  siteWrapper = document.getElementsByClassName('site-wrap')[0],
  orgToggle, timing = 1000;

let animeGame = [], animeSite = [];

// tempAnime(gameWrapper.childNodes,animeGame);
// tempAnime(siteWrapper.childNodes,animeSite);


function toggleW(ev) {
  ev.preventDefault();

  if (ev.target.className.toString().match(/[^\s]+/gi)[1] === 'game' && ev.target.dataset.state == 0) {
    console.log("game");
    orgToggle = [gameWrapper, siteWrapper, animeGame, animeSite];

  } else {
    console.log("site");
    orgToggle = [siteWrapper, gameWrapper, animeSite, animeGame];
  }


  orgToggle[0].style.display = 'flex'; 
  orgToggle[1].style.display = 'none'; 



  // orgToggle[2].forEach(function (orgD) {
  //   console.log('show');
  //   orgToggle[0].style.display = 'flex'; 
  //   orgD.play();

  //   setTimeout(function () {
  //     orgD.restart();
  //   }, timing);
  // });

  // console.log(orgToggle[3][0].animations[0].animatable.target.parentNode);
  // orgToggle[3].forEach(function (orgH) {
  //   orgH.reverse();
  //   orgH.play();
  //   setTimeout(function () {
  //     orgToggle[1].style.display = 'none'; 
  //     orgH.restart();

  //   }, timing);
  // });
  //to hide

}

game.onclick = ev => toggleW(ev);
site.onclick = ev => toggleW(ev);



//lazy load images and videos
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
  }, loadTiming * 2);


  // setTimeout(function () {
  //   lazyEl.forEach(function (lazyEls) {
  //     lazyObserver.observe(lazyEls);
  //   });


  // }, 700);
  //}

});
