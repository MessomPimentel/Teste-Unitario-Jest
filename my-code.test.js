const { sum } = require('./my-code')

describe('math functions', () => {
    describe('math functions', () => {
        //testa antes de todos(beforeAll)
        beforeAll(() => {
            console.log('before All')
        })

        //testa antes de cada um(beforeEach)
        beforeEach(() => {
            console.log('before Each')
        })

        //testa depois que acaba os testes
        afterAll(() => {
            console.log('after all')
        })
        afterEach(() => {
            console.log('after each')
        })
        it('sums 2 numbers', () => {
            expect(sum(1, 2)).toBe(3)
        })
        it('sums 2 numbers', () => {
            expect(sum(1, 2)).toBe(3)
        })
    })
})