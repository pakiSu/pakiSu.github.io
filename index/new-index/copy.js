
//define copy wx number variable
var defaultWx = 'w17085720213';
var wxArray = ['w17085720213','2423','21312321'];
var defaultIndex = 0;
var switchSecond = 5;
var isFirst = false;
var wxElement = document.getElementById('wx');
var wxs = document.getElementsByClassName('wxNum');

var int = window.setInterval(wxSwitch,1000*switchSecond);

//initial load method
window.onload = (function () {
  wxElement.innerHTML = wxArray[defaultIndex];
  for(var i = 0; i < wxs.length; i++) {
    wxs[i].innerHTML = defaultWx;
  }
});

function copyArticle(id){
  const range = document.createRange();
  range.selectNode(document.getElementById(id));

  const selection = window.getSelection();
  if(selection.rangeCount > 0) selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand('copy');alert("已复制好，可贴粘。");
}

function wxSwitch() {
  if(wxArray.length > 1) {
    defaultIndex ++;
    if(isFirst) {
      isFirst = false;
      defaultIndex --;
    }
    wxElement.innerHTML = wxArray[defaultIndex];
    if(defaultIndex === wxArray.length -1) {
      defaultIndex = 0;
      isFirst = true;
    }
  }
}

window.onbeforeunload= (function(e){
  clearInterval(int);
});
