// select an element h1
const countdown=document.querySelector(".countdown")
let time=10;

countdown.innerHTML=time--;
setTimeout(()=>{

    countdown.innerHTML=time--;
    setTimeout(()=>{
        countdown.innerHTML=time--;
        setTimeout(()=>{
            countdown.innerHTML=time--;
            setTimeout(()=>{
                countdown.innerHTML=time--;
                setTimeout(()=>{
                    countdown.innerHTML=time--;
                    setTimeout(()=>{ 
                        countdown.innerHTML=time--;
                        setTimeout(()=>{
                            countdown.innerHTML=time--;
                            setTimeout(()=>{
                                countdown.innerHTML=time--;
                                setTimeout(()=>{
                                    countdown.innerHTML=time--;
                                    setTimeout(()=>{
                                        countdown.innerHTML=time--;
                                        countdown.innerHTML="Happy Independence day";
            },1000);
            },1000);
        },1000);
    },1000); 
    },1000);
},1000);
},1000);
 },1000);
},1000);
 },1000);
