let buttons = document.getElementById("buttons")
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let cpu = document.getElementById("cpu")
let scoreInfo = document.getElementById("score")
let playerScore = document.getElementById("playerScore")
let cpuScore = document.getElementById("cpuScore")

import {select, referee, score} from './sxp.js'

//scoreInfo.innerHTML = "<p>Player: " + score.player + " - " + score.cpu + " CPU</p>" 

buttons.addEventListener('click', (e) => {
    let player = e.target.id
    let cpuWeapon = select()
    cpu.innerHTML = "<p>" + cpuWeapon + "</p>"
    referee(cpuWeapon, player)
    console.log(score)
    graphScore()
})

const graphScore = () => {
    playerScore.innerHTML = ""
    cpuScore.innerHTML = ""
    for (let i=0; i < score.player; i++) {
        let playerdot = document.createElement("div")
        playerScore.appendChild(playerdot)
    }
    for (let i=0; i < score.cpu; i++) {
        let cpudot = document.createElement("div")
        cpuScore.appendChild(cpudot)
    }
}