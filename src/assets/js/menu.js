function toggleMenu() {
  const toggle = document.getElementById("header-toggle"),
    navbar = document.getElementById("navbar"),
    bodypd = document.getElementById("body-pd"),
    headerpd = document.getElementById("header")

  // show navbar
  navbar.classList.toggle('show')
  // change icon
  toggle.classList.toggle('bx-x')
  // add padding to body
  bodypd.classList.toggle('body-pd')
  // add padding to header
  headerpd.classList.toggle('body-pd')
}



