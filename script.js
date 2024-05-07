
function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locoScroll();


function cursorEffect(){
    let page1Content = document.querySelector('.page1')
    let cursor = document.querySelector('.cursor')
    
    page1Content.addEventListener('mousemove', function(event) {
      let rect = page1Content.getBoundingClientRect();
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let mouseX = event.clientX - rect.left - scrollLeft;
      let mouseY = event.clientY - rect.top - scrollTop;
  
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        visibility: 'visible'
      });
    });
  
  
    page1Content.addEventListener('mouseenter',function(){
      gsap.to(cursor,{
          scale:1,
          opacity:1,
          rotate: 0
          
      })
  })
  
  page1Content.addEventListener('mouseleave', function(){
      gsap.to(cursor,{
          scale:0,
          opacity:0,
          rotate: 90,
      })
  })
    
}
cursorEffect();


function takeItCursor() {
  let page4Content = document.querySelector('.page4-mid-section');
  let cursor = document.querySelector('.take-it-cursor');

  page4Content.addEventListener('mousemove', function(event) {
    let rect = page4Content.getBoundingClientRect();
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let mouseX = event.clientX - rect.left - scrollLeft;
    let mouseY = event.clientY - rect.top - scrollTop;

    gsap.to(cursor, {
      x: mouseX,
      y: mouseY,
      visibility: 'visible'
    });
  });


  page4Content.addEventListener('mouseenter',function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1,
        rotate: 0
        
    })
})

page4Content.addEventListener('mouseleave', function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0,
        rotate: 90,
    })
})


}

takeItCursor();



function pageAnimations(){
  gsap.from('.mid-para-section h1',{
    y: 120,
    stagger: 0.2,
    opacity:.1,
    duration:1,
    scrollTrigger: {
      trigger : ".page2",
      scroller: '.main',
      start: 'top 72%',
      end: 'top 90%',
      // markers: true,
      scrub: 2
    }


  }
)
gsap.from('.underlined-section h5',{
  y: 60,
  stagger: 0.2,
  opacity:0,
  duration:1,
  scrollTrigger: {
    trigger : ".page2",
    scroller: '.main',
    start: 'top 82%',
    end: 'top 70%',
    // markers: true,
    scrub: 2
  }


}
)

gsap.from(' .line',{
  stagger: 0.2,
  scaleX: (0),
  duration:1,
  scrollTrigger: {
    trigger : ".page2",
    scroller: '.main',
    start: 'top 77%',
    end: 'top 74.7%',
    // markers: true,
    scrub: 2
  }


}
)


gsap.from( '.page3-top-section h2',{
  y: 100,
  stagger: 0.4,
  opacity:0,
  duration:2,
  scrollTrigger: {
    trigger : ".page3",
    scroller: '.main',
    start: 'top 46%',
    end: 'top 42%',
    // markers: true,
    scrub: 3
  }
})




gsap.from('.page4-top-section h5',{
  y: 60,
  stagger: 0.2,
  opacity:0,
  duration:1,
  scrollTrigger: {
    trigger : ".page4",
    scroller: '.main',
    start: 'top 82%',
    end: 'top 70%',
    // markers: true,
    scrub: 2
  }


}
)


gsap.from('.page4-top-section > .line-one',{
  stagger: 0.2,
  scaleX: (0),
  duration:1,
  scrollTrigger: {
    trigger : ".page4",
    scroller: '.main',
    start: 'top 77%',
    end: 'top 74.7%',
    // markers: true,
    scrub: 2
  }


}
)



gsap.from('.page4-top-section h1',{
  y: 100,
  stagger: 0.4,
  opacity:0,
  duration:2,
  scrollTrigger: {
    trigger : ".page4",
    scroller: '.main',
    start: 'top 72%',
    end: 'top 90%',
    // markers: true,
    scrub: 3
  }


}
)



gsap.from('.page4-bottom-section h5',{
  y: 60,
  stagger: 0.2,
  opacity:0,
  duration:1,
  scrollTrigger: {
    trigger : ".page4-bottom-section",
    scroller: '.main',
    start: 'top 82%',
    end: 'top 70%',
    // markers: true,
    scrub: 2
  }


}
)

gsap.from('.page4-bottom-section > .line-one',{
  stagger: 0.2,
  scaleX: (0),
  opacity: "0",
  duration:.2,
  scrollTrigger: {
    trigger : ".page4-bottom-section",
    scroller: '.main',
    start: 'top 77%',
    end: 'top 74.7%',
    // markers: true,
    scrub: 2
  }


}
)



gsap.from('.page4-bottom-section h1',{
  y: 100,
  stagger: 0.4,
  opacity:0,
  duration:2,
  scrollTrigger: {
    trigger : ".page4-bottom-section",
    scroller: '.main',
    start: 'top 72%',
    end: 'top 90%',
    // markers: true,
    scrub: 3
  }


}
)



}
pageAnimations();




function vidPlay(){
  let videos = document.querySelectorAll('.box video')

  videos.forEach(video => {
    video.addEventListener('mouseenter', function(){
      video.play();
    })
  
    video.addEventListener('mouseleave', function(){
      video.pause();
    })
  });
}

vidPlay();

