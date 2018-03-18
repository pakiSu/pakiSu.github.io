
var qqArray = ['110','111','112'];
var defaultIndex = 0;
var switchSecond = 5;
var isFirst = false;
var qqElement = document.getElementById('qq');

var int = window.setInterval(qqSwitch,1000*switchSecond);

// var out =  window.setTimeout( function () {
//   qqElement.innerHTML = qqArray[defaultIndex];
// },0);


window.onload = (function () {
  qqElement.innerHTML = qqArray[defaultIndex];
});

function qqSwitch() {
  defaultIndex ++;
  if(isFirst) {
    isFirst = false;
    defaultIndex --;
  }
  qqElement.innerHTML = qqArray[defaultIndex];
  if(defaultIndex === qqArray.length -1) {
    defaultIndex = 0;
    isFirst = true;
  }
}


function copyText() {
  var textArea = document.createElement('textarea');
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.innerHTML = qqElement.innerHTML;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    var isSuccessful = document.execCommand('copy',false,null);
    console.log('copy successful:' + isSuccessful);
  } catch (err) {
    console.log('failed');
  }
  document.body.removeChild(textArea);
}


window.onbeforeunload= (function(e){
  qqElement = null;
  clearInterval(int);
  // clearTimeout(out)
});
