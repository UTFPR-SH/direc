'use strict'

window.onload = () => {
	document.getElementsByName('button-login')[0].addEventListener('click', auth)
}

function auth() {
	let b = document.getElementsByName('button-login')[0]
	let s = document.getElementById('spin')

	s.removeAttribute('hidden')
	b.setAttribute('disabled', '')

	var username = document.getElementsByName('username')[0]
	var password = document.getElementsByName('password')[0]

	window.setInterval(() => {
		if (username.value === "direcsh" && password.value === "direcpassword") {
			// redirect to the internal part of the system
			window.location.replace('internal/')
		} else {
			// makes the error message appear
			let e = document.getElementById('error-message')
			e.removeAttribute('hidden')

			username.classList.add('is-danger')
			password.classList.add('is-danger')
		}

		b.removeAttribute('disabled')
		s.setAttribute('hidden', '')
	}, 2500)
}