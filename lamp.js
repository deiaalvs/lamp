const turnOn = document.getElementById('on');
const turnOff = document.getElementById('off');
const lamp = document.getElementById('lamp');


function isBroken () {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn () {
    if (!isBroken()) {
    lamp.src = './img/ligada.jpg'
    }
}

function lampOff () {
    if (!isBroken()) {
    lamp.src = './img/desligada.jpg'
    }
}

function lampOver () {
    if (!isBroken()) {
    lamp.src = './img/ligada.jpg'
    }
}

function lampOut () {
    if (!isBroken()) {
    lamp.src = './img/desligada.jpg'
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOver)
lamp.addEventListener('mouseout', lampOut)
lamp.addEventListener('dblclick', lampBroken)