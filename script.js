const glider = new Glider(document.getElementById('glider'), {
    slidesToScroll: 1,
    slidesToShow: 1
});

function sliderAuto(slider, miliseconds) {
 const slidesCount = slider.track.childElementCount;
 let slideTimeout = null;
 let nextIndex = 1;

 function slide () {
   slideTimeout = setTimeout(
     function () {
       if (nextIndex >= slidesCount ) {
         nextIndex = 0;
       }
       slider.scrollItem(nextIndex++);
     },
     miliseconds
   );
 }

 slider.ele.addEventListener('glider-animated', function() {
   window.clearInterval(slideTimeout);
   slide();
 });

 slide();
}

sliderAuto(glider, 1000)


gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-inicial-txt",{
    duration: 0.7,
    opacity: 0,
    y: -150,
    stagger:0.4,
});
gsap.from(".animate-inicial-img",{
    duration: 0.9,
    opacity: 0,
    x: 250,
})
gsap.from(".animate-artigos",{
    duration: 0.8,
    opacity:0,
    x: -150,
    stagger: 0.4,
    delay:1.2,
})
gsap.from(".animate-final",{
    scrollTrigger: ".animate-final",
    duration: 0.8,
    opacity: 0,
    y:-200,
    stagger: 0.5,
    delay: 0.5
})


