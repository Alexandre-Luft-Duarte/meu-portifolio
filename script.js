function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  /* ou use a função que já existe para isso 
  html.classList.toggle('light')*/

  /* pegar a tag img */
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.png")
  } else {
    img.setAttribute("src", "assets/avatar.png")
  }
}
