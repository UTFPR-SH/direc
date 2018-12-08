'use strict'

// Array of modals available
let M = ['modal-nit', 'modal-proem', 'modal-consultorias']
var modal

M.map((m) => {
	document.getElementById(m).onclick = event => {
		modal = document.getElementById('m' + m)
		modal.classList.add("is-active")
	}
})

var dbutton = document.getElementsByClassName('delete')

for (var i = 0; i < dbutton.length; i++) {
	dbutton[i].onclick = event => {
		M.forEach((e) => {
			document.getElementById('m' + e).classList.remove('is-active')
		})
	}
}

window.onclick = (event) => {
    let background = modal.querySelector('.modal-background')
    if(event.target == background) {
        modal.classList.remove('is-active')
    }
}
