
//define close and pop up variable
var shelterClose = document.getElementById('shelter_close'),
  dialogClose = document.getElementById('dialog_close'),
  openPop = document.getElementById('open_pop'),
  fixedPop  = document.getElementById('fixed_pop'),
  dialogPop = document.getElementById('dialog_pop'),
  jumpPop = document.getElementById('jump_pop');
//define copy wx number variable
var wxArray = ['110','111','112'];
var defaultIndex = 0;
var switchSecond = 5;
var isFirst = false;
var wxElement = document.getElementById('wx');
var article = document.getElementById('article');

var int = window.setInterval(wxSwitch,1000*switchSecond);

//initial load method
window.onload = (function () {
  wxElement.innerHTML = wxArray[defaultIndex];
  article.innerHTML = wxArray[defaultIndex];
});

//pop up dialog
fixedPop.onclick = function () {
  ShowHide(true,shelterClose,dialogPop);
};

openPop.onclick = function () {
  ShowHide(true,shelterClose,dialogPop);
};

jumpPop.onclick = function () {
  ShowHide(true,shelterClose,dialogPop);
};

//close dialog
function closeFixed() {
  var fixed = document.getElementById('fixed_id');
  fixed.style.display = 'none';
}

shelterClose.onclick = function () {
  ShowHide(false,shelterClose,dialogPop);
};

dialogClose.onclick = function () {
  ShowHide(false,shelterClose,dialogPop);
};

//close and pop up common code
function ShowHide(Boolean,item1,item2) {
  for(var i = 1, len = arguments.length; i< len; i++){
    if(Boolean){
      arguments[i].style.display="block";
    }else{
      arguments[i].style.display="none";
    }
  }
}

function copyArticle(id){
  const range = document.createRange();
  range.selectNode(document.getElementById(id));

  const selection = window.getSelection();
  if(selection.rangeCount > 0) selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand('copy');alert("已复制好，可贴粘。");
}

// document.getElementById('copy').addEventListener('click', copyArticle, false);

//this method order to copy current show wx number
function wxSwitch() {
  defaultIndex ++;
  if(isFirst) {
    isFirst = false;
    defaultIndex --;
  }
  wxElement.innerHTML = wxArray[defaultIndex];
  article.innerHTML = wxArray[defaultIndex];
  if(defaultIndex === wxArray.length -1) {
    defaultIndex = 0;
    isFirst = true;
  }
}

window.onbeforeunload= (function(e){
  clearInterval(int);
});
