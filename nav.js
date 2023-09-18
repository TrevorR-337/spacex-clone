let navElem = document.getElementById('nav');
let menuDiv = document.getElementById('menu-div');
let screenOverlay = document.getElementById('screen-overlay');
let accordion_top = document.getElementById('accordion-line-top');
let accordion_mid = document.getElementById('accordion-line-mid');
let accordion_bottom = document.getElementById('accordion-line-bottom');
let menu_div = document.getElementById('menu-div');
let menu_btns_index = 0;
let menu_btns = [...document.getElementsByClassName('menu-btn')];
let menuIsExtended = false;
let widthIsLess = false;
let navIsFaded = false;

addEventListener('resize', (event) => {
    if(window.innerWidth < 1350) {
        if(!widthIsLess) {
            widthIsLess = true;
            menu_btns_index = 0;
            toggleMenu(0);
            toggleMenu(0);
        }
    } else {
        widthIsLess = false;
    }
});




// NAV FADE --- NAV FADE --- NAV FADE --- NAV FADE --- NAV FADE --- NAV FADE --- 
let fadeNav = (out) => {
    if(out) {
        navElem.classList.add('nav-fade-out');
        navIsFaded = true;
    } else {
        navElem.classList.remove('nav-fade-out');
        navIsFaded = false;
    }
}

addEventListener('scroll', (event) => {
    if(window.scrollY > 0) {
        if(!navIsFaded) {
            fadeNav(true);
        }
    } else {
        if(navIsFaded) {
            fadeNav(false);
        }
    }
});




let fadeMenuBtn = (ms) => {
    menu_btns[menu_btns_index].classList.add('menu-btn-fade-in');
    menu_btns_index ++;
    let menuBtnsTimout = setTimeout(() => {
        let sizeMinusOne = menu_btns.length;
        if(menu_btns_index < sizeMinusOne && menuIsExtended) {  fadeMenuBtn(ms) } else { 
            menu_btns_index=0;
            clearTimeout(menuBtnsTimout); 
        }
    },ms);
}


let menuBtnsAnim = (ms) => {
    menu_btns = [...document.getElementsByClassName('menu-btn')]
    .filter((elem) => {
        if(window.innerWidth > 1350) { 
            if(!elem.classList.contains('menu-btn-hidden')) { 
                return elem;
            }
        } else {
            return elem;
        }
    });
    fadeMenuBtn(ms);
}


let accordionAnim = (active) => {
    if(active) {
        accordion_top.classList.add('accordion-top-active');
        accordion_mid.classList.add('accordion-mid-active');
        accordion_bottom.classList.add('accordion-bottom-active');
    } else {
        accordion_top.classList.remove('accordion-top-active');
        accordion_mid.classList.remove('accordion-mid-active');
        accordion_bottom.classList.remove('accordion-bottom-active');
    }
}

let toggleMenu = (ms) => {
    if(!menuIsExtended) {
        menuDiv.classList.add('menu-div-extend');
        screenOverlay.classList.add('screen-overlay-active');
        accordionAnim(true);
        menuBtnsAnim(ms);
    } else {
        menu_btns_index = 0;
        menuDiv.classList.remove('menu-div-extend');
        screenOverlay.classList.remove('screen-overlay-active');
        accordionAnim(false);
        menu_btns.forEach(elem => elem.classList.remove('menu-btn-fade-in'));
    }
    menuIsExtended = !menuIsExtended;
}
