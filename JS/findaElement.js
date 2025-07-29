let users = [
    {
        id: 1,
        name: "Meer Afzal",
        username: "do4best",
        exist: false
    },
    {
        id: 2,
        name: "Faisal Saddique",
        username: "raviscientific",
        exist: true
    },
    {
        id: 3,
        name: "Shabeer Ahmad",
        username: "idealScietific",
        exist: false
    },
    {
        id: 4,
        name: "Javed Kharal",
        username: "anmolScietific",
        exist: true
    }
];
const nameExist = (name, arr) => arr.some((el) => el.name === name)
console.log(nameExist("anmolScientific", users))

let rresult = [...Array(60).keys()].map(el => el + 1)
console.log(rresult)