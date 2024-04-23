let mic = document.getElementById("sub-container-mic")
let mic_ear = document.getElementById("sub-container-mic-ear")

mic.addEventListener("click",()=>{
    mic.classList.toggle("display-none")
    mic_ear.classList.toggle("display-none")
})
mic_ear.addEventListener("click",()=>{
    mic.classList.toggle("display-none")
    mic_ear.classList.toggle("display-none")
})