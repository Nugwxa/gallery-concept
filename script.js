let debugMessage = "I WORK!!!";
//console.log(debugMessage);

const member1 = document.querySelector('#member-1-default');
const member2 = document.querySelector('#member-2-default');
const member3 = document.querySelector('#member-3-default');
const member4 = document.querySelector('#member-4-default');
const member5 = document.querySelector('#member-5-default');
const member6 = document.querySelector('#member-6-default');

let screenSize;
let targetScreenSize

// img/face(straight).jpg -> DEFAULT
// img/face(looking-left).jpg -> LOOKING LEFT
// img/face(looking-right).jpg -> LOOKING RIGHT
// img/face(looking-up).jpg -> LOOKING UP
// img/face(looking-down).jpg -> LOOKING DOWN

if (screenSize> targetScreenSize)


member1.addEventListener('mouseover', function(){
    member2.src = "img/face(looking-left).jpg";
    member4.src = "img/face(looking-up).jpg";
});

member1.addEventListener('mouseout', function(){
    member2.src = "img/face(straight).jpg";
    member4.src = "img/face(straight).jpg";
});

member2.addEventListener('mouseover', function(){
    member1.src = "img/face(looking-right).jpg";
    member3.src = "img/face(looking-left).jpg";
    member5.src = "img/face(looking-up).jpg";
});

member2.addEventListener('mouseout', function(){
    member1.src = "img/face(straight).jpg";
    member3.src = "img/face(straight).jpg";
    member5.src = "img/face(straight).jpg";
});

member3.addEventListener('mouseover', function(){    
    member2.src = "img/face(looking-right).jpg";
    member6.src = "img/face(looking-up).jpg";
});

member3.addEventListener('mouseout', function(){
    member2.src = "img/face(straight).jpg";
    member6.src = "img/face(straight).jpg";
});

member4.addEventListener('mouseover', function(){   
    member1.src = "img/face(looking-down).jpg";
    member5.src = "img/face(looking-left).jpg";
});

member4.addEventListener('mouseout', function(){
    member1.src = "img/face(straight).jpg";
    member5.src = "img/face(straight).jpg";
});

member5.addEventListener('mouseover', function(){
    member4.src = "img/face(looking-right).jpg";
    member6.src = "img/face(looking-left).jpg";
    member2.src = "img/face(looking-down).jpg";
});

member5.addEventListener('mouseout', function(){
    member4.src = "img/face(straight).jpg";
    member6.src = "img/face(straight).jpg";
    member2.src = "img/face(straight).jpg";
});

member6.addEventListener('mouseover', function(){
    member3.src = "img/face(looking-down).jpg";
    member5.src = "img/face(looking-right).jpg";
});

member6.addEventListener('mouseout', function(){
    member3.src = "img/face(straight).jpg";
    member5.src = "img/face(straight).jpg";
});
