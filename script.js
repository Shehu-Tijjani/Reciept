const btn = document.querySelector(".btn")
const reciept = document.querySelector(".reciept")
const container = document.querySelector(".container")

console.log(btn)
btn.addEventListener("click", (e) => {
  console.log(reciept)
  reciept.classList.toggle("open")
  container.classList.toggle("height")
  btn.classList.toggle("btn-color")
})