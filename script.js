
let circle = document.getElementById('circle-value')
var circleblr = document.getElementById('circle-blur')

document.addEventListener('mousemove',function(dets){
    
    var xcord = dets.x;
    var ycord = dets.y;
    circle.style.transform = `translate(${xcord-10}px,${ycord-10}px)`
    circleblr.style.transform = `translate(${xcord-110}px,${ycord-110}px)`
})

var h4value = document.querySelectorAll("#nav h4");
h4value.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        circle.style.height = "40px"
        circle.style.width = "40px"
        circle.style.border = "1px solid #fff"
        circle.style.backgroundColor = "transparent"
   })
   val.addEventListener("mouseleave",function(){
    circle.style.height = "20px"
    circle.style.width = "20px"
    circle.style.border = "0px solid #000"
    circle.style.backgroundColor = " #89d615"
})
})



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        // markers:true,
        start:"top -10%",
        end:"top -15%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -85%",
        scrub:1
    }
})

gsap.from("#about-us img,#about-us-info",{
    y:90,
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 65%",
        scrub:1
    }
})


// gsap.from(".card",{
//     opacity:0,
//     stagger:0.7,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         markers:true,
//         start:"top 75%",
//         end:"top 65%",
//         scrub:2
//     }
// })

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 37%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 37%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})