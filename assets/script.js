

 Shery.makeMagnet(".nav-item>a", {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.3,
});

Shery.makeMagnet("#portfolio", {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",

  duration: 0.6,
});




gsap.to("#pac-loader",{
  y:-1000,
  opacity:0,
  duration:0.8,
  delay:2,
} )


function counter(){
  var count=setInterval(function(){
    var c=parseInt($('.counter').text());
    $('.counter').text((++c).toString());
    if(c==100){
      clearInterval(count);
      $('.counter').addClass('hide')
    }
    console.log(c)
  },18)
}
counter()




gsap.from("#scroll1",{
  right:"100px",
  opacity:0,
  delay:0.3,
  scrollTrigger:{
      scroller:"body",
      trigger:"#scroll1",
      // scrub:true,
      start:"top 74%",
       end:"top 30%",
     
  }
})

gsap.from("#scroll2",{
  right:"100px",
  opacity:0,
  delay:0.3,
  scrollTrigger:{
      scroller:"body",
      trigger:"#scroll2",
      // scrub:true,
      start:"top 74%",
       end:"top 30%",
     
  }
})
gsap.from("#scroll3",{
  right:"100px",
  opacity:0,
  delay:0.3,
  scrollTrigger:{
      scroller:"body",
      trigger:"#scroll3",
      // scrub:true,
      start:"top 74%",
       end:"top 30%",
     
  }
})
gsap.from("#scroll4",{
  right:"100px",
  opacity:0,
  delay:0.3,
  scrollTrigger:{
      scroller:"body",
      trigger:"#scroll4",
      // scrub:true,
      start:"top 74%",
       end:"top 30%",
     
  }
})
gsap.utils.toArray(".project-image").forEach(card => {

 
gsap.from(card,{
  right:"70%",
  opacity:0,
  duration:0.3,
   ease: "power4.out",
  scrollTrigger:{
      scroller:"body",
      trigger:card,
      start:"top 83%",
       end:"top 30%",

  }
  
})
});


gsap.to(".user", {
  scale: 1,       // grow to regular size
  delay:2,
  opacity: 1,     // fade in
  duration: 1.4,  // fast and smooth
  ease: "elastic.out(1, 0.5)"  // bouncy effect
});



var typed2 = new Typed('#autoplay', {
  strings: ['<strong style="color:#32ae49;  font-family: Gilroy; font-weight: 500; "> <i style=" font-family: art;">Software</i> developer.</strong> ', ' <strong style="color:#e60000;  font-family: Gilroy; font-weight: 400; "   >Full-<i style=" font-family: art;">Stack</i>-developer !</strong >', '<strong style="color:#FF9800;"><i style=" font-family: art; " >UX/UI</i>-Developer !</strong>'],
  typeSpeed: 0,
  backSpeed: 0,
  backDelay:500,
  startDelay: 1000,
  loop: true
});


function showAlert(message, duration = 3000) {
  let alertBox = document.createElement("div");
  alertBox.innerText = message;

  // Styling via JS
  alertBox.style.position = "fixed";
  alertBox.style.top = "20px";
  alertBox.style.background = "#600000ff";
  alertBox.style.color = "#fff";
  alertBox.style.padding = "3px 10px";
  alertBox.style.borderRadius = "2px";
  alertBox.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
  alertBox.style.zIndex = "9999";
  alertBox.style.fontSize = "1.1rem";

  document.body.appendChild(alertBox);

  // Auto remove after duration
  setTimeout(() => {
    alertBox.remove();
  }, duration);
}

// Example call
showAlert("Watch on desktop for a better experience./Chrome", 2000);