// DOM Elements
const aside = document.getElementById('aside');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close');
const body = document.querySelector('body');
const fadedBack = document.getElementById('faded-background');
const downBtn = document.getElementById('down-btn');

const contents = document.querySelectorAll(".showcase-content");

const contentOne = document.getElementById('showcase-content-1');
const contentTwo = document.getElementById('showcase-content-2');
const contentThree = document.getElementById('showcase-content-3');
const contentFour = document.getElementById('showcase-content-4');
const contentFive = document.getElementById('showcase-content-5');
const contentSix = document.getElementById('showcase-content-6');
const contentSeven = document.getElementById('showcase-content-7');


// Event Listeners
sideMenu.addEventListener('click', (e) => {
  aside.style.right = '0px';
  fadedBack.style.display = 'block';
  body.style.height = '100vh';
  body.style.overflowY = 'hidden';
  e.preventDefault();
})

closeBtn.addEventListener('click', (e) => {
  aside.style.right = '-300px';
  fadedBack.style.display = 'none';
  body.style.height = '';
  body.style.overflowY = '';
  e.preventDefault();
})

fadedBack.addEventListener('click', () => {
  aside.style.right = '-300px';
  fadedBack.style.display = 'none';
  body.style.height = '';
  body.style.overflowY = '';
})


// DOM Refresh Returns to Page Top
window.onbeforeunload = () => {
  window.scrollTo(0,0);
}


// Header Button
downDown = () => {
  window.scrollTo({
    top: 660,
    left: 0,
    behavior: "smooth"
  });
}

window.addEventListener("load", () => {
  downBtn.classList.add("onload");
});

window.addEventListener("scroll", () => {
  console.log(window.innerHeight);
  console.log(contentThree.getBoundingClientRect().top);
});

if(contentTwo.getBoundingClientRect().bottom < window.innerHeight){
  contentOne.classList.add("fade");
}


// {contents.forEach(content => {
//   window.addEventListener("scroll", () => {
//     if(content.getBoundingClientRect().bottom < window.innerHeight){
//       content.classList.add("fade");
//     } else if (content.getBoundingClientRect().bottom > window.innerHeight) {
//       content.classList.remove("fade");
//     }
//   })
// })}

// window.addEventListener("scroll", () => {
//   if((contentTwo.getBoundingClientRect().bottom - 325) < window.innerHeight){
//     contents.forEach((content) => {
//       content.classList.add("fade");
//     })
//   }
// });

// window.addEventListener('scroll', () => {
//   const contentPosition = showcaseHeader.getBoundingClientRect().top;
//   const screenPosition = window.innerHeight;
//   if(screenPosition > contentPosition) {
//     showcaseHeader.classList.add('fade');
//   }
// });

// window.addEventListener('scroll', () => {
//   const contentPosition = showcaseOne.getBoundingClientRect().bottom;
//   const screenPosition = window.innerHeight;
//   if(screenPosition > contentPosition) {
//     content.classList.add('fade');
//   } else if (screenPosition < contentPosition) {
//     content.classList.remove('fade');
//   }
// })
