// Adds burger functionallity

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  let navbar_burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  // Check if there are any navbar burgers
  if (navbar_burgers.length > 0) {
    // Add a click event on each of them
    navbar_burgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target)

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active')
      })
    })
  }
})
