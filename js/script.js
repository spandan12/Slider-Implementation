var container= document.getElementsByClassName('Container')[0];
Object.assign(container.style,{
    position:'relative',
    marginLeft:'200px',
    height : '300px',
    width:'800px',
    overflow:'hidden'
});

var wrapper=document.getElementsByClassName('wrapper')[0];
// console.log(wrappers[0]);

Object.assign(wrapper.style,{
    position : 'absolute',
    left : '0px',
    top : '50px',
    // overflow : 'hidden',
    // width : '800px',
    height : '300px'
});
imageadded=document.createElement('img');
// imageadded.classList.add("lastimage");
imageadded.src="./images/1.jpg";
wrapper.appendChild(imageadded); 

console.log(wrapper.children);
var images=wrapper.children;

for(i=0;i<(images.length);i++){
    images[i].classList.add('image'+(i+1));
    Object.assign(images[i].style,{
        position : 'absolute',
        left : `${i*800}px`,
        width:'800px',
        height:'300px'
    });
}



// console.log(images)



function slideleft(){
    var counter=0;
    
    var interval = setInterval(function() {
        
        var str =wrapper.style.left;
        wrapper_position=parseInt((str.substring(0,str.length-2)));
        // console.log(wrapper_position);

        //for cyclic
        if(wrapper_position == -3920){
            wrapper.style.left=`${0}px`;
            wrapper_position=wrapper.style.left;
            // console.log(wrapper.style.left);
            // clearInterval(interval);
        }
        wrapper.style.left=`${wrapper_position-80}px`;
        // console.log(wrapper.style.left);
        counter++;
        if(counter==10){
            clearInterval(interval);
        }
    }, 100);
}

function slideright(){
    var counter=0;
    
    var interval = setInterval(function() {
        var str =wrapper.style.left;
        wrapper_position=parseInt((str.substring(0,str.length-2)));
        console.log(wrapper_position);
        if(wrapper_position == 0){
            wrapper.style.left=`${-3920}px`;
            wrapper_position=wrapper.style.left;
        }
        wrapper.style.left=`${wrapper_position+80}px`;
        counter++;
        if(counter==10){
            clearInterval(interval);
        }
    }, 100);
}

