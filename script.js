const bclick = document.querySelector('.box .bclick');
const mat = document.querySelector('.box .mat');
const krishka = document.querySelector('.box .krishka');
const chrt = document.querySelector('.box .button .chrt');
const onoff = document.querySelector('.box .onoff');
const onoffh1 = document.querySelector('.box .onoff h1');
const informator = document.querySelector('.informator');

let bool = true;
let onoffReg = false;
let infoBool = true;


onoff.onclick = () => {
    onoffReg = !onoffReg;
    console.log(onoffReg);
    if (onoffReg) {
        onoffh1.innerText = 'ON';
        onoffh1.style.color = 'green';
    } else {
        onoffh1.innerText = 'OFF';
        onoffh1.style.color = 'red';
    }
}
console.log(onoffReg);

bclick.onclick = () => {
    if (onoffReg) {
        if (bool) {
            mat.style.animation = 'check 1s linear alternate';
            krishka.style.animation = 'krishka 1s linear alternate';
            chrt.style.animation = 'chrt 1s linear alternate';
        } else {
            mat.style.animation = 'check2 1s linear alternate';
            krishka.style.animation = 'krishka2 1s linear alternate';
            chrt.style.animation = 'chrt2 1s linear alternate';
        }
        bool = !bool;
    } else {
        if (infoBool) {
            informator.style.animation = 'info 3s linear';
        } else {
            informator.style.animation = 'info 3s linear';
        }
        infoBool = !infoBool;
    }
}


// krishka 1s linear alternate