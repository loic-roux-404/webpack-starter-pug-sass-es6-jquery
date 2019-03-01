//import 'imports-loader?this=>window&define=>false';
function importAll(r) {
  r.keys().forEach(r);
}
// Styles
require.context("./assets/styles",true,/\.main\.scss$/);
require('./assets/styles/bootstrap/custom.scss');
//custom scripts
require.context("./assets/fonts", true, /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/);
importAll(require.context("./assets/images", true, /\.(png|jpg|gif)$/));

/*scrollToTop essential function*/
document.querySelector('.toTopButton').addEventListener("click", scrollToTop, false);

export function scrollToTop() {
  $("html, body").animate({
    scrollTop: 0
  }, 700);
}
var loadTiming = 1000;
/*smooth scroll settings*/
var s = 1 / 2,
  d = 85;
/*no scoll*/
var ns = 0,
  nd = 0;
export{
  s,
  d,
  ns,
  nd,
  loadTiming
};


//import './assets/scripts/scroll_cv.exec';
import * as smoothScroll from './assets/scripts/smooth-scroll.exec.js';
import * as load from './assets/scripts/load.exec.js';
import * as button from './assets/scripts/button.exec.js';
import * as scroll from './assets/scripts/scroll.exec.js';




document.addEventListener("DOMContentLoaded", function () {
  require.context('./assets/video/', true, /\.(mp4)(\?.*)?$/);
  console.log('video imported');

}, false);

$(document).ready(function () {
  console.log('bon app');
});








/*button lightbox realisation*/
