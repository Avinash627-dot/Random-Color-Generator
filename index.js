
document.querySelector("button").addEventListener("click",function (param) { 
    var elements = "abcdef0123456789",color = "#";
    for (i = 0; i < 6; i++){
        color = color +  elements[Math.floor(Math.random()*16)];
    }
    
    document.querySelector("body").style.background = color;
    document.querySelector("h1").innerHTML = color;
    document.querySelector("button").style.backgroundColor = color;

 })
    

