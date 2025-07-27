const users = [
    {
        id:1,
        name: "Meer Afzal",
        email:"do4best@gmail.com"
    },
    {
        id:2,
        name: "Faisal Siddique",
        email:"raviscientific@yahoo.com"
    },
    {
        id:3,
        name: "Shabeer",
        email:"anmol@gmail.com"
    },
]
users.filter((user)=>user.email === "do4best@gmail.com").map((user) => {
    console.log(user.id + " " + user.name)
})
// const names = []
// for (let i = 0; i < users.length; i++){
//     if (users[i].name === "Meer Afzal") {
//         names.push(users[i])
//     }
// }
// console.log(names)
// const names=[]
// users.forEach((user) => (names.push(user)))
// console.log(names)
let sortedResult = users.sort((user1, user2) => (user1 < user2 ? -1 : 1))
let result = sortedResult.map((user) => user)
console.log(result)
let arr = [3, 2, 0, 1, 5, 4]
let results = arr.sort((ele1, ele2) => ele1 < ele2 ? -1 : 1)
let res = results.map((ele) => ele)
console.log(res)
