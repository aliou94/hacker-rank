
//based on instructions

let he_won_game = 1

let currentWinner = ''

let scores = {
   [currentWinner] : 0
}

function tournamentWinner(competitions, results){

    for(let i=0; i<competitions.length; i++){

        const [home, away] = competitions[i]

        let winner = results[i] === he_won_game ? home : away

        updateCurrentWinner(winner, 3, scores)
    }

}

function updateCurrentWinner(team, points, scores){

    if(!(team in scores)) scores[team] = 0

    scores[team] += points
}


competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ]

  results = [0, 0, 1]

tournamentWinner(competitions, results)