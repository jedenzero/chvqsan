target=null;
hover=0;
for(i of document.querySelectorAll('.showing')){
  i.addEventListener('mouseenter',footnote_hover);
  i.addEventListener('click',footnote);
  i.addEventListener('touchstart',footnote);
  i.addEventListener('mouseenter',reset);
  i.addEventListener('mouseleave',reset);
}
document.addEventListener('click',reset);
document.addEventListener('touchstart',reset);

function footnote_hover(){
  this.className='showing-clicked';
  this.nextSibling.className='showed-visible';
  target=this;
  hover=1;
}
function footnote(event){
  event.stopPropagation();
  this.className='showing-clicked';
  this.nextSibling.className='showed-visible';
  target=this;
  hover=0;
}
function reset(event){
  for(i of document.querySelectorAll('.showed-visible')){
    if((event.type==='mouseenter'&&target.nextSibling===i)||(event.type==='mouseleave'&&hover===0&&target.nextSibling===i)){
      continue;
    }
      i.previousSibling.className='showing';
      i.className='showed';
      console.log('reset');
  }
}
