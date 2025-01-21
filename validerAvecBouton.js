let b = 0
let main = document.querySelector(".main")

function jeu(liste){  
      zoneProposition.innerHTML = liste[b]
      window.addEventListener("keypress", (event) =>{
      if(event.key === "Enter"){
          if(zoneSaisie.value === liste[b]){
          score++
          message.innerHTML = "Bravo ! :)"
          main.classList.add("vraieReponseStyle")
          main.classList.remove("fausseReponseStyle")
          }else{
            message.innerHTML = "Oups faute de frappe !"
            main.classList.add("fausseReponseStyle")
            main.classList.remove("vraieReponseStyle")
          }
          b++
          zoneProposition.innerHTML = liste[b]
          zoneSaisie.value = ""
          zoneScore.innerHTML = score + " sur " + liste.length
          if(liste[b] === undefined){
              zoneProposition.innerHTML = "Jeu fini !"
              message.innerHTML = '" Cliquez sur Partager pour partager votre score "'
          }
      }
      })
}

for(let compteur = 0; compteur < btnRadio.length; compteur++){
    btnRadio[compteur].addEventListener("change", (e) =>{
        if(e.target.value === "1"){
            jeu(listeMots)
        }else{
            jeu(listPhrases)
        }
    })
}