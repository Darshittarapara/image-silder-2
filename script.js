let count =2;
var c =document.querySelector(".display");
c.style.display="block"

function call(x){
    count =count+x;
    sildeshow(count);
}
function sildeshow(num){
    let r =document.getElementsByClassName("silder");
 
    if(num==r.length){
        count=0;
        num=0;
    }
    if (num<0){
        count =r.length-1;
        num =r.length-1;
    }
    for(let d of r) {
        d.style.display="none";
    }
    
    r[num].style.display="block";



}