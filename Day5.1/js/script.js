let theme = document.documentElement;
console.log(theme)

let btns = document.querySelectorAll(".btn");
console.log(btns)

btns.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        // console.log(e.currentTarget.classList)
        let btnClass = e.currentTarget.classList;
        if(btnClass.contains("btn1")){
            theme.style.setProperty("--theme-color", "rgb(79, 150, 150)")
        }else if(btnClass.contains("btn2")){
            theme.style.setProperty("--theme-color", "rgb(129, 124, 50)")
        }else if(btnClass.contains("btn3")){
            theme.style.setProperty("--theme-color", "rgb(12, 218, 81)")
        }else{
            theme.style.setProperty("--theme-color", "rgb(150, 79, 91)")
        }
    })
})