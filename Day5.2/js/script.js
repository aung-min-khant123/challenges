let theme = document.documentElement;
console.log(theme)

let btns = document.querySelectorAll(".btn");
console.log(btns)

btns.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        // console.log(e.currentTarget.classList)
        let btnClass = e.currentTarget.classList;
        if(btnClass.contains("btn1")){
            theme.style.setProperty("--theme-color", "#3498db")
        }else if(btnClass.contains("btn2")){
            theme.style.setProperty("--theme-color", "#ff1756")
        }else if(btnClass.contains("btn3")){
            theme.style.setProperty("--theme-color", "#1cb65d")
        }else if(btnClass.contains("btn4")){
            theme.style.setProperty("--theme-color", "#8e44ad")
        }else{
            theme.style.setProperty("--theme-color", "#f4b932");
        }
    })
})