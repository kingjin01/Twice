const tl = gsap.timeline();

tl
.fromTo('.box1',3, {
    y: '-500px',
},{
    y:0,
    opacity: 1
},0)

.fromTo('.box2',3, {
    y: '500px',
},{
    y:0,
    opacity: 1
},0)