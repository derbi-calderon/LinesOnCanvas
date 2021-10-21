//----------------------------------------------------------------------------------------------------------------------------
//                              Makes line at center follow mouse
// note: remove clear to see tracing line effect
//----------------------------------------------------------------------------------------------------------------------------
// let canvas;
// let ctx;
// let flowField;
// let flowFieldAnimation;

// // document.onload will load after everthing in DOM is loaded
// window.onload = function(){
//     canvas = document.getElementById('canvas1');
//     ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
//     flowField.animate();
// }

// window.addEventListener('resize', function(){
//     cancelAnimationFrame(flowFieldAnimation);
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
//     flowField.animate();
// });

// const mouse = {
//     x:0,
//     y:0
// }

// window.addEventListener('mousemove', function(e){
//     mouse.x = e.x;
//     mouse.y = e.y;
// });

// //classes are not hoisted like functions
// //so can class before it's declared
// class FlowFieldEffect{
//     // private class fields
//     #ctx;
//     #width;
//     #height;
//     constructor(ctx, width, height){
//         this.#ctx = ctx;
//         this.#ctx.strokeStyle = 'white';
//         this.#ctx.lineWidth = 5;
//         this.#width = width;
//         this.#height = height;
//         this.angle = 0;
//     }

//     #draw(x,y){
//         const length = 300;
//         this.#ctx.beginPath();
//         this.#ctx.moveTo(x,y);
//         this.#ctx.lineTo(mouse.x,mouse.y);
//         this.#ctx.stroke();
//     }

//     animate(){
//         this.angle += 0.1;
//         //comment following to see tracign effect of lines
//         this.#ctx.clearRect(0,0, this.#width, this.#height);
//         this.#draw(this.#width/2, this.#height/2);
//         //console.log('animating');
//         flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
//     }


// }

//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------------
//                              mouse follow flower thing
// note: 
//----------------------------------------------------------------------------------------------------------------------------

// let canvas;
// let ctx;
// let flowField;
// let flowFieldAnimation;

// // document.onload will load after everthing in DOM is loaded
// window.onload = function(){
//     canvas = document.getElementById('canvas1');
//     ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
//     // passing zero for first inital frame
//     flowField.animate(0);
// }

// window.addEventListener('resize', function(){
//     cancelAnimationFrame(flowFieldAnimation);
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
//     flowField.animate(0);
// });

// const mouse = {
//     x:0,
//     y:0
// }

// window.addEventListener('mousemove', function(e){
//     mouse.x = e.x;
//     mouse.y = e.y;
// });

// //classes are not hoisted like functions
// //so can class before it's declared
// class FlowFieldEffect{
//     // private class fields
//     #ctx;
//     #width;
//     #height;
//     constructor(ctx, width, height){
//         this.#ctx = ctx;
//         this.#ctx.strokeStyle = 'white';
//         this.#ctx.lineWidth = 5;
//         this.#width = width;
//         this.#height = height;
        
//         // timestamp and delta so faster and older computers run animation the same
//         this.lastTime = 0;
//         // helper variables to uses deltatime in intervals
//         // interval set to 1000/60, 60fps
//         this.interval = 1000/60;
//         this.timer = 0;
//         // vector field are grids that points to a direction
//         // cellSize to represent how big cells in grid will be
//         this.cellSize = 15; // ex. 15 is 15x 15 pixels

//     }

//     #drawLine(x,y){
//         const length = 300;
//         this.#ctx.beginPath();
//         this.#ctx.moveTo(x,y);
//         this.#ctx.lineTo(mouse.x,mouse.y);
//         this.#ctx.stroke();
//     }

//     // requestAnimationFrame creates a timestamp value automatically
//     animate(timeStamp){
//         const deltaTime = timeStamp - this.lastTime;
//         this.lastTime = timeStamp;
//         if(this.timer > this.interval){
            
//             //comment following to see tracign effect of lines
//             this.#ctx.clearRect(0,0, this.#width, this.#height);

//             // to set cells among canvas, grid created with nested loops
//             // we fill by rows with the following
//             for(let y = 0; y < this.#height; y+= this.cellSize){
//                 for(let x = 0; x < this.#width; x += this.cellSize){
//                     this.#drawLine(x, y);
//                 }
//             }
            
//             //console.log('animating');
//             //console.log(deltaTime);
//             //console.log(timeStamp);
//             this.timer = 0
//         } else{
//             this.timer += deltaTime;
//         }
        
//         flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
//     }


// }

//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------------------------------------------
//                              Gradient lines in vector grid
//----------------------------------------------------------------------------------------------------------------------------

// let canvas;
// let ctx;
// let flowField;
// let flowFieldAnimation;

// // document.onload will load after everthing in DOM is loaded
// window.onload = function(){
//     canvas = document.getElementById('canvas1');
//     ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
//     // passing zero for first inital frame
//     flowField.animate(0);
// }

// window.addEventListener('resize', function(){
//     cancelAnimationFrame(flowFieldAnimation);
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
//     flowField.animate(0);
// });

// const mouse = {
//     x:0,
//     y:0
// }

// window.addEventListener('mousemove', function(e){
//     mouse.x = e.x;
//     mouse.y = e.y;
// });

// //classes are not hoisted like functions
// //so can class before it's declared
// class FlowFieldEffect{
//     // private class fields
//     #ctx;
//     #width;
//     #height;
//     constructor(ctx, width, height){
//         this.#ctx = ctx;
       
//         this.#ctx.lineWidth = 5;
//         this.#width = width;
//         this.#height = height;
        
//         // timestamp and delta so faster and older computers run animation the same
//         this.lastTime = 0;
//         // helper variables to uses deltatime in intervals
//         // interval set to 1000/60, 60fps
//         this.interval = 1000/60;
//         this.timer = 0;
//         // vector field are grids that points to a direction
//         // cellSize to represent how big cells in grid will be
//         this.cellSize = 15; // ex. 15 is 15x 15 pixels
//                 // can change cell size properties for differentt results
//         this.gradient;
//         this.#createGradient();
//         this.#ctx.strokeStyle = this.gradient;
//     }

//     #createGradient(){
//         // first two paramaters are starting coords and last two parms are ending coords
//         this.gradient = this.#ctx.createLinearGradient(0, 0, this.#width, this.#height);
//         //two params: 1 offset (between 0-start and 1-end) ; 2 is color
//         this.gradient.addColorStop("0.1", "#ff5c33");
//         this.gradient.addColorStop("0.2", "#ff66b3");
//         this.gradient.addColorStop("0.3", "#ccccff");
//         this.gradient.addColorStop("0.6", "#b3ffff");
//         this.gradient.addColorStop("0.8", "#80ff80");
//         this.gradient.addColorStop("0.9", "#ffff33");
//     }
//     #drawLine(x,y){
//         const length = 300;
//         this.#ctx.beginPath();
//         this.#ctx.moveTo(x,y);
//         // to change length and direction of lines
//         this.#ctx.lineTo(x + 25,y+ 10);
//         this.#ctx.stroke();
//     }

//     // requestAnimationFrame creates a timestamp value automatically
//     animate(timeStamp){
//         const deltaTime = timeStamp - this.lastTime;
//         this.lastTime = timeStamp;
//         if(this.timer > this.interval){
            
//             //comment following to see tracign effect of lines
//             this.#ctx.clearRect(0,0, this.#width, this.#height);

//             // to set cells among canvas, grid created with nested loops
//             // we fill by rows with the following
//             for(let y = 0; y < this.#height; y+= this.cellSize){
//                 for(let x = 0; x < this.#width; x += this.cellSize){
//                     this.#drawLine(x, y);
//                 }
//             }
            
//             //console.log('animating');
//             //console.log(deltaTime);
//             //console.log(timeStamp);
//             this.timer = 0
//         } else{
//             this.timer += deltaTime;
//         }
        
//         flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
//     }


// }

//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------------
//                              Vector Field
// note: 
//----------------------------------------------------------------------------------------------------------------------------

// let canvas;
// let ctx;
// let flowField;
// let flowFieldAnimation;

// // document.onload will load after everthing in DOM is loaded
// window.onload = function(){
//     canvas = document.getElementById('canvas1');
//     ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
//     // passing zero for first inital frame
//     flowField.animate(0);
// }

// window.addEventListener('resize', function(){
//     cancelAnimationFrame(flowFieldAnimation);
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
//     flowField.animate(0);
// });

