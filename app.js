const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hDiv = document.getElementById('h')

let myClock = new Clock(document.getElementById('sec'), document.getElementById('min'),
    document.getElementById('h'));

myClock.showTime();



/*
function refresh() {
    setTimeout(showDate, 1000)
}

// deg for sec
let a = 90;

// deg for min
let b = 90;

// deg for h
let c = 90;

function showDate() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    a = (s * 6) + 90;
    b = (s * 0.1) + 9;
    c = (s * 0.0083333) + 90;
    secDiv.style.transform = " translate(50px, 250px) rotate("+ a.toString() +"deg)"
    minDiv.style.transform = " translate(80px, 250px) rotate("+ b.toString() +"deg)"
    hDiv.style.transform = " translate(120px, 250px) rotate("+ c.toString() +"deg)"
    refresh();
}

showDate()

 */



