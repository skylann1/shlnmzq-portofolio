// a button use id
let btnHome = document.getElementById("btn-home")
let btnContact = document.getElementById('btn-contact')
let btnAbout = document.getElementById("btn-about")
let btnSkill = document.getElementById('btn-skill')
let btnProject = document.getElementById("btn-projects")


let icon = document.getElementById("icon-mon")

// display menu
let home = document.getElementById("home")
let about = document.getElementById("about")
let skill = document.getElementById("skill")
let project = document.getElementById("project")
let contact = document.getElementById("contact")


home.style.display = "flex"
about.style.display = "none"
skill.style.display = "none"
project.style.display = "none"
contact.style.display = "none"

icon.onclick = function() {
    document.body.classList.toggle("light-thame")
}

btnHome.onclick = function() {
    home.style.display = "flex"
    about.style.display = "none"
    skill.style.display = "none"
    project.style.display = "none"
    contact.style.display = "none"    

}
btnAbout.onclick = function() {
    home.style.display = "none"
    about.style.display = "flex"
    skill.style.display = "none"
    project.style.display = "none"
    contact.style.display = "none"
}
btnSkill.onclick = function() {
    home.style.display = "none"
    about.style.display = "none"
    skill.style.display = "flex"
    project.style.display = "none"
    contact.style.display = "none"
}
btnProject.onclick = function() {
    home.style.display = "none"
    about.style.display = "none"
    skill.style.display = "none"
    project.style.display = "flex"
    contact.style.display = "none"
}
btnContact.onclick = function() {
    home.style.display = "none"
    about.style.display = "none"
    skill.style.display = "none"
    project.style.display = "none"
    contact.style.display = "flex"
}


// about





// contact display
let mailClick = document.querySelector(".email-icon")
let mailDesc = document.getElementById("description-email")
mailClick.addEventListener("click", () => {
    mailDesc.classList.add("active")
    
    document.addEventListener('click', function (e) {
        if (!mailDesc.contains(e.target) && !mailClick.contains(e.target)) {
           mailDesc.classList.remove('active');
      }
    });
})

let igClick = document.querySelector(".instagram-icon")
let igDesc = document.getElementById("description-instagram")
igClick.addEventListener("click", () => {
    igDesc.classList.add("active")
    document.addEventListener('click', function (e) {
        if (!igDesc.contains(e.target) && !igClick.contains(e.target)) {
           igDesc.classList.remove('active');
      }
    });
})

let waClick = document.querySelector(".whatsapp-icon")
let waDesc = document.getElementById("description-whatsapp")
waClick.addEventListener("click", () => {
    waDesc.classList.add("active")
    document.addEventListener('click', function (e) {
        if (!waDesc.contains(e.target) && !waClick.contains(e.target)) {
           waDesc.classList.remove('active');
      }
    });
})



// humberger menu
let humberger = document.querySelector(".humberger");
let navMenu = document.querySelector(".navbar");

humberger.addEventListener("click", () => {
    humberger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(i => i. 
    addEventListener("click", () => {
        humberger.classList.remove("active")
        navMenu.classList.remove("active")
}))