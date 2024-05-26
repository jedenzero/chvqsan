target=null;
for(i of document.querySelectorAll('.showing')){
  i.addEventListener('mouseenter',footnote_hover);
  i.addEventListener('click',footnote);
  i.addEventListener('touchstart',footnote);
  
  i.addEventListener('mouseleave',reset_hover);
  document.addEventListener('click',()=>reset(i));
  document.addEventListener('touchstart',()=>reset(i));
}
function footnote_hover(){
  this.className='showing-clicked';
  this.nextSibling.className='showed-visible';
  target=this;
}
function reset_hover(){
  if(target===this){
    this.className='showing';
    this.nextSibling.className='showed';
    console.log('reset-hv');
  }
}
function footnote(event){
  this.className='showing-clicked';
  this.nextSibling.className='showed-visible';
  target=this;
}
function reset(This){
  if(target===This){
    This.className='showing';
    This.nextSibling.className='showed';
    console.log('reset');
  }
}
