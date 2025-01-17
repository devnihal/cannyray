document.onscroll=()=>{
    let home = document.querySelector(".homesection");
    let homebg = document.querySelector(".homebg");
    if(home){
        let y = home.getBoundingClientRect().top;
        homebg.style.opacity=(Math.abs(y)/window.innerHeight)+0.25;
        homebg.style.setProperty("--blur",((Math.abs(y)/window.innerHeight)*15)+5)
    }
}