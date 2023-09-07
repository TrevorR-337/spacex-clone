let homeDownArrow = document.getElementById('homg-bg-down-arrow');
let homeBG_one = document.getElementById('home-bg-1');
let homeBG_two = document.getElementById('home-bg-2');
let homeBG_three = document.getElementById('home-bg-3');
let homeBG_four = document.getElementById('home-bg-4');
let homeBG_five = document.getElementById('home-bg-5');





// ARROW FADE --- ARROW FADE --- ARROW FADE --- ARROW FADE --- ARROW FADE --- 
let arrowFadeObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1
}

let fadeDownArrow = (entries, observer) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) {
            homeDownArrow.classList.add('fade-down-arrow');

        } else {
            homeDownArrow.classList.remove('fade-down-arrow');

        }
    });
}

let arrowFadeObserver = new IntersectionObserver(fadeDownArrow, arrowFadeObserverOptions);
arrowFadeObserver.observe(homeBG_one);




// BACKGROUND FADES --- BACKGROUND FADES --- BACKGROUND FADES --- BACKGROUND FADES --- 
let homeBG_txt_FadeInOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
}

let homeBG_txtDiv_FadeIn = (entries, observer) => {
    entries.forEach((entry) => {
        let element = document.getElementById(entry.target.id).children[0];
        if(entry.isIntersecting) {
            element.classList.add('home-bg-txt-fade-in');
        }
    });

}

let homeBG_one_Observer = new IntersectionObserver(homeBG_txtDiv_FadeIn, homeBG_txt_FadeInOptions);
homeBG_one_Observer.observe(homeBG_one);

let homeBG_two_Observer = new IntersectionObserver(homeBG_txtDiv_FadeIn, homeBG_txt_FadeInOptions);
homeBG_two_Observer.observe(homeBG_two);

let homeBG_three_Observer = new IntersectionObserver(homeBG_txtDiv_FadeIn, homeBG_txt_FadeInOptions);
homeBG_three_Observer.observe(homeBG_three);

let homeBG_four_Observer = new IntersectionObserver(homeBG_txtDiv_FadeIn, homeBG_txt_FadeInOptions);
homeBG_four_Observer.observe(homeBG_four);

let homeBG_five_Observer = new IntersectionObserver(homeBG_txtDiv_FadeIn, homeBG_txt_FadeInOptions);
homeBG_five_Observer.observe(homeBG_five);



let extendUnderline = (e) => {
    e.children[0].className = ('underline underline-extend');
}

let retractUnderline = (e) => {
    e.children[0].className = ('underline underline-retract');
}

let goHome = () => {
    window.location.href = "index.html";
}