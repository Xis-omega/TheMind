const text = document.querySelector("#text");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const a = document.querySelector("#anchor")
const img = document.querySelector("#img")

const personaggi = [
    {
        name: "Nick Park",
        count: 0,
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Rebecca Sugar",
        count: 0,
        opera: "si",
        stato: "vivo"
    },
    {
        name: "John Lasseter",
        count: 0,
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Max Fleischer",
        count: 0,
        opera: "si",
        stato: "morto"
    },
    {
        name: "Matt Groening",
        count: 0,
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Hayao Miyazaki",
        count: 0,
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Neil deGrasse Tyson",
        count: 0,
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Carl Sagan",
        count: 0,
        opera: "si",
        stato: "morto"
    },
    {
        name: "Subrahmanyan Chandrasekhar",
        count: 0,
        opera: "no",
        stato: "morto"
    },
    {
        name: "Walter Lewin",
        count: 0,
        opera: "si",
        stato: "vivo"
    },
    {
        name: "J. Allen Hynek",
        count: 0,
        opera: "si",
        stato: "morto"
    },
    {
        name: "Meghnad Saha",
        count: 0,
        opera: "no",
        stato: "morto"
    },
    {
        name: "Edwin Hubble",
        count: 0,
        opera: "si",
        stato: "morto"
    },
    {
        name: "Antoni Gaudí",
        count: 0,
        opera: "si",
        stato: "morto"
    },
    {
        name: "Frank Lloyd Wright",
        count: 0,
        opera: "si",
        stato: "morto"
    },
    {
        name: "Ludwig Mies van der Rohe",
        count: 0,
        opera: "si",
        stato: "morto"
    },
    {
        name: "Le Corbusier",
        count: 0,
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Louis Kahn",
        count: 0,
        opera: "si",
        stato: "morto"
    },
    {
        name: "Oscar Niemeyer",
        count: 0,
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Renzo Piano",
        count: 0,
        opera: "si",
        stato: "vivo"
    }
];

const eliminati = [
    {
        eliminato: ""
    }
]

const locations = [
    {
        name: "gioco",
        "button text": ["", "", "Inizia"],
        "button functions": [inizio, inizio, inizio],
        text: "Questo è 'The Mind', pensa ad un personaggio famoso tra quelli nella lista, ti porro delle domande alle quali dovrai rispondere solo 'SI' o 'NO' e poi proverò ad indovinare. Sei pronto a giocare?"
    },
    {
        name: "inizio",
        "button text": ["SI", "NO", ""],
        "button functions": [premioSI, premioNO],
        text: "Il tuo personaggio ha vinto qualche tipo di premio?"
    },
    {
        name: "domanda2",
        "button text": ["SI", "NO", ""],
        "button functions": [vivoSI, vivoNO],
        text: "Il tuo personaggio è ancora vivo?"
    },
    {

    }
];

button3.onclick = inizio;

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}

function gioco() {
    update(locations[0]);
    button1.style.display = "none";
    button2.style.display = "none";
}

function inizio() {
    update(locations[1]);
    button1.style.display = "block";
    button2.style.display = "block";
    button3.style.display = "none";
}

function cancella() {

}

function premioSI() {
    for(let i=0; i<20; i++)
    {
        if(personaggi[i].premio === "si")
        {
            cancella();
        }
    }
    domanda2();
}

function premioNO() {
    for(let i=0; i<20; i++)
    {
        if(personaggi[i].premio === "no")
        {
            personaggi[i].count += 1;
        }
    }
    domanda2();
}

function domanda2() {
    update(locations[2]);
}

function vivoSI(){
    for(let i = 0; i < 20; i++)
    {
        if(personaggi[i].stato === "vivo")
        {
            personaggi[i].count += 1;
        }
    }
}

function vivoNO(){
    for(let i = 0; i < 20; i++)
    {
        if(personaggi[i].stato === "morto")
        {
            personaggi[i].count += 1;
            console.log(personaggi[i].name)
        }
    }
}

