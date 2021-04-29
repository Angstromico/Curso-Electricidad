console.log('¡Funciona!');
//querySelector
const heading = document.querySelector('.header__texto h2'); //Retorna 0 o 1 elementos
console.log(heading);
heading.textContent = 'Blog de Electrónica con Consejos y Cursos Avanzados';
heading.classList.add('new-class');
//querySelectorAll
const links = document.querySelectorAll('.enlaces a');
console.log(links);
console.log(links[1]);
links[2].textContent = 'Contáctanos';
//links[0].href = 'www.google.com';
links[0].classList.add('zelda');
links[0].classList.remove('zelda');
//getElementbyID
const secondHeading = document.getElementById('heading');
console.log(secondHeading);
//Generar enlace con JavaScript
const newLink = document.createElement('A');
newLink.href = 'Nuevo-Enlace.html';
newLink.textContent = 'Curso Introductorio';
newLink.classList.add('enlaces__nav');
console.log(newLink);
const navegation = document.querySelector('.enlaces');
navegation.appendChild(newLink);
//Eventos
console.log(4);
function memoryCard() {
    console.log(1)
};
window.addEventListener('load', memoryCard); //ESPERA POR TODO PARA DESPUES EJECUTAR FUNCION
window.onload = function () {
    console.log(2)
}; //ESPERA A QUE CARGUE TODO
document.addEventListener('DOMContentLoaded', function () {
    console.log(3)
}); //Espera a que cargue HTML
window.onscroll = function () {
    console.log('scrolling')
};
//sELECCIONAR ELEMENTOS Y DARLES EVENTOS
/*const enviar = document.querySelector('.boton--primario');
enviar.addEventListener('click', function(evento) {
    evento.preventDefault();
    console.log(evento);
    console.log('enviando');
});*/
//Eventos de inputs y textareas
const formulario = {
    Nombre: '',
    EMail: '',
    Texto: ''
};
function leeme(e) {
    formulario[e.target.id] = e.target.value
    console.log(formulario)
};
const nombre = document.querySelector('#Nombre');
nombre.addEventListener('input', leeme);//Aplica cambios despues de la acción
const email = document.querySelector('#EMail');
email.addEventListener('input', leeme);//Aplica cambios en tiempo real.
const texto = document.querySelector('#Texto');
texto.addEventListener('input', leeme);
//Eventos en el submit
const form = document.querySelector('.formulario');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Validar Formulario
/*function lleneFormulario(aviso, falla = null) {
   const malLlenado = document.createElement('P');
   malLlenado.textContent = aviso;
   console.log(malLlenado);
   malLlenado.classList.add('error');
   form.appendChild(malLlenado);
   //Desaparecer alerta despues de 4 segundos
   setTimeout(() => {
       malLlenado.remove();
   }, 4000);
};  
function bienHecho(alerta) {
    const bien = document.createElement('P');
    bien.textContent = alerta;
    console.log(bien);
    bien.classList.add('bien');
    form.appendChild(bien);
    setTimeout(() => bien.remove(), 4000);
}*/
function alerta(mensaje, fallo = null) {
    const dual = document.createElement('P');
    console.log(dual);
    dual.textContent = mensaje;
    if (fallo) {
        dual.classList.add('error');
    } else {
        dual.classList.add('bien')
    }
    form.appendChild(dual);
    setTimeout(() => dual.remove(), 4000);
}
const {Nombre, EMail, Texto} = formulario;
    if(Nombre === '' | EMail === '' | Texto === '') {
        alerta('Todos los campos son obligatorios', 'fallo')
        console.log('El campo esta vacio')
        return;//Corta acción sino se cumple condición
    };
    alerta('El Formulario ha sido Llenado Correptamente');
    console.log('Enviando Formulario');
});

//Curso Introductorio
 function mostrar(id) {
    if (id == "curso-introductorio") {
        $("#curso-introductorio").show();
        $("#examen-de-admision").hide();
    }
    if (id == "examen-de-admision") {
        $("#examen-de-admision").show();
        $("#curso-introductorio").hide();
    }
 };
 //Formularios de Inscripción
 /*const form2 = document.getElementById('formulario');
 const campos = {
     Nombre1: '',
     Apellido: '',
     Cursos: null,
     Periodos: null,
     Nacionalidades: null,
     ID: 0
 }
 const nombre1 = document.getElementById('Nombre1');
 const apellido = document.getElementById('Apellido');
 const cursos = document.getElementById('Cursos');
 const periodos = document.getElementById('Periodos');
 const nacionalidades = document.getElementById('Nacionalidades');
 const id = document.getElementById('ID');
 function leemee(e) {
    campos[e.target.id] = e.target.value;
};
 nombre1.addEventListener('input', leemee);
 apellido.addEventListener('input', leemee);
 cursos.addEventListener('input', leemee);
 periodos.addEventListener('input', leemee);
 nacionalidades.addEventListener('input', leemee);
 id.addEventListener('input', leemee);
 
    form2.addEventListener('submit', e => {
        e.preventDefault();
        console.log('Hola')
        function aviso(mensaje, fallo = null) {
           const pal = document.createElement('P');
           pal.textContent = mensaje;
           if (error) {
               dual.classList.add('fallo');
           } else {
               dual.classList.add('acierto');
           }
           form1.appendChild(pal);
           setTimeout(() => pal.remove(), 6000);
       }
       const {Nombre1, Apellidos, Cursos, Periodos, Nacionalidades, ID} = campos;
       if(Nombre1 === '' | Apellidos === '' | Cursos === null | Periodos === null | Nacionalidades === null | ID === 0) {
           aviso('Llene Todos Ls Campos Por Favor', 'error')
           return;//Corta acción sino se cumple condición
       } else {
           aviso('Ya Pertenece a Nuestra Base de Datos');
       } 
    })*/
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("formulario").addEventListener('submit', validarFormulario); 
      });
      function validarFormulario(evento) {
        evento.preventDefault();
        const nombre1 = document.getElementById('Nombre1').value;
        const apellido = document.getElementById('Apellido').value;
        const cursos = document.getElementById('Cursos').value;
        const periodos = document.getElementById('Periodos').value;
        const nacionalidades = document.getElementById('Nacionalidades').value;
        const id = document.getElementById('ID').value;
        if(nombre1 === '' | apellidos === '' | cursos === '' | periodos === '' | nacionalidades === '' | id === '') {
          alert('No has escrito nada en el usuario');
          return;
        }
        this.submit();
};
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario1").addEventListener('submit', validarFormulario); 
  });
  function validarFormulario(evento) {
    evento.preventDefault();
    const nombre2 = document.getElementById('Nombre2').value;
    const apellido1 = document.getElementById('Apellido1').value;
    const cursos1 = document.getElementById('Cursos1').value;
    const periodos1 = document.getElementById('Periodos1').value;
    const nacionalidades1 = document.getElementById('Nacionalidades1').value;
    const id1 = document.getElementById('ID1').value;
    if(nombre2 === '' | apellidos1 === '' | cursos1 === '' | periodos1 === '' | nacionalidades1 === '' | id1 === '') {
      alert('No has escrito nada en el usuario');
      return;
    }
    this.submit();
}


 
 
 