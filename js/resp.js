burger=document.querySelector('.burger');
navList=document.querySelector('.nav-list');
rightNav=document.querySelector('.rightNav');

burger.addEventListener('click',()=>{
 rightNav.classList.toggle('v-class');
 navList.classList.toggle('v-class');
 navList.classList.toggle('h-nav');
 rightNav.classList.toggle('h-nav');
});