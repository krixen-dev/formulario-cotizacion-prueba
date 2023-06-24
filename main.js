//se crea una variable por cada contenedor ó paso
var container_paso1 = document.getElementById("container-paso1");
var container_paso2 = document.getElementById("container-paso2");
var container_paso3 = document.getElementById("container-paso3");
var container_presupuesto = document.getElementById("container-presupuesto");
//Se crea una variable por cada contenedor de botónes
var container_btn1 = document.getElementById("container-btn1");
var container_btn2 = document.getElementById("container-btn2");
var container_btn3 = document.getElementById("container-btn3");
var container_btn_presupuesto = document.getElementById("container-btn-presupuesto");
//Se crea una variable por cada botón, para luego darle función
var boton_next1 = document.getElementById("btn-next1");
var boton_prev2 = document.getElementById("btn-prev2");
var boton_next2 = document.getElementById("btn-next2");
var boton_prev3 = document.getElementById("btn-prev3");
var boton_prev4 = document.getElementById("btn-prev4");
var boton_presupuesto = document.getElementById("btn-presupuesto");
var boton_imprimir = document.getElementById("btn-imprimir");
// test
//se crea una variable por cada información que el usuario ingresa en los inputs
var nombre_input = document.getElementById("nombre-input");
var mostrar_nombre = document.getElementById("imprimir-nombre");
var apellido_input = document.getElementById("apellido-input");
var mostrar_apellido = document.getElementById("imprimir-apellido");
var email_input = document.getElementById("email-input");
var mostrar_email = document.getElementById("imprimir-email");
var servicio1_input = document.getElementsByName("servicio");
var mostrar_servicio1 = document.getElementById("imprimir-servicio1");


function next_paso(actual, proximo) {
    actual.style.display = "none"; //ACTUAL = contenedor que desaparece (ej: paso2)
    proximo.style.display = "block";//PROXIMO = contenedor que aparece (ej: paso3)
    //Esta función ADELANTA un paso y se utiliza solo para contenedores de formulario ("xxxx_PASO") 
}

function prev_paso(actual, anterior) {
    actual.style.display = "none";
    anterior.style.display = "block";
    //VUELVE un paso atrás al cont. de formulario
}

function prev_boton(actual, anterior) {
    actual.style.display = "none";//ACTUAL = contenedor que desaparece (ej: paso2)
    anterior.style.display = "flex";//ANTERIOR = contenedor que aparece (ej: paso1)
    //Esta función VUELVE un paso y se utiliza solo para contenedores de botónes ("xxxx_BOTON") 
}

function next_boton(actual, proximo) {
    actual.style.display = "none"; 
    proximo.style.display = "flex";
    //VUELVE un paso atrás al cont. de botónes
}


function mostrarSeleccion() {
    var checkboxes = document.getElementsByName("servicio");
    var seleccionadas = []; //array
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            seleccionadas.push(checkboxes[i].value);
            //por cada vuelta verifica si un checkbox es marcado, si es True lo guarda en el array
        }
    }
    mostrar_servicio1.textContent = seleccionadas.join(", "); //muestra en pantalla los servicios seleccionados
}

boton_next1.addEventListener("click", function (e) {
    e.preventDefault(); //La función preventDefault se usa para evitar el comportamiento por defecto del navegador
    next_paso(container_paso1, container_paso2);
    next_boton(container_btn1, container_btn2);
})

boton_prev2.addEventListener("click", function (e) {
    e.preventDefault();
    prev_paso(container_paso2, container_paso1);
    prev_boton(container_btn2, container_btn1);
})

boton_next2.addEventListener("click", function (e) {
    e.preventDefault();
    next_paso(container_paso2, container_paso3);
    next_boton(container_btn2, container_btn3);
})

boton_prev3.addEventListener("click", function (e) {
    e.preventDefault();
    prev_paso(container_paso3, container_paso2);
    prev_boton(container_btn3, container_btn2);
})

boton_presupuesto.addEventListener("click", function (e) {
    e.preventDefault();
    next_paso(container_paso3, container_presupuesto);
    next_boton(container_btn3, container_btn_presupuesto);
    //Mostrar información en pantalla
    mostrar_nombre.textContent = nombre_input.value;
    mostrar_apellido.textContent = apellido_input.value;
    mostrar_email.textContent = email_input.value;
    mostrarSeleccion();
})

boton_prev4.addEventListener("click", function (e) {
    e.preventDefault();
    prev_paso(container_presupuesto, container_paso3);
    prev_boton(container_btn_presupuesto, container_btn3);
})




