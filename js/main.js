
// menu show and hidden
let links = document.getElementById("links")
let icon1 = document.querySelector(".header .bars .icon1")
let icon2 = document.querySelector(".header .bars .icon2")
function openmenue(){
    links.classList.remove("d-none")
    icon1.setAttribute("hidden", "")
    icon2.removeAttribute("hidden")
}
function closemenue(){
    links.classList.add("d-none")
    icon2.setAttribute("hidden", "")
    icon1.removeAttribute("hidden")
}
///////////////////////////////

let barcode = document.querySelector(".barcode")
let cwhats = document.querySelector(".cwhats")
let owhats = document.querySelector(".owhats")

function showwhats(){
    barcode.removeAttribute("hidden")
    cwhats.removeAttribute("hidden")
    owhats.setAttribute("hidden", "")
}
function hidewhats(){
    barcode.setAttribute("hidden", "")
    cwhats.setAttribute("hidden", "")
    owhats.removeAttribute("hidden")
}