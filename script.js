
let navopen = false;
if(window.innerWidth>720){
    document.onscroll=()=>{
        let home = document.querySelector(".homesection");
        let homebg = document.querySelector(".homebg");
        if(home){
            let y = home.getBoundingClientRect().top;
            homebg.style.opacity=(Math.abs(y)/window.innerHeight)+0.25;
            homebg.style.setProperty("--blur",((Math.abs(y)/window.innerHeight)*15)+5)
            let nav2 = document.querySelector(".navigation2");
            let abtimg = document.querySelector(".abtimg");
            let hs = [document.querySelector(".abtsec>h1"), document.querySelector(".abtsec>p")]
            nav2.style.opacity=Math.pow((Math.abs(y)/window.innerHeight),2);
            if(home.clientHeight>Math.abs(home.getBoundingClientRect().top)){
                abtimg.style.right=(-1 * Math.abs(home.clientHeight+home.getBoundingClientRect().top) * 0.05)+"%";
                hs.forEach(hs=>{
                    hs.style.transform=`translateX(${(-1 * Math.abs(home.clientHeight+home.getBoundingClientRect().top) * 0.05)}%)`;
                    hs.style.opacity=Math.abs(home.getBoundingClientRect().top)/home.clientHeight;
                })
            }
        }
    }   
}
else{
    document.onscroll=()=>{
        let home = document.querySelector(".homesection");
        let homebg = document.querySelector(".homebg");
        if(home){
            let y = home.getBoundingClientRect().top;
            homebg.style.opacity=(Math.abs(y)/window.innerHeight)+0.25;
            homebg.style.setProperty("--blur",((Math.abs(y)/window.innerHeight)*15)+5)
            let hs = [document.querySelector(".abtsec>h1"), document.querySelector(".abtsec>p")]
            if(home.clientHeight>Math.abs(home.getBoundingClientRect().top)){
                hs.forEach(hs=>{
                    hs.style.transform=`translateX(${(-1 * Math.abs(home.clientHeight+home.getBoundingClientRect().top) * 0.05)}%)`;
                    hs.style.opacity=Math.abs(home.getBoundingClientRect().top)/home.clientHeight;
                })
            }
        }
    }
}
function closenav(){
    if(!navopen){
        navopen = true;
        let navbox = document.querySelector(".navbg");
        // let navbx = document.querySelector(".navbox");
        let navbtn = document.querySelector(".navbutton");
        navbox.style.left="0px";
        // navbx.style.right="0px";
        navbtn.innerHTML="&#x2715;"
        return
    }
    navopen = false;
    let navbox = document.querySelector(".navbg");
    // let navbx = document.querySelector(".navbox");
    let navbtn = document.querySelector(".navbutton");
    navbox.style.left="100vw";
    // navbx.style.right="-75vw";
    navbtn.innerHTML="&#8801;"
}
window.onload=()=>{
    window.scrollTo(0,0);
    let navbox = document.querySelector(".navbg");
    if(window.innerWidth<720){
        navbox.addEventListener("click",closenav);
    }
    setTimeout(() => {
        let loadscrn = document.querySelector(".loadscreen");
        loadscrn.style.opacity=0;
        setTimeout(() => {
            loadscrn.style.display="none";
        }, 1000);
    }, 1000);
}