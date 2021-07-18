const foregroundColor = document.currentScript.getAttribute('foregroundColor') ? document.currentScript.getAttribute('foregroundColor') : 'limegreen';
const backgroundColor = document.currentScript.getAttribute('backgroundColor') ? document.currentScript.getAttribute('backgroundColor') : 'white';
const barHeight = document.currentScript.getAttribute('barHeight') ? document.currentScript.getAttribute('barHeight') : '4';

// HTML INJECTION
document.body.innerHTML = '<div class="read-progression"><div class="progress-container"><div class="progress-bar" id="psbar"></div></div></div>' + document.body.innerHTML;

// CSS INJECTION
const css = '.read-progression {  position: fixed;  top: 0;  z-index: 1;  width: 100%;  background-color: '+backgroundColor+';} .progress-bar {  height: '+barHeight+'px;  background-color: '+foregroundColor+';  width: 0%;}';
const head = document.head || document.getElementsByTagName('head')[0];
const style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

// Scroll progress visualization
function progress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("psbar").style.width = scrolled + "%";
}

window.onscroll = function() {progress()};
