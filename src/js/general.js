(function(){
    var actualizarHora= function(){
        var fecha = new Date();
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            dia = fecha.getDate(),
            mes=fecha.getMonth()+1,
            year = fecha.getFullYear();


        var pHoras = document.getElementById("horas"),
            pAMPM = document.getElementById("ampm"),
            pMinutos = document.getElementById("minutos"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pYear = document.getElementById("year");

        pDia.textContent = dia;
        pYear.textContent = year;

        if(horas >=12 ){
            horas = horas - 12;
            ampm = "PM";
        }else{
            ampm = "AM"
        }

        if(horas == 0){
            horas = 12;
        }

        
        pAMPM.textContent = ampm
        if(horas < 10){ horas= "0" + horas};
        if(minutos < 10){ minutos= "0" + minutos};
        if(mes < 10){ mes= "0" + mes};
        pMes.textContent = mes;
        pHoras.textContent = horas;
        pMinutos.textContent = minutos;
    };



    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
}())

const btn_menu = document.getElementById("btn_menu");
btn_menu.style.cursor = "pointer";

const desck = document.getElementById("escritorio");


btn_menu.addEventListener('click', () =>{
    let menu = document.getElementById("home");
    let elementDisplay = menu.style.display;

    if(elementDisplay=="none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
});

desck.addEventListener('click', () =>{
    let menu = document.getElementById("home");
    let elementDisplay = menu.style.display;

    if(elementDisplay=="block"){
        menu.style.display = "none";
    }
});

document.addEventListener("keydown", e =>{
    let menu = document.getElementById("home");
    let elementDisplay = menu.style.display;
    if(e.metaKey){
        if(elementDisplay=="none"){
            menu.style.display = "block";
        }
    }else{
        if(elementDisplay=="block"){
            menu.style.display = "none";
        }
    }
});


const btn_minimizar = document.getElementById("minimizar");
const mostrar_programa = document.getElementById("mostrar_programa");
mostrar_programa.style.cursor = "pointer";


btn_minimizar.addEventListener('click', () =>{
    let program = document.getElementById("program");
    let programDisplay = program.style.display;

    if(programDisplay=="none"){
        program.style.display = "block";
    }else{
        program.style.display = "none";
    }
});

mostrar_programa.addEventListener('click', () =>{
    let program = document.getElementById("program");
    let programDisplay = program.style.display;
    if(programDisplay=="none"){
        program.style.display = "block";
    }else{
        program.style.display = "none";
    }
});

function allwDrop(event){
    event.preventDefault();
}

function drag(event){
    
}

program.onmousedown = function(event){
    let program = document.getElementById("program");
    let shiftX = event.clientX - program.getBoundingClientRect().left;
    let shiftY = event.clientY - program.getBoundingClientRect().top;

    program.style.position = "absolute";
    
    moveAt(event.pageX, event.pageY);
    
    function moveAt(pageX, pageY){
        program.style.left = pageX -  shiftX + "px";
        program.style.top = pageY -  shiftY + "px";
    };

    
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    };

    program.addEventListener('mousemove', onMouseMove);
    
    program.onmouseup = function() {
        program.removeEventListener('mousemove', onMouseMove);
        program.onmouseup = null;
      };
}

program.ondragstart = function() {
    return false;
};