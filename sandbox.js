
var box = document.querySelector('.container');
var pin = document.querySelector('.pin');
var len = 320;
var x_cor = 580;
var y_cor = len;
var angle = Math.PI/4;
var aVel = 0.0;
var aAcc = 0.0; 
var origin_x = 580;
var origin_y = 20;



function swing(){
    pin.style.position = 'absolute';
    pin.style.left = origin_x + 'px';
    pin.style.top = origin_y + 'px'; 
    
    box.style.position = 'absolute';
    box.style.left = x_cor+'px';
    box.style.top = y_cor+'px';

    box.style.left = origin_x + len * Math.sin(angle) + 'px';
    box.style.top = origin_y + len * Math.cos(angle) + 'px';



    aAcc = -0.01 * Math.sin(angle)

    angle += aVel;
    aVel += aAcc;

    aVel *= 0.99;

    animate = setTimeout(swing,20);

}





// var box = document.querySelector('.container');
// var animate;
// box.style.left = '0px';
// box.style.position = 'relative';

// function moveRight(){
//     if (parseInt(box.style.left) < 1180){
//         box.style.left = parseInt(box.style.left) + 10 + 'px';
//         animate = setTimeout(moveRight,20);
//     }
//     else {
//         moveLeft();
//     }
// }

// function moveLeft(){
//     box.style.left = parseInt(box.style.left) - 10 + 'px';
//     animate = setTimeout(moveLeft,20);

//     if (parseInt(box.style.left) < 10){
//         moveRight();
//     }
// }



// function move(){    
//     if (Number(box.style.left) > screen.width){
//         box.style.left = pareseInt(box.style.left) - 10 + 'px';
//     }

//     else{
//         box.style.left = parseInt(box.style.left) + 10 + 'px';
//     }

//     animate = setTimeout(move,20);

// }

// move()

