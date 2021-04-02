// Section 1 - home
const introduction = document.querySelector('.hi');
const myName = document.querySelector('.myname');
const myProffesion = document.querySelector('.proffesion');
const btn = document.querySelector('.cv');
const aNumber = [...document.querySelectorAll('.aboutme a')];
const newTableNames = ["Strona Głowna", "O mnie", "Umiejętności", "Portfolio", "Kontakt"];
const iconTable = ["<i class='fas fa-home'></i>", "<i class='fas fa-male'></i>", "<i class='fab fa-battle-net'></i>", "<i class='fas fa-project-diagram'></i>", "<i class='fas fa-envelope-square'></i>"];
const hamburgerBar = document.querySelector(".hamburger div");
const rollingMenu = document.querySelector(".menu");
const text = ["Cześć", "nazywam się Sebastian Czarnowski", "Jestem Front-end developerem"];
let activeLetter = 0;
let activeLetter1 = 0;
let activeLetter2 = 0;
let flag = true;
let flag2 = false;
// Section 2  - about me
const myWorkPlaces = [...document.querySelectorAll(".flexparentinput > div")];
const lines = [...document.querySelectorAll(".dotandline div")];
const spans = [...document.querySelectorAll(".span")];
const myWorkAssigments = [...document.querySelectorAll(".flexparentoutput p")];
// Section 4 - portfolio
let names = [...document.querySelectorAll(".names li")];
let projects = [...document.querySelectorAll(".projects > div")];
const checkPortfiolio = [...document.querySelectorAll(".checkPortfolio")]




// Section 1 - home

const textOneByOne = () => {
    if (activeLetter >= 0 && flag) {
        introduction.textContent += text[0][activeLetter];
        activeLetter++
        if (activeLetter === text[0].length) {
            setTimeout(function () {
                flag = false;
            }, 300)
            activeLetter = -1;
        }
    }
    if (activeLetter1 >= 0 && !flag) {
        myName.textContent += text[1][activeLetter1];
        activeLetter1++;
        if (activeLetter1 === text[1].length) {
            setTimeout(function () {
                flag2 = true;
                flag = true;
            }, 300)
            activeLetter1 = -1;
        }
    }
    if (activeLetter2 >= 0 && flag2) {
        myProffesion.textContent += text[2][activeLetter2];
        activeLetter2++;
        if (activeLetter2 === text[2].length) {
            flag2 = false;
            clearInterval(intervalCount);
            btn.classList.toggle('switch')
        }
    }
}
let intervalCount = setInterval(textOneByOne, 80);

// menu in section 1 

aNumber.forEach((onetouch, index) => {
    onetouch.addEventListener('mouseenter', (e) => {
        let query = window.matchMedia("(max-width: 1025px)");
        const currentValue = e.target.value;
        if (!query.matches && currentValue === onetouch.value) {
            onetouch.textContent = newTableNames[index];
        }

    })
})
aNumber.forEach((onetouch, index) => {
    onetouch.addEventListener('mouseout', (e) => {
        let query = window.matchMedia("(max-width: 1025px)");
        const currentValue = e.target.value;
        if (!query.matches && currentValue === onetouch.value) {
            onetouch.innerHTML = iconTable[index];
        }
    })
})
aNumber.forEach((onetouch) => {
    onetouch.addEventListener("click", () => {
        rollingMenu.classList.add('remove');
        if (rollingMenu.classList.contains("remove")) {
            rollingMenu.classList.remove('remove', "addindex", "active");
        }
    })
})
// Hamburger bar on the phone 

hamburgerBar.addEventListener('click', (e) => {
    rollingMenu.classList.toggle("active");
    if (rollingMenu.classList.contains("active")) {
        rollingMenu.classList.add("addindex");
    } else {
        rollingMenu.classList.remove("addindex");
    }
    let query2 = window.matchMedia("(max-width: 500px)");
    let query3 = window.matchMedia("(orientation: landscape)", "(max-width: 950px)");
    if (query2.matches || query3.matches) {
        aNumber.forEach((onetouch, index) => {
            onetouch.textContent = newTableNames[index];
        })
    }
})

// Section 2  - about me

myWorkPlaces.forEach((oneplace, index) => {
    oneplace.addEventListener("click", (event) => {
        const currentValue = event.currentTarget.classList.value;
        // console.log(currentValue);
        myWorkAssigments.forEach((assigment) => {
            assigment.classList.remove("pshow")
        })
        for (let i = 0; i < 4; i++) {
            lines[i].classList.remove("changecolor");
            spans[i].classList.remove("changecolor");
        }
        if (currentValue === "axa") {
            lines[index].classList.add("changecolor");
            spans[index].classList.add("changecolor");
            myWorkAssigments[index].classList.toggle("pshow");

        } else if (currentValue === "mlekpol") {
            for (let i = 0; i < 2; i++) {
                lines[i].classList.add("changecolor");
                spans[i].classList.add("changecolor");
            }
            myWorkAssigments[index].classList.toggle("pshow");
        } else if (currentValue === 'hm') {
            for (let i = 0; i < 3; i++) {
                lines[i].classList.add("changecolor");
                spans[i].classList.add("changecolor");

            }
            myWorkAssigments[index].classList.toggle("pshow");
        } else if (currentValue === 'impel') {
            for (let i = 0; i < 4; i++) {
                lines[i].classList.add("changecolor");
                spans[i].classList.add("changecolor");
            }
            myWorkAssigments[index].classList.toggle("pshow");
        }
    })
})



// Section 4 - portfolio

names.forEach((name, index) => {
    name.addEventListener("click", () => {
        for (i = 0; i < names.length; i++) {
            names[i].classList.remove("current");
        }
        names[index].classList.add("current");

        let getAttribute = names[index].getAttribute('data-target');

        projects.forEach((project, index) => {
            project.classList.remove('activate');
            project.classList.add("unactive");

            let getDataKey = projects[index].getAttribute('data-item');

            if (getDataKey === getAttribute) {
                projects[index].classList.remove('unactive');
                projects[index].classList.add('activate');
            } else if (getAttribute === "all") {
                projects[index].classList.remove('unactive');
            }
        })
    })
})


checkPortfiolio.forEach((project) => {
    project.addEventListener('mouseenter', (e) => {
        if (e.target == project) {
            project.classList.add("changingOpacity")
        } 
    })
})
checkPortfiolio.forEach((project) => {
    project.addEventListener('mouseleave', (e) => {
        if (e.target == project) {
            project.classList.remove("changingOpacity")
        } 
    })
})


// Side menu - scroll on click

$(document).ready(function () {

    var scrollLink = $('.aboutme a');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    })
})


function scrollAppear() {
    let introText = document.querySelector(".h1aboutme");
    let introLineFlex = document.querySelector(".lineFlex");
    let tellMore = document.querySelector(".tellmore");
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;


    if (introPosition < screenPosition) {
        introText.classList.add("addme");
        introLineFlex.classList.add("addme");
        tellMore.classList.add("addme");
    }
}
window.addEventListener('scroll', scrollAppear)