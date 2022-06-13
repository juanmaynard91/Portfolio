"use sctrict"

const typed = new Typed('.typed', {
    strings: [
        '<i>Front-End Developer Junior</i>'
    ],
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});

// MENU SHOW 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show")
        })
    }
}

showMenu("nav-toggle", "nav-menu")

// ACTIVE AND REMOVE MENU 
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
    //active link
    navLink.forEach(n => n.classList.remove("active"))
    this.classList.add("active")

    //remove menu mobile
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show")
}

navLink.forEach(n => n.addEventListener("click", linkAction))

// LOCAL STAGE COLOR
const boton = document.getElementById("boton");
const config = window.matchMedia("(prefers-color-scheme: dark)");
const localConfig = localStorage.getItem("tema") //tema es la key de localStorage

if (localConfig === "dark") {
    document.body.classList.toggle("dark-theme")
} else if (localConfig === "light") {
    document.body.classList.toggle("light-theme")
}

boton.addEventListener("click", () => {
    let colorTema;
    if (config.matches) { //matches es el valor true o false en consola
        document.body.classList.toggle("light-theme");
        colorTema = document.body.classList.contains("light-theme") ? "light" : "dark";
    } else {
        document.body.classList.toggle("dark-theme");
        colorTema = document.body.classList.contains("dark-theme") ? "dark" : "light";
    }
    //console.log(colorTema)
    localStorage.setItem("tema", colorTema);
});

// SCROLL REVEAL ANIMATION 
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
})

/*
// SCROLL HOME 
sr.reveal(".home__title", {})
sr.reveal(".button", { delay: 200 })
sr.reveal(".home__img", { delay: 400 })
sr.reveal(".home__social-icon", { interval: 200 })

// SCROLL ABOUT 
sr.reveal(".about__img", {})
sr.reveal(".about__subtitle", { delay: 200 })
sr.reveal(".about__text", { delay: 400 })

// SCROLL SKILLS 
sr.reveal(".skills__subtitle", {})
sr.reveal(".skills__text", { delay: 200 })
sr.reveal(".skills__data", { interval: 200 })
sr.reveal(".skills__img", { delay: 400 })

// SCROLL WORK 
sr.reveal(".work__img", { interval: 200 })

// SCROLL CONTACT 
sr.reveal(".contact__input", { interval: 200 })
*/