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

    const scoreColors = [
        "#1177ff",
        "#2288dd",
        "#3399bb",
        "#44aa99",
        "#55bb88",
        "#66cc66",
        "#77dd44",
        "#88ee33",
        "#99ff22",
        "#aaee11",
        "#bbdd00"
    ]

    playerScore.innerHTML = "<article class='tag'>Player</article>"
    cpuScore.innerHTML = "<article class='tag'>CPU</article>"
    for (let i=0; i < score.player; i++) {
        let playerdot = document.createElement("div")
        playerdot.style = "background-color:" + scoreColors[i]
        playerScore.appendChild(playerdot)
    }
    for (let i=0; i < score.cpu; i++) {
        let cpudot = document.createElement("div")
        cpudot.style = "background-color:" + scoreColors[10 - i]
        cpuScore.appendChild(cpudot)
    }
}

