document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.querySelector(".navbar-toggler")
  const navbarCollapse = document.getElementById("navbarNav")

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", () => {
      navbarCollapse.classList.toggle("show")
      navbarToggler.classList.toggle("active") // Toggle active class for animation
    })
  }

  // Optional: Close navbar when a link is clicked (for mobile menu)
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show")
        navbarToggler.classList.remove("active")
      }
    })
  })
})
