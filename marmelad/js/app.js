'use strict';

/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */
function setViewportProperty(){
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}
window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * Полифил для NodeList.forEach(), на случай если забыл про IE 11
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 * ========================================================================== */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/* ^^^
 * Scripts
 * ========================================================================== */

//=require ../_blocks/**/*.js

function fixedHeaderPanelPanel() {

  const headerTopPanel = document.querySelector(".js-header-top-panel");
  const topPanel = document.querySelector(".top-panel");
  const topPanelOffsetTop = topPanel.offsetTop;

  window.addEventListener("scroll", function() {

    if (window.scrollY > topPanelOffsetTop) {
      headerTopPanel.classList.add("_is-fixed");
      
    } else {
      headerTopPanel.classList.remove("_is-fixed");
      headerTopPanel.style.top = 0;
    }

    let oldScroll = this.oldScroll || 0;
    let newScroll = this.scrollY;

    if (newScroll < oldScroll) {
      headerTopPanel.style.top = 0;
    }

    this.oldScroll = newScroll;

    if (newScroll >= oldScroll) {
      headerTopPanel.style.top = `${-topPanelOffsetTop}px`;
    }

    if (newScroll == 0) {
      headerTopPanel.classList.remove("_is-fixed");
    }

  });

}

fixedHeaderPanelPanel();


new WOW().init();