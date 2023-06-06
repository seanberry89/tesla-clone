
const aside = document.getElementById('aside');
const sideMenuLink = document.getElementById('side-menu-link');
const sideMenuButton = document.getElementById('side-menu-button');
const closeBtn = document.getElementById('close');
const body = document.querySelector('body');
const fadedBack = document.getElementById('faded-background');
const downBtn = document.getElementById('down-btn');

const contentOne = document.getElementById('showcase-content-1');
const contentTwo = document.getElementById('showcase-content-2');
const contentThree = document.getElementById('showcase-content-3');
const contentFour = document.getElementById('showcase-content-4');
const contentFive = document.getElementById('showcase-content-5');
const contentSix = document.getElementById('showcase-content-6');
const contentSeven = document.getElementById('showcase-content-7');

// Mobile Media Query
const mobile = window.matchMedia('(max-width: 600px)');


// Refresh DOM to Page Top
window.onbeforeunload = () => {

  window.scrollTo(0,0);

};


// Event Listener: toggle side menu
sideMenuLink.addEventListener('click', (e) => {
  aside.style.right = '0px';
  fadedBack.style.display = 'block';
  body.style.height = '100vh';
  body.style.overflowY = 'hidden';
  e.preventDefault();
})

sideMenuButton.addEventListener('click', (e) => {
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


// onClick Event: drop-down button
downDown = () => {
  window.scrollTo({
    top: 660,
    left: 0,
    behavior: "smooth"
  });
};


// Event Listener: load drop-down button
window.addEventListener("load", () => {

  if(mobile.matches){

    downBtn.classList.remove("onload");

  } else {

    downBtn.classList.add("onload");

  };

});


// top: 660 second page
// top 1325 third page
// top: 1980 fourth page
// top: 2640 fifth page
// top: 3300 sixth page
// top: 4000 last page


// if(mobile.matches){

//   // scroll to the first mobile section
//   if(window.scrollY < 200){

//     contentOne.style.opacity = "100%";
//     contentTwo.style.opacity = "0";

//     if(timer !== null){
//       clearTimeout(timer);
//     };

//     timer = setTimeout(() => {
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth"
//       });
//     }, 300);

//     // scroll to the second mobile section
//   } else if(window.scrollY > 200 && window.scrollY < 700){

//     contentOne.style.opacity = "0";
//     contentTwo.style.opacity = "100%";
//     contentThree.style.opacity = "0";

//     if(timer !== null){
//       clearTimeout(timer);
//     };

//     timer = setTimeout(() => {
//       window.scrollTo({
//         top: 512,
//         left: 0,
//         behavior: "smooth"
//       });
//     }, 300);

//   // scroll to the third mobile section
//   } else if(window.scrollY > 700 && window.scrollY < 1250){

//     contentTwo.style.opacity = "0";
//     contentThree.style.opacity = "100%";
//     contentFour.style.opacity = "0";

//     if(timer !== null){
//       clearTimeout(timer);
//     };

//     timer = setTimeout(() => {
//       window.scrollTo({
//         top: 1026,
//         left: 0,
//         behavior: "smooth"
//       });
//     }, 300);

//     // scroll to the fourth mobile section
//   } else if(window.scrollY > 1250 && window.scrollY < 1750){

//     contentThree.style.opacity = "0";
//     contentFour.style.opacity = "100%";
//     contentFive.style.opacity = "0";

//     if(timer !== null){
//       clearTimeout(timer);
//     };

//     timer = setTimeout(() => {
//       window.scrollTo({
//         top: 1539,
//         left: 0,
//         behavior: "smooth"
//       });
//     }, 300);

//     // scroll to the fifth mobile section
//   } else if(window.scrollY > 1750 && window.scrollY < 2250){

//     contentFour.style.opacity = "0";
//     contentFive.style.opacity = "100%";
//     contentSix.style.opacity = "0";

//     if(timer !== null){
//       clearTimeout(timer);
//     };

//     timer = setTimeout(() => {
//       window.scrollTo({
//         top: 2052,
//         left: 0,
//         behavior: "smooth"
//       });
//     }, 300);

//     // scroll to the sixth mobile section
//   } else if(window.scrollY > 2250 && window.scrollY < 2800){

//     contentFive.style.opacity = "0";
//     contentSix.style.opacity = "100%";
//     contentSeven.style.opacity = "0";

//     if(timer !== null){
//       clearTimeout(timer);
//     };

//     timer = setTimeout(() => {
//       window.scrollTo({
//         top: 2564,
//         left: 0,
//         behavior: "smooth"
//       });
//     }, 300);

//     // scroll to the last mobile section
//   } else if(window.scrollY > 2800 && window.scrollY < 3300){

//     contentSix.style.opacity = "0";
//     contentSeven.style.opacity = "100%";

//     if(timer !== null){
//       clearTimeout(timer);
//     };

//     timer = setTimeout(() => {
//       window.scrollTo({
//         top: 3078,
//         left: 0,
//         behavior: "smooth"
//       });
//     }, 300);

//   };

// }

let timer;

// Event Listener: auto scroll for each section
window.addEventListener("scroll", () => {

  // scroll to the first section
  if(window.scrollY < 300){

    contentOne.style.opacity = "100%";
    contentTwo.style.opacity = "0";

    if(timer !== null){
      clearTimeout(timer);
    };

    timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }, 75);

  // scroll to the second section
  } else if(window.scrollY > 300 && window.scrollY < 900){

    contentOne.style.opacity = "0";
    contentTwo.style.opacity = "100%";
    contentThree.style.opacity = "0";

    if(timer !== null){
      clearTimeout(timer);
    };

    timer = setTimeout(() => {
      window.scrollTo({
        top: 650,
        left: 0,
        behavior: "smooth"
      });
    }, 75);

  // scroll to the third section
  } else if(window.scrollY > 900 && window.scrollY < 1600){

    contentTwo.style.opacity = "0";
    contentThree.style.opacity = "100%";
    contentFour.style.opacity = "0";

    if(timer !== null){
      clearTimeout(timer);
    };

    timer = setTimeout(() => {
      window.scrollTo({
        top: 1300,
        left: 0,
        behavior: "smooth"
      });
    }, 75);

    // scroll to the fourth section
  } else if(window.scrollY > 1600 && window.scrollY < 2250){

    contentThree.style.opacity = "0";
    contentFour.style.opacity = "100%";
    contentFive.style.opacity = "0";

    if(timer !== null){
      clearTimeout(timer);
    };

    timer = setTimeout(() => {
      window.scrollTo({
        top: 1950,
        left: 0,
        behavior: "smooth"
      });
    }, 75);

    // scroll to the fifth section
  } else if(window.scrollY > 2250 && window.scrollY < 2900){

    contentFour.style.opacity = "0";
    contentFive.style.opacity = "100%";
    contentSix.style.opacity = "0";

    if(timer !== null){
      clearTimeout(timer);
    };

    timer = setTimeout(() => {
      window.scrollTo({
        top: 2600,
        left: 0,
        behavior: "smooth"
      });
    }, 75);

    // scroll to the sixth section
  } else if(window.scrollY > 2900 && window.scrollY < 3500){

    contentFive.style.opacity = "0";
    contentSix.style.opacity = "100%";
    contentSeven.style.opacity = "0";

    if(timer !== null){
      clearTimeout(timer);
    };

    timer = setTimeout(() => {
      window.scrollTo({
        top: 3250,
        left: 0,
        behavior: "smooth"
      });
    }, 75);

    // scroll to the last section
  } else if(window.scrollY > 3500 && window.scrollY < 4400){

    contentSix.style.opacity = "0";
    contentSeven.style.opacity = "100%";

    if(timer !== null){
      clearTimeout(timer);
    };

    timer = setTimeout(() => {
      window.scrollTo({
        top: 3975,
        left: 0,
        behavior: "smooth"
      });
    }, 75);

  };

});