// const mouse = {
//     x:0,
//     y:0
// }

// window.addEventListener('mousemove', function(e){
//     mouse.x = e.x;
//     mouse.y = e.y;
// });

// //classes are not hoisted like functions
// //so can class before it's declared
// class FlowFieldEffect{
//     // private class fields
//     #ctx;
//     #width;
//     #height;
//     constructor(ctx, width, height){
//         this.#ctx = ctx;
       
//         this.#ctx.lineWidth = 0.3;
//         this.#width = width;
//         this.#height = height;
        
//         // timestamp and delta so faster and older computers run animation the same
//         this.lastTime = 0;
//         // helper variables to uses deltatime in intervals
//         // interval set to 1000/60, 60fps
//         this.interval = 1000/60;
//         this.timer = 0;
//         // vector field are grids that points to a direction
//         // cellSize to represent how big cells in grid will be
//         this.cellSize = 7; // ex. 15 is 15x 15 pixels
//                 // can change cell size properties for differentt results
//         this.gradient;
//         this.#createGradient();
//         this.#ctx.strokeStyle = this.gradient;
//     }

//     #createGradient(){
//         // first two paramaters are starting coords and last two parms are ending coords
//         this.gradient = this.#ctx.createLinearGradient(0, 0, this.#width, this.#height);
//         //two params: 1 offset (between 0-start and 1-end) ; 2 is color
//         this.gradient.addColorStop("0.1", "#ff5c33");
//         this.gradient.addColorStop("0.2", "#ff66b3");
//         this.gradient.addColorStop("0.3", "#ccccff");
//         this.gradient.addColorStop("0.6", "#b3ffff");
//         this.gradient.addColorStop("0.8", "#80ff80");
//         this.gradient.addColorStop("0.9", "#ffff33");
//     }
//     #drawLine(angle, x,y){
//         const length = 300;
//         this.#ctx.beginPath();
//         this.#ctx.moveTo(x,y);
//         // to change length and direction of lines
//         //this.#ctx.lineTo(x + angle,y+ angle);
//         //this.#ctx.lineTo(x + angle * 20 ,y+ angle * 20);
//         this.#ctx.lineTo(x + Math.cos(angle) * 30 ,y+ Math.sin(angle) * 30);
//         this.#ctx.stroke();
//     }

//     // requestAnimationFrame creates a timestamp value automatically
//     animate(timeStamp){
//         const deltaTime = timeStamp - this.lastTime;
//         this.lastTime = timeStamp;
//         if(this.timer > this.interval){
            
//             //comment following to see tracign effect of lines
//             this.#ctx.clearRect(0,0, this.#width, this.#height);

//             // to set cells among canvas, grid created with nested loops
//             // we fill by rows with the following
//             for(let y = 0; y < this.#height; y+= this.cellSize){
//                 for(let x = 0; x < this.#width; x += this.cellSize){
//                     // multilication of y and x creates rotation and how zoomed in we are to pattern
//                     // the outer multipilicaition is for how much it curves in itself
//                     const angle = (Math.cos(x * 0.01) + Math.sin(y * 0.01)) * 5;
//                     this.#drawLine(angle, x, y);
//                 }
//             }
            
//             //console.log('animating');
//             //console.log(deltaTime);
//             //console.log(timeStamp);
//             this.timer = 0
//         } else{
//             this.timer += deltaTime;
//         }
        
//         flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
//     }


// }

//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------------
//                              Vector Field p.2
// note: 
//----------------------------------------------------------------------------------------------------------------------------

// let canvas;
// let ctx;
// let flowField;
// let flowFieldAnimation;

// // document.onload will load after everthing in DOM is loaded
// window.onload = function(){
//     canvas = document.getElementById('canvas1');
//     ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
//     // passing zero for first inital frame
//     flowField.animate(0);
// }

// window.addEventListener('resize', function(){
//     cancelAnimationFrame(flowFieldAnimation);
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
//     flowField.animate(0);
// });

// const mouse = {
//     x:0,
//     y:0
// }

// window.addEventListener('mousemove', function(e){
//     mouse.x = e.x;
//     mouse.y = e.y;
// });

// //classes are not hoisted like functions
// //so can class before it's declared
// class FlowFieldEffect{
//     // private class fields
//     #ctx;
//     #width;
//     #height;
//     constructor(ctx, width, height){
//         this.#ctx = ctx;
//         this.#ctx.lineWidth = 1;
//         this.#width = width;
//         this.#height = height;
//         this.lastTime = 0;
//         this.interval = 1000/60;
//         this.timer = 0;
//         this.cellSize = 15; 
//         this.gradient;
//         this.#createGradient();
//         this.#ctx.strokeStyle = this.gradient;
//         this.radius = 5;
//         // velocity of radius
//         this.vr = 0.03;
//     }

//     #createGradient(){
//         this.gradient = this.#ctx.createLinearGradient(0, 0, this.#width, this.#height);
//         this.gradient.addColorStop("0.1", "#ff5c33");
//         this.gradient.addColorStop("0.2", "#ff66b3");
//         this.gradient.addColorStop("0.3", "#ccccff");
//         this.gradient.addColorStop("0.6", "#b3ffff");
//         this.gradient.addColorStop("0.8", "#80ff80");
//         this.gradient.addColorStop("0.9", "#ffff33");
//     }
//     #drawLine(angle, x,y){
//         //const length = 300;
//         const length = 20;
//         this.#ctx.beginPath();
//         this.#ctx.moveTo(x,y);
//         this.#ctx.lineTo(x + Math.cos(angle) * length ,y+ Math.sin(angle) * length);
//         this.#ctx.stroke();
//     }

//     animate(timeStamp){
//         const deltaTime = timeStamp - this.lastTime;
//         this.lastTime = timeStamp;
//         if(this.timer > this.interval){
            
            
//             this.#ctx.clearRect(0,0, this.#width, this.#height);
//             this.radius += this.vr;
//             // to make animation bounce between values
//             if(this.radius > 5 || this.radius < -5 ) this.vr *= -1;

//             for(let y = 0; y < this.#height; y+= this.cellSize){
//                 for(let x = 0; x < this.#width; x += this.cellSize){
//                     const angle = (Math.cos(x * 0.01) + Math.sin(y * 0.01)) * this.radius;
//                     this.#drawLine(angle, x, y);
//                 }
//             }
            
        
//             this.timer = 0
//         } else{
//             this.timer += deltaTime;
//         }
        
//         flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
//     }


// }

//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------------------------------------
//                              Vector Field p.3
// note: 
//----------------------------------------------------------------------------------------------------------------------------

// let canvas;
// let ctx;
// let flowField;
// let flowFieldAnimation;

// window.onload = function(){
//     canvas = document.getElementById('canvas1');
//     ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
//     flowField.animate(0);
// }

// window.addEventListener('resize', function(){
//     cancelAnimationFrame(flowFieldAnimation);
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
//     flowField.animate(0);
// });

// const mouse = {
//     x:0,
//     y:0
// }

// window.addEventListener('mousemove', function(e){
//     mouse.x = e.x;
//     mouse.y = e.y;
// });


// class FlowFieldEffect{
//     #ctx;
//     #width;
//     #height;
//     constructor(ctx, width, height){
//         this.#ctx = ctx;
//         this.#ctx.lineWidth = 1;
//         this.#width = width;
//         this.#height = height;
//         this.lastTime = 0;
//         this.interval = 1000/60;
//         this.timer = 0;
//         this.cellSize = 15; 
//         this.gradient;
//         this.#createGradient();
//         this.#ctx.strokeStyle = this.gradient;
//         this.radius = 5;
//         this.vr = 0.03;
//     }

//     #createGradient(){
//         this.gradient = this.#ctx.createLinearGradient(0, 0, this.#width, this.#height);
//         this.gradient.addColorStop("0.1", "#ff5c33");
//         this.gradient.addColorStop("0.2", "#ff66b3");
//         this.gradient.addColorStop("0.3", "#ccccff");
//         this.gradient.addColorStop("0.6", "#b3ffff");
//         this.gradient.addColorStop("0.8", "#80ff80");
//         this.gradient.addColorStop("0.9", "#ffff33");
//     }
//     #drawLine(angle, x,y){

//         let positionX = x;
//         let positionY = y;

//         // get sides known for pythagoras theorem
//         let dx = mouse.x - positionX;
//         let dy = mouse.y - positionY;

//         // distance = Math.sqrt(dx * dy + dy * dy)
//         let distance = dx * dx + dy * dy;
//         if( distance > 6000000) distance = 600000;
//         else if( distance < 50000) distance = 50000;
//         // using long number because we didnt sqrt, cause sqrt will take too long
//         let length = distance/10000;
//         this.#ctx.beginPath();
//         this.#ctx.moveTo(x,y);
//         this.#ctx.lineTo(x + Math.cos(angle) * length ,y+ Math.sin(angle) * length);
//         this.#ctx.stroke();
//     }

//     animate(timeStamp){
//         const deltaTime = timeStamp - this.lastTime;
//         this.lastTime = timeStamp;
//         if(this.timer > this.interval){
            
            
//             this.#ctx.clearRect(0,0, this.#width, this.#height);
//             this.radius += this.vr;
            
//             if(this.radius > 5 || this.radius < -5 ) this.vr *= -1;

//             for(let y = 0; y < this.#height; y+= this.cellSize){
//                 for(let x = 0; x < this.#width; x += this.cellSize){
//                     const angle = (Math.cos(x * 0.01) + Math.sin(y * 0.01)) * this.radius;
//                     this.#drawLine(angle, x, y);
//                 }
//             }
            
        
//             this.timer = 0
//         } else{
//             this.timer += deltaTime;
//         }
        
//         flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
//     }


// }

//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------------
//                              Vector Field p.4
// note: 
//----------------------------------------------------------------------------------------------------------------------------

let canvas;
let ctx;
let flowField;
let flowFieldAnimation;

window.onload = function(){
    canvas = document.getElementById('canvas1');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate(0);
}

window.addEventListener('resize', function(){
    cancelAnimationFrame(flowFieldAnimation);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate(0);
});

const mouse = {
    x:0,
    y:0
}

window.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
});


class FlowFieldEffect{
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height){
        this.#ctx = ctx;
        this.#ctx.lineWidth = 1;
        this.#width = width;
        this.#height = height;
        this.lastTime = 0;
        this.interval = 1000/60;
        this.timer = 0;
        this.cellSize = 20; 
        this.gradient;
        this.#createGradient();
        this.#ctx.strokeStyle = this.gradient;
        this.radius = 5;
        this.vr = 0.03;
    }

    #createGradient(){
        this.gradient = this.#ctx.createLinearGradient(0, 0, this.#width, this.#height);
        this.gradient.addColorStop("0.1", "#ff5c33");
        this.gradient.addColorStop("0.2", "#ff66b3");
        this.gradient.addColorStop("0.3", "#ccccff");
        this.gradient.addColorStop("0.6", "#b3ffff");
        this.gradient.addColorStop("0.8", "#80ff80");
        this.gradient.addColorStop("0.9", "#ffff33");
    }
    #drawLine(angle, x,y){

        let positionX = x;
        let positionY = y;

        // get sides known for pythagoras theorem
        let dx = mouse.x - positionX;
        let dy = mouse.y - positionY;

        // distance = Math.sqrt(dx * dy + dy * dy)
        let distance = dx * dx + dy * dy;
        if( distance > 6000000) distance = 600000;
        else if( distance < 50000) distance = 50000;
        // using long number because we didnt sqrt, cause sqrt will take too long
        let length = distance/10000;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x,y);
        this.#ctx.lineTo(x + Math.cos(angle) * length ,y+ Math.sin(angle) * length);
        this.#ctx.stroke();
    }

    animate(timeStamp){
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        if(this.timer > this.interval){
            
            
            this.#ctx.clearRect(0,0, this.#width, this.#height);
            this.radius += this.vr;
            
            if(this.radius > 5 || this.radius < -5 ) this.vr *= -1;

            for(let y = 0; y < this.#height; y+= this.cellSize){
                for(let x = 0; x < this.#width; x += this.cellSize){
                    const angle = (Math.cos(mouse.x * x * 0.00001) + Math.sin(mouse.y *y * 0.00001)) * this.radius;
                    this.#drawLine(angle, x, y);
                }
            }

            
            
        
            this.timer = 0
        } else{
            this.timer += deltaTime;
        }
        
        flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
    }


}

//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
