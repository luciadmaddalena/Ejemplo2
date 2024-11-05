function iniciarFormulario(){
    const form = document.getElementById('presentacion');
    if(form){
        form.addEventListener('submit', enviarDatos);
        }
}

function enviarDatos(event){
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad')
    const color = document.getElementById('color').value;
    const fechaNac = document.getElementById('fechaNac').value;
    const terminos = document.getElementById('terminos').value;


const data = {nombre, apellido, edad, color, fechaNac, terminos}
console.log(data)

console.log('Datos enviados correctamente')

}

function enviarDatos2(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad')
    const color = document.getElementById('color').value;
    const fechaNac = document.getElementById('fechaNac').value;
    const terminos = document.getElementById('terminos').value;


    const data = {nombre, apellido, edad, color, fechaNac, terminos};
    console.log(data);


    fetch('/index', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        console.log('Éxito:', data);
        alert(data.message); 
    })
    .catch(() => {
        alert('Error al instanciar los datos');
    });
}