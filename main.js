
$(document).ready(function(){

 
  
    window.onload = function() {
      AOS.init();
      console.log("AOS loaded");
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('animate');
          console.log("start");
          setTimeout(() => {
            entry.target.classList.remove('animate');
          }, 2000); // remove animate class after 2 seconds
        } else if (entry.intersectionRatio <= 0) {
          entry.target.classList.add('fade-out');
          console.log("fade-out");

          setTimeout(() => {
            entry.target.classList.remove('fade-out');
          }, 1000); // remove fade-out class after 2 seconds
        }
      });
    });
    
    const elementsToObserve = document.querySelectorAll('.main-subtext');
    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });


    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('fade-in-animation');
          console.log("be a part");
          setTimeout(() => {
            entry.target.classList.remove('fade-in-animation');
          }, 2000); // remove animate class after 2 seconds
        } else if (entry.intersectionRatio <= 0) {
          entry.target.classList.add('fade-out');
          console.log("fade-out");

          setTimeout(() => {
            entry.target.classList.remove('fade-out');
          }, 1000); // remove fade-out class after 2 seconds
        }
      });
    });
  
    const elementsToObserve2 = document.querySelectorAll('.subtext-two');
    elementsToObserve2.forEach((element) => {
    observer2.observe(element);
    });


    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('fade-in-animation');
          console.log("button");
          setTimeout(() => {
            entry.target.classList.remove('fade-in-animation');
          }, 2000); // remove animate class after 2 seconds
        } else if (entry.intersectionRatio <= 0) {
          entry.target.classList.add('fade-out');
          console.log("button fade-out");

          setTimeout(() => {
            entry.target.classList.remove('fade-out');
          }, 1000); // remove fade-out class after 2 seconds
        }
      });
    });
  
    const elementsToObserve3 = document.querySelectorAll('.btn-hover-new');
    elementsToObserve3.forEach((element) => {
    observer3.observe(element);
    });

    
    
    const myElement = document.querySelector(".subtext-two");
        
      if (myElement) {
        console.log("Element found!");
      } else {
        console.log("Element not found!");
      }

    console.log(document.querySelector(".subtext-two").classList);

  });


 