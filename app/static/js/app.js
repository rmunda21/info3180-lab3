/* Add your Application JavaScript */
function fadeOut(){
    document.querySelector(".flashes").className = "flashes fadeOut"
    setTimeout(()=>{
    document.querySelector(".flashes").remove()
    },3000)
}