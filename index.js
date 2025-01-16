 let listeMots = ["Pomme", "Banane", "Mangue", "Litchi", "Paiche", "Ananas"]
 let listPhrases = ["Bonjour madame", "J'aime les fruits", "J'en mange cinque par jours"]
 let score = 0
 let i = 0

 let zoneProposition = document.querySelector(".zoneProposition")
 let button = document.querySelector(".button")
 let zoneScore = document.querySelector(".zoneScore")
 let message = document.querySelector(".message")
 let zoneSaisie = document.querySelector(".zoneSaisie")
 let btnRadio = document.querySelectorAll("input[name='choix']")

 function afficherProposition(proposition) {
     zoneProposition.innerHTML = proposition[i]
 }

 function lancerJeuMots() {
     afficherProposition(listeMots)
     button.addEventListener("click", () => {
         if (zoneSaisie.value === listeMots[i]) {
             score++
             message.innerHTML = `Bravo! :)`
         } else {
             message.innerHTML = `Faute de frappe! :( `
         }
         zoneScore.innerHTML = `Votre score est de : ${score} / ${listeMots.length}`
         i++
         afficherProposition(listeMots)
         zoneSaisie.value = ""
         if (listeMots[i] === undefined) {
             zoneProposition.innerHTML = "Le jeu est fini !"
             button.disabled = true
         }
     })
 }

 function lancerJeuPhrases() {
     afficherProposition(listPhrases)
     button.addEventListener("click", () => {
         if (zoneSaisie.value === listPhrases[i]) {
             score++
             message.innerHTML = `Bravo ! :)`
         } else {
             message.innerHTML = `Faute de frappe !`
         }
         zoneScore.innerHTML = `Votre score est de : ${score} / ${listPhrases.length}`
         i++
         afficherProposition(listPhrases)
         zoneSaisie.value = ""
         if (listPhrases[i] === undefined) {
             zoneProposition.innerHTML = "Le jeu est fini !"
             button.disabled = true
         }
     })
 }

 for (let index = 0; index < btnRadio.length; index++) {
     btnRadio[index].addEventListener("change", (event) => {
         console.log(event.target.value)
         if (event.target.value === "1") {
             lancerJeuMots()
         } else if (event.target.value === "2") {
             lancerJeuPhrases()
         }
     })
 }

 let btnOuvrir = document.querySelector(".ouvrirPopup")
let popup = document.querySelector(".popup")
let contenu = document.querySelector(".popup-contenu")

btnOuvrir.addEventListener("click", () => {
 popup.style.display = "block"
})

window.addEventListener("click", (event) => {
    if(event.target === popup){
        popup.style.display = "none"
    }
})
