const typed=new Typed(".typed",{strings:["<i>Front-End Developer Junior</i>"],typeSpeed:75,startDelay:300,backSpeed:75,smartBackspace:!0,shuffle:!1,backDelay:1500,loop:!0,loopCount:!1,showCursor:!0,cursorChar:"|",contentType:"html"}),showMenu=(b,c)=>{let a=document.getElementById(b),d=document.getElementById(c);a&&d&&a.addEventListener("click",()=>{d.classList.toggle("show")})};showMenu("nav-toggle","nav-menu");const navLink=document.querySelectorAll(".nav__link");function linkAction(){navLink.forEach(a=>a.classList.remove("active")),this.classList.add("active");let a=document.getElementById("nav-menu");a.classList.remove("show")}navLink.forEach(a=>a.addEventListener("click",linkAction));const boton=document.getElementById("boton"),config=window.matchMedia("(prefers-color-scheme: dark)"),localConfig=localStorage.getItem("tema");"dark"===localConfig?document.body.classList.toggle("dark-theme"):"light"===localConfig&&document.body.classList.toggle("light-theme"),boton.addEventListener("click",()=>{let a;config.matches?(document.body.classList.toggle("light-theme"),a=document.body.classList.contains("light-theme")?"light":"dark"):(document.body.classList.toggle("dark-theme"),a=document.body.classList.contains("dark-theme")?"dark":"light"),localStorage.setItem("tema",a)});const sr=ScrollReveal({origin:"top",distance:"80px",duration:2e3,reset:!0})

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