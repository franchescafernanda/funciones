/* console.log("hola") */


function pintar(event, color = 'green') {
    event.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
pintar(ele)

ele.addEventListener("click", function(){
    pintar(ele, 'yellow');
});