
let extendUnderline = (e) => {
    e.children[0].className = ('underline underline-extend');
}

let retractUnderline = (e) => {
    e.children[0].className = ('underline underline-retract');
}

let goHome = () => {
    window.location.href = "index.html";
}