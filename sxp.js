const choices = ["Rock", "Paper", "Scissors"]
const score = {
    'player': 0,
    'cpu': 0
}

const select = () => {
    return choices[Math.floor(Math.random()* choices.length)]
}

const referee = (cpu, player) => {
    const weapons = {
        rock: {weakTo: 'Paper', strongTo: 'Scissors'},
        paper: {weakTo: 'Scissors', strongTo: 'Rock'},
        scissors: {weakTo: 'Rock', strongTo: 'Paper'}
     }
     
     if (weapons[player].strongTo === cpu) {
         score.player++
         return;
     }
     
     if (weapons[player].weakTo === cpu) {
         score.cpu++
         return;
     }
}

export {select, referee, score}