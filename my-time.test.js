const { sum } = require('./my-code')

describe('math functions', () => {

    it('sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })

    it('sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })

})

describe('time  functions', () => {
    it('returns the timestamp for one hour ahead', () => {
        const realDateNow = Date.now.bind(global.Date)
        global.Date.now = jest.fn(() => 0)
        expect(inOneHour()).toBe(36000000)
        global.Date.now = realDateNow

    })
})