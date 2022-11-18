window.addEventListener("scroll", () => {
console.log(scrollY)

if (window.scrollY > 150){
    navbar.style.height = "50px";
} else {
    navbar.style.height = "90px";
}

if (window.scrollY > 350){
    
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "translateX(1px)";
} else {
    imgImprovise.style.opacity = "0";
    imgImprovise.style.transform ="translateX(-200px) ";
}
if (window.scrollY > 1300) {
    popup.style.opacity = "1";
    popup.style.transform = "translateX(-5px)";
    popup.style.transitionDelay = ".5s";
}else {
    popup.style.opacity = "0";
    
}

})
window.addEventListener("click", ()=> {
    console.log("click !");
    
})



// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
