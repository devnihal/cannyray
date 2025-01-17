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