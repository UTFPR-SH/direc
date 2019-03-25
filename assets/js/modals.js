'use strict'

/**
 * Bind all the modals defined by modals
 * @param {modals} An array of modals ids triggers in which their correspondent m+modals will be the modal itself.
 */
function bindModals(modals) {
    modals.map((m) => {
        document.getElementById(m).onclick = event => {
            let modal = document.getElementById('m' + m)
            modal.classList.add("is-active")

            modal.onclick = (event) => {
                if (event.target == modal.querySelector('.modal-background')) {
                    modal.classList.add('is-inactive')
                    modal.classList.remove('is-active')
                }
            }
        }
    })

    var dbutton = document.getElementsByClassName('delete')

    for (var i = 0; i < dbutton.length; i++) {
        dbutton[i].onclick = event => {
            modals.forEach((m) => {
                let modal = document.getElementById('m' + m)
                modal.classList.add('is-inactive')
                modal.classList.remove('is-active')
            })
        }
    }
}