/* seguir ejemplo para cambiar el color de los cuadrados
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        cambiar a color 1
    } if (event.key === 's') {
        cambiar a color 2
    }
}) */ 

const divA = document.getElementById("1")
const divE = document.getElementById("2")
const divI = document.getElementById("3")
const divO = document.getElementById("4")
const divKey = document.getElementById("key")

/*aqui cree estilos desde js para cada cuadrado*/
function ponerEstilos(elemento, color, width = "200px", height = "200px", margin = "15px") {
    elemento.style.backgroundColor = color
    elemento.style.width = width
    elemento.style.height = height
    elemento.style.margin = margin
}


/*aqui implementamos colores a cada cuadrado*/
ponerEstilos(divA, "blue")
ponerEstilos(divE, "red")
ponerEstilos(divI, "green")
ponerEstilos(divO, "yellow")
ponerEstilos(divKey, "white")
divKey.style.border = "solid 1px black"

/*aqui cambie cada cuadrado a color negro*/
const changeBackgroundColor = (event) => {
    event.target.style.backgroundColor = "black"
}

divA.addEventListener("click", changeBackgroundColor)
divE.addEventListener("click", changeBackgroundColor)
divI.addEventListener("click", changeBackgroundColor)
divO.addEventListener("click", changeBackgroundColor)

/*aqui implemente que cada letra cambie al color solicitado y se replique las veces que se presione cada letra*/
document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        divKey.style.backgroundColor = "pink"
    } else if (event.key === 's') {
        divKey.style.backgroundColor = "orange"
    } else if (event.key === 'd') {
        divKey.style.backgroundColor = "skyblue"
    } else if (event.key === 'q') {
        createNewdiv("purple")
    } else if (event.key === 'w') {
        createNewdiv("gray")
    } else if (event.key === 'e') {
        createNewdiv("brown")
    }
})

/*aqui a cada div nuevo le implementamos los estilos*/
function createNewdiv(color) {
    const newDiv = document.createElement("div")
    newDiv.style.width = "200px"
    newDiv.style.height = "200px"
    newDiv.style.margin = "200px"
    newDiv.style.backgroundColor = color
    
    document.body.appendChild(newDiv)
}
