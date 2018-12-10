'use strict'

function bindModals(modals) {
    modals.map((m) => {
        document.getElementById(m).onclick = event => {
            var modal = document.getElementById('m' + m)
            modal.classList.add("is-active")

            modal.onclick = (event) => {
                if (event.target == modal.querySelector('.modal-background')) {
                    modal.classList.remove('is-active')
                }
            }
        }
    })

    var dbutton = document.getElementsByClassName('delete')

    for (var i = 0; i < dbutton.length; i++) {
        dbutton[i].onclick = event => {
            modals.forEach((e) => {
                document.getElementById('m' + e).classList.remove('is-active')
            })
        }
    }
}