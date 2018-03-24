
//define close and pop up variable
var shelterClose = document.getElementById('shelter_close'),
  dialogClose = document.getElementById('dialog_close'),
  openPop = document.getElementById('open_pop'),
  fixedPop  = document.getElementById('fixed_pop'),
  dialogPop = document.getElementById('dialog_pop'),
  footerPop = document.getElementById('footer-pop'),
  jumpPop = document.getElementById('jump_pop');
//define copy wx number variable
var wxArray = ['110','111','112'];
var defaultIndex = 0;
var switchSecond = 5;
var isFirst = false;
var wxElement = document.getElementById('wx');
var article = document.getElementById('article');
var isFooter = false;

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

footerPop.onclick = function () {
  isFooter = true;
  copyText();
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


//this method order to copy current show wx number
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
  textArea.innerHTML = isFooter? article.innerHTML:wxElement.innerHTML;
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
