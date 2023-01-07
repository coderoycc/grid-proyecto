function scrolleo(){
   console.log(document.documentElement.scrollTop);
   let barra = document.getElementsByClassName('barra')[0];
   if(document.documentElement.scrollTop >= 170){
      barra.style.position='fixed';
      barra.style.zIndex = 100;
      barra.style.top = 0;
   }else{
      barra.style.removeProperty('position');
      barra.style.removeProperty('top');
   }
}
window.onscroll = function(){scrolleo()}
