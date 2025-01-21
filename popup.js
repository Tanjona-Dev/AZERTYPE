
let ouvrirPopup = document.querySelector(".ouvrirPopup")
let form = document.querySelector("form")
let prenom = document.querySelector("#prenom")
let mail = document.getElementById("mail")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(prenom.value)
    console.log(mail.value)
    let addressmail = mail.value
    let nom = prenom.value
    afficherMail(addressmail, nom, 3)
   h6.style.display="none"
})

// ----------------------------------------------------------------

let nouveauButton = document.querySelector(".nouveauButton")
let h6 = document.querySelector("h6")

nouveauButton.addEventListener("click",()=>{
    h6.classList.toggle("afficher")
})

function afficherMail(email, nom, score){
    let mailto = `mailto:${email}?subject=Partage de score sur Azertype&body=Salut je suis ${nom} et je viens de realiser le score de ${score}`
    location.href = mailto
}