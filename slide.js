

// navigation
const hamburger = document.querySelector('#menu');
const menuClose = document.querySelector('#closebtn');
const logo = document.querySelector('#logo');
const navigation = document.querySelector('#navi');
const container = document.querySelector('#containerNav');
const screenCheck = window.matchMedia('(min-width:800px)');

hamburger.addEventListener('click', ()=>{
  hamburger.classList.remove('open');
  hamburger.classList.add('close');
  menuClose.classList.remove('close');
  menuClose.classList.add('open');
  logo.classList.remove('open');
  logo.classList.add('close');
  container.classList.remove('navigation');
  container.classList.add('cover');
  navigation.classList.add('open');
  navigation.classList.add('white');



});

 screenCheck.addEventListener('change', (e)=>{
   
   if(e.matches){
    hamburger.classList.remove('open');
  navigation.classList.remove('close');
   
   }else{
     navigation.classList.remove('open');
   }
  
 });

menuClose.addEventListener('click',()=> {
  hamburger.classList.remove('close');
  hamburger.classList.add('open');
  menuClose.classList.remove('open');
  menuClose.classList.add('close');
  logo.classList.remove('close');
  logo.classList.add('open');
  container.classList.remove('cover');
  container.classList.add('navigation');
  navigation.classList.add('close');
  navigation.classList.remove('open');
  navigation.classList.remove('white');

});
// if(window.innerWidth<800){
//   menuOpen.classList.remove('close');
//     navigation.classList.remove('open');
//     navigation.classList.add('close');
// }


// function openMenu(){
 

  

// }


// function closeMenu(){
//   if(window.innerWidth<800){
//   
//   console.log('hello world')}
// }





//slides
var slideIndex = 2;
const images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg'];
const text =[
  {
    h2: 'Discover innovative ways to decorate',
    p:"We provide unmatched quality, comfort, \nand style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
   },
   {h2:'We are available all across the globe',
    p:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."     

   },
   {
     h2:"Manufactured with the best materials",
     p:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
   }
];

const mobImages =['mobile1.jpg', 'mobile2.jpg','mobile3.jpg'];

// console.log(text[0].p);
console.log(window.innerWidth);

const leftBtn= document.querySelector('.ri');
const rightBtn = document.querySelector('.le');
const slideImg = document.querySelector("#imageSlide");
const mobileimg = document.querySelector('#mobimgSlide');
const header = document.querySelector('#header');
const para = document.querySelector('#para');


leftBtn.addEventListener('click', ()=>{
  if(window.innerWidth< 800){
    mobSlideLeft();
  }
  else{
    slideLeft();
  }
});


rightBtn.addEventListener('click',  ()=>{
  if(window.innerWidth< 800){
    mobSlideRight();
  }
  else{
    slideRight();
  }
});

//functions


function slideLeft(){
  slideIndex++;
  if(slideIndex > images.length-1){
    slideIndex = 0;
  }
  slideImg.srcset = `images/${images[slideIndex]}`;
  header.textContent = text[slideIndex].h2;
  para.textContent = text[slideIndex].p;
}



function slideRight(){
  slideIndex--;
  if(slideIndex < 0){
    slideIndex = images.length-1;
   
  }
  slideImg.srcset = `images/${images[slideIndex]}`;
  header.textContent = text[slideIndex].h2;
  para.textContent = text[slideIndex].p;
}


function mobSlideLeft(){
  slideIndex++;
  if(slideIndex > images.length-1){
    slideIndex = 0;
  }
  mobileimg.src = `images/${mobImages[slideIndex]}`;
  header.textContent = text[slideIndex].h2;
  para.textContent = text[slideIndex].p;
}


function mobSlideRight(){
  slideIndex--;
  if(slideIndex < 0){
    slideIndex = images.length-1;
   
  }
  mobileimg.src = `images/${mobImages[slideIndex]}`;
  header.textContent = text[slideIndex].h2;
  para.textContent = text[slideIndex].p;
}
