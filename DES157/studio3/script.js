!function() {
    "use strict";
    var e = document.getElementById("startgame"),
        n = document.getElementById("gamecontrol"),
        t = document.getElementById("game"),
        i = document.getElementById("score"),
        o = document.getElementById("actions"),
        r = {
            dice: ["1die.jpg", "2die.jpg", "3die.jpg", "4die.jpg", "5die.jpg", "6die.jpg"],
            players: ["player 1", "player 2"],
            score: [0, 0],
            roll1: 0,
            roll2: 0,
            rollSum: 0,
            index: 0,
            gameEnd: 29
        };
    function l() {
        t.innerHTML = `<p>Roll the dice for the ${r.players[r.index]}</p>`,
        o.innerHTML = '<button id="roll">Roll the Dice</button>',
        document.getElementById("roll").addEventListener("click", function() {
            !function e() {
                o.innerHTML = "";
                r.roll1 = Math.floor(6 * Math.random()) + 1;
                r.roll2 = Math.floor(6 * Math.random()) + 1;
                t.innerHTML = `<p>Roll the dice for the ${r.players[r.index]}</p>`;
                t.innerHTML += `<img src="${r.dice[r.roll1 - 1]}"> \n                            <img src="${r.dice[r.roll2 - 1]}">`;
                r.rollSum = r.roll1 + r.roll2;
                2 === r.rollSum ? (t.innerHTML += "<p>Oh snap! Snake eyes!</p>", r.score[r.index] = 0, r.index ? r.index = 0 : r.index = 1, a(), setTimeout(l, 2e3)) : 1 === r.roll1 || 1 === r.roll2 ? (r.index ? r.index = 0 : r.index = 1, t.innerHTML += `<p>Sorry, one of your rolls was a one, switching to  ${r.players[r.index]}</p>`, setTimeout(l, 2e3)) : (r.score[r.index] = r.score[r.index] + r.rollSum, o.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>', document.getElementById("rollagain").addEventListener("click", function() {
                    e()
                }), document.getElementById("pass").addEventListener("click", function() {
                    r.index ? r.index = 0 : r.index = 1,
                    l()
                }), d())
            }()
        }),
        d()
    }
    function d() {
        r.score[r.index] > r.gameEnd ? (i.innerHTML = `<h2>${r.players[r.index]} \n            wins with ${r.score[r.index]} points!</h2>`, o.innerHTML = "", document.getElementById("quit").innerHTML = "Start a New Game?") : a()
    }
    function a() {
        i.innerHTML = `<p>The score is currently <strong>${r.players[0]}\n        ${r.score[0]}</strong> and <strong>${r.players[1]} \n        ${r.score[1]}</p>`
    }
    e.addEventListener("click", function() {
        r.index = Math.round(Math.random()),
        n.innerHTML = "<h2>The Game Has Started</h2>",
        n.innerHTML += '<button id="quit">Wanna Quit?</button>',
        document.getElementById("quit").addEventListener("click", function() {
            location.reload()
        }),
        l()
    })
}();

