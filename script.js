let hr=0;
let min=0;
let sec=0;
let count=0;

let timer=false;


function  start(){
  timer=true;
  stopwatch();

}


function stop(){
   timer=false;
}
function reset(){

  timer=false;

  document.getElementById("hr").innerHTML="00";

  document.getElementById("min").innerHTML="00";

  document.getElementById("sec").innerHTML="00";

   document.getElementById("count").innerHTML="00";
}


function stopwatch(){
    if(timer==true){
        
        count=count+1;
       //console.log(count);
         
       if(count==100){

        sec=sec+1;
        count=0;

       }
       //console.log(sec);

       if(sec==60){
         min+=1;
         sec=0;
       }
        
       if(min==60){
         hr+=1;
         sec=0;
         min=0;
       }
        
       let c=(count>9?count:"0"+count);
        
       let s=(sec>9?sec:"0"+sec);

       let m=(min>9?min:"0"+min);

       let h=(hr>9?hr:"0"+hr);


       document.getElementById("hr").innerHTML=h;

       document.getElementById("min").innerHTML=m;

       document.getElementById("sec").innerHTML=s;

        document.getElementById("count").innerHTML=c;

        setTimeout( "stopwatch()",10);
    }
  
}