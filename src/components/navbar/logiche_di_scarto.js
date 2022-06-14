function caretdownServizi(params) {
  // CARRET DOWN CHE GIRA
  var freccia = document.getElementById("caret")
  freccia.classList.toggle("rotate");
  
  // MENU A TENDINA CHE SCENDE O ENTRA DI LATO CON IL DISPLAY DEL TELEFONO
  var tendina = document.getElementsByClassName("dropdown-services")
  tendina[0].classList.toggle("servicesMenu")
  // come faccio che il menu si chiude a ogni click?
  /* document.addEventListener('click', function () {
    if (tendina[0].classList.has("servicesMenu")) {
      tendina[0].classList.remove("servicesMenu")
    }
  }); */
  /* document.addEventListener('click', function (event) {
    const isClickInsideElement = tendina[0].contains(event.target);
    if (!isClickInsideElement && tendina[0].classList.contains('servicesMenu')) {
      tendina[0].classList.remove('servicesMenu');
    }
  }); */
}


/////// CI SONO RIUSCITO MA VA PERFEZIONATA
// var closethings = document.querySelectorAll("li")/* .addEventListener("click", burgherMenu); */
// if (closethings[1] == undefined) {
//   console.log("non funziona il targhettamento per le chiusure del menu a tendina da perfezionare");
// } else {
//   console.log(closethings[1]);
// }
// for (let i = 0; i < closethings.length; i++) {
//   closethings[i].addEventListener("click", burgherMenu);
// }


function burgherMenu() {
  // BURGHER MENU CHE FA LA X
  var xMenu = document.querySelectorAll(".line1, .line2, .line3")
  for (let i = 0; i < xMenu.length; i++) {
    xMenu[i].classList.toggle("active")
    /* console.log(xMenu[i]); */
  }

  // var pippo = document.getElementsByClassName('nav-dropdown')
  // /* console.log(pippo); */
  // pippo[0].classList.toggle("active")
  
  
  // per chiudere il menu dei servizi
  var freccia = document.getElementById("caret")
  freccia.classList.remove("rotate");
  var tendina = document.getElementsByClassName("dropdown-services")
  tendina[0].classList.remove("servicesMenu")
}






// TARGHETTAZIONE BURGHER MENU
document.addEventListener('DOMContentLoaded', function() {
  // var targhetBurgherMenu = document.getElementsByClassName("hamburger")
  // if (targhetBurgherMenu[0] == undefined) {
  //   console.log("non funziona il targhettamento per il burghermenu");
  //   console.log(targhetBurgherMenu);
  // } else {
  //   /* console.log(targhetBurgherMenu[0]); */
  //   targhetBurgherMenu[0].addEventListener("click", animazioneBurgherMenu);  
  // }
  // forma stretta scritta:
  document.getElementsByClassName("hamburger")[0].addEventListener("click", animazioneBurgherMenu);
});
function animazioneBurgherMenu() {
  // BURGHER MENU ANIMAZIONE X
  /* console.log("targhettazione click avvenuta con successo"); */
  var xMenu = document.querySelectorAll(".line1, .line2, .line3")
  for (let i = 0; i < xMenu.length; i++) {
    /* console.log(xMenu[i]); */
    xMenu[i].classList.toggle("active")
  }
  // APERTURA MENU BURGHER
  var pippo = document.querySelectorAll('.nav-dropdown')
  /* console.log(pippo); */
  pippo[0].classList.toggle("active")
}




// TARGHETTAZIONE MENU A TENDINA SERVIZI
document.addEventListener('DOMContentLoaded', function() {
  /* var carretDownServizi = document.getElementById("servicesMenu")
  console.log(carretDownServizi);
  carretDownServizi.addEventListener("click", animazioneTendina); */
  document.getElementById("servicesMenu").addEventListener("click", animazioneTendina);
});
// CARRET DOWN E MENU SERVIZI
function animazioneTendina() {
  // VERIFICHE
  /* var carretDownServizi = document.getElementById("servicesMenu")
  console.log(carretDownServizi); */
  // CARRET DOWN CHE GIRA
  var freccia = document.getElementById("caret")
  freccia.classList.toggle("rotate");
  // MENU A TENDINA CHE SCENDE O ENTRA DI LATO CON IL DISPLAY DEL TELEFONO
  var tendina = document.getElementsByClassName("dropdown-services")
  tendina[0].classList.toggle("servicesMenu")


}
// CHIUSURA DEL MENU CON LA X DEL BURGHERMENU
document.addEventListener('DOMContentLoaded', function() {
  /* var pluto = document.getElementsByClassName("hamburger")
  console.log(pluto[0]);
  pluto[0].addEventListener("click", closeMenu); */
  document.getElementsByClassName("hamburger")[0].addEventListener("click", closeMenu);
});
function closeMenu() {
  document.getElementsByClassName("dropdown-services")[0].classList.remove("servicesMenu")
}

document.addEventListener('DOMContentLoaded', function() {
  /* var pluto = document.getElementsByClassName("hamburger")
  console.log(pluto[0]);
  pluto[0].addEventListener("click", closeMenu); */
  document.getElementsByTagName("li").addEventListener("click", closeMenudaiLink);
});
function closeMenudaiLink() {
  /* console.log("success"); */
  var xMenu = document.querySelectorAll(".line1, .line2, .line3")
  for (let i = 0; i < xMenu.length; i++) {
    /* console.log(xMenu[i]); */
    xMenu[i].classList.remove("active")
  }
  document.querySelectorAll(".nav-dropdown")[0].classList.remove("active")
  document.getElementById("caret")[0].classList.remove("rotate")
  document.getElementsByClassName("dropdown-services")[0].classList.remove("servicesMenu")
}
