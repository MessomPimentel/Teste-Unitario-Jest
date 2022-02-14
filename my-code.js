
// Comandos no Terminal:
// node my-code.js
//npm t ou npm test e npm run = Pra rodadr os testes

const sum = (a, b) => {
    return a + b
}

const inOneHour = () => {
    const now = Date.now()
    const oneHourInMili = 1 * 60 * 60 * 1000
    return now + oneHourInMili
}
// console.log(inOneHour())

module.exports = { sum, inOneHour }