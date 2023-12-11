function smoothScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
smoothScroll();


function mouseFollower(){
    var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y
    })
})

page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity: 1,
    })
})
page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
mouseFollower()


function page2Animation(){
    gsap.from("#page2-top h3,#page2-top h4",{
        opacity:0,
        y:120,
        duration:1.2,
        scrollTrigger:{
            trigger:"#page2-top",
            scroller:"#main",
            start:"top 75%",
            end:"top 70%",
            // markers:true,
            scrub:2
        }
    })
    gsap.from(".elem h1",{
        y:120,
        stagger:0.3,
        duration:2,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 40%",
            end:"top 37%",
            // markers:true,
            scrub:2
        }
    })
}
page2Animation()



function page3Animation() {
    gsap.from(".pg3topdiv h2", {
        y: 50,
        opacity:0,
        duration: 1,

        scrollTrigger: {
            trigger: ".pg3topdiv",
            scroller: "#main",
            start: "top 80%",
            end: "top 75%",
            // markers: true,
            scrub:2
        }
    })
    gsap.from("#page3-bottom h3",{
        opacity:0,
        y:120,
        duration:1,
        scrollTrigger:{
            trigger:"#page3-bottom",
            scroller:"#main",
            start:"top 93%",
            end:"top 88%",
            // markers:true,
            scrub:2
        }
    })
    gsap.from(".elemb h1",{
        y:120,
        stagger:0.3,
        duration:2,
        scrollTrigger:{
            trigger:"#page3-bottom",
            scroller:"#main",
            start:"top 70%",
            end:"top 65%",
            // markers:true,
            scrub:2
        }
    })

}
page3Animation()



function swiperAnim() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    });
}
swiperAnim()



var tl = gsap.timeline()

tl.from("#loader h3", {
    x: 40,
    opacity: 0,
    duration: 2,
    stagger: 0.3,
    delay:1
    
})
tl.to("#loader h3", {
    x: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.1,  
})

tl.to("#loader", {
    opacity:0
})
tl.from("#page1-content h1 span", {
  y: 50,
  opacity: 0,
  duration: 0.8,
    stagger: 0.1,
  delay:-0.8
});

tl.to("#loader", {
    display:"none"
})

function page5Anim() {
    gsap.from(".belem h5,.belem h1", {
      // opacity: 0,
      stagger: 0.1,
      duration: 1,
      y: 60,
      scrollTrigger: {
        trigger: ".belem",
        scroller: "#main",
        start: "top 90%",
        end: "top 85%",
        // markers: true,
        scrub: 2,
      },
    });

}
page5Anim()



function footerAnim(){
    gsap.from("#footer", {
  y:300,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page5-bottom",
    scroller: "#main",
    start: "top 80%",
    end: "top 20%",
    // markers:true,
    scrub: 5,
  },
});
}
footerAnim()