// const animatedBox = document.getElementById("profile-pic-div");

// function isElementInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function animateOnScroll() {
//   if (isElementInViewport(animatedBox)) {
//     // let a = document.getElementById('name-card');
//     // console.log(a.classList);
//     // a.classList.remove('name-card-animation');
//     // void a.offsetWidth;
//     // a.classList.add('name-card-animation');
//     // // animatedBox.style.opacity = .5  ;
//     // console.log(a.classList);
//     // console.log('hi');
//   }
// }

// // Initial check when the page loads
// animateOnScroll();

// // Listen for scroll events and trigger the animation function
// window.addEventListener("scroll", animateOnScroll);

document.getElementById('resume-download').addEventListener('click', function() {
    // document.location.href = './files/Resume_Anirudh_Public.pdf';
    var anchor=document.createElement('a');
    	anchor.setAttribute('href','./files/Resume_Anirudh_Public.pdf');
    	anchor.setAttribute('download','');
    	document.body.appendChild(anchor);
    	anchor.click();
    	anchor.parentNode.removeChild(anchor);
})
