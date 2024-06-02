
	const resultadoEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	const usuario = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos.
	const celular = /^\d{9,14}$/ // 9 a 14 numeros.


//variables
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const seleccion = document.querySelector('#seleccion')
const vacunas = document.querySelector('#vacunas')
const telefono = document.querySelector('#telefono')
const formulario = document.querySelector('#forms')

//boton
const btnEnviar = document.querySelector('#enviar')






escucharEventos()

//escuchar todos los eventos
function escucharEventos(){
	document.addEventListener('DOMContentLoaded', iniciarWebApp)

	nombre.addEventListener('blur', validarInformacion)
	email.addEventListener('blur', validarInformacion)
	seleccion.addEventListener('blur', validarInformacion)
	telefono.addEventListener('blur', validarInformacion)

	//botones
	formulario.addEventListener('submit', enviarFormulario)

}

function iniciarWebApp(){
	btnEnviar.disabled = true
	nombre.classList.remove('correcto')
	email.classList.remove('correcto')
	seleccion.classList.remove('correcto')
	telefono.classList.remove('correcto')
	nombre.classList.remove('error-mostrar')
	email.classList.remove('error-mostrar')
	seleccion.classList.remove('error-mostrar')
	telefono.classList.remove('error-mostrar')
}

function validarInformacion(elemento) {

	const err = document.querySelector('p.error')

	if(err){
		err.remove()
	}
	
	if(elemento.target.value.length > 0){
		elemento.target.classList.remove('error-mostrar')
		elemento.target.classList.add('correcto')

	} else {
		elemento.target.classList.remove('correcto')
		elemento.target.classList.add('error-mostrar')
		mostrarError('los Campos deben ser llenados.')
	}

	if(elemento.target.type === 'email'){
		if(resultadoEmail.test(elemento.target.value)){
			elemento.target.classList.remove('error-mostrar')
			elemento.target.classList.add('correcto')
		} else {
			elemento.target.classList.remove('correcto')
			elemento.target.classList.add('error-mostrar')
			mostrarError('Email no es valido.')
		}
	}

	if(elemento.target.type === 'tel'){
		if(celular.test(elemento.target.value)){
			elemento.target.classList.remove('error-mostrar')
			elemento.target.classList.add('correcto')
		} else {
			elemento.target.classList.remove('correcto')
			elemento.target.classList.add('error-mostrar')
			mostrarError('Debe contener 9 a 14 numeros.')
		}
	}

	if(elemento.target.type === 'text'){
		if(usuario.test(elemento.target.value)){
			elemento.target.classList.remove('error-mostrar')
			elemento.target.classList.add('correcto')
		} else {
			elemento.target.classList.remove('correcto')
			elemento.target.classList.add('error-mostrar')
			mostrarError('Puede contener letras, espacios, acentos.')
		}
	}

	if(resultadoEmail.test(email.value) != '' && nombre.value != '' && seleccion.value != '' && telefono.value != ''){
		btnEnviar.disabled = false
	}


}



function mostrarError(mensaje){
	const indicarError = document.createElement('p')
	indicarError.textContent = mensaje

	indicarError.classList.add('alert','alert-danger','my-5','text-center','error')

	const numerosErrores = document.querySelectorAll('.error')


	if(numerosErrores.length === 0){
		formulario.appendChild(indicarError)
	}
}

function resetearFormulario(){
	formulario.reset()
	iniciarWebApp()
}

function enviarFormulario(elemento){
	elemento.preventDefault()
	Swal.fire({
		title: "Envio Exitoso!",
		text: "Nos pondremos en contacto la a brevedad!",
		icon: "success"
	  })
	  resetearFormulario()
}


