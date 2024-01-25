const text = document.querySelector("#text");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const a = document.querySelector("#anchor")
const img = document.querySelector("#img")

const personaggi = [
    {
        name: "Hayao Miyazaki",
        count: 0,
        premio: "si",
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Heinrich Schliemann",
        count: 0,
        premio: "no",
        opera: "no",
        stato: "morto"
    },
    {
        name: "Renzo Piano",
        count: 0,
        premio: "si",
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Neil Armstrong",
        count: 0,
        premio: "si",
        opera: "no",
        stato: "morto"
    },
    {
        name: "Stephen Hawking",
        count: 0,
        premio: "si",
        opera: "no",
        stato: "morto"
    },
    {
        name: "George Stephenson",
        count: 0,
        premio: "no",
        opera: "no",
        stato: "morto"
    },
    {
        name: "Giorgio Armani",
        count: 0,
        premio: "si",
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Sigmund Freud",
        count: 0,
        premio: "si",
        opera: "no",
        stato: "morto"
    },
    {
        name: "Philippe Starck",
        count: 0,
        premio: "si",
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Eiichirō Oda",
        count: 0,
        premio: "si",
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Ansel Adams",
        count: 0,
        premio: "si",
        opera: "si",
        stato: "morto"
    },
    {
        name: "Ryan Fretz",
        count: 0,
        premio: "no",
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Alessandro Barbero",
        count: 0,
        premio: "si",
        opera: "no",
        stato: "vivo"
    },
    {
        name: "Dan Houser",
        count: 0,
        premio: "si",
        opera: "si",
        stato: "vivo"
    },
    {
        name: "George Massenberg",
        count: 0,
        premio: "si",
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Dr. James Andrews",
        count: 0,
        premio: "si",
        opera: "no",
        stato: "vivo"
    },
    {
        name: "Qin Yinglin",
        count: 0,
        premio: "si",
        opera: "no",
        stato: "vivo"
    },
    {
        name: "Rem Koolhaas",
        count: 0,
        premio: "si",
        opera: "si",
        stato: "vivo"
    },
    {
        name: "Frank Henry Netter",
        count: 0,
        premio: "si",
        opera: "si",
        stato: "morto"
    },
    {
        name: "Hans Ulrich Obrist",
        count: 0,
        premio: "si",
        opera: "no",
        stato: "vivo"
    }
];

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

function premioSI() {
    for(let i=0; i<20; i++)
    {
        if(personaggi[i].premio === "si")
        {
            personaggi[i].count += 1;
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

