'use strict'

// Array of modals available
let M = ['modal-bolsista', 'modal-voluntario', 'modal-extensao']

M.map((m) => {
	document.getElementById(m).onclick = event => {
		document.getElementById('m' + m).classList.add("is-active")
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