let buttons = document.getElementById("buttons")
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let cpu = document.getElementById("cpu")
let scoreInfo = document.getElementById("score")

import {select, referee, score} from './sxp.js'

scoreInfo.innerHTML = "<p>Player: " + score.player + " - " + score.cpu + " CPU</p>" 

buttons.addEventListener('click', (e) => {
    let player = e.target.id
    let cpuWeapon = select()
    cpu.innerHTML = "<p>" + cpuWeapon + "</p>"
    referee(cpuWeapon, player)
    scoreInfo.innerHTML = "<p>Player: " + score.player + " - " + score.cpu + " CPU</p>" 
    console.log(score)
})