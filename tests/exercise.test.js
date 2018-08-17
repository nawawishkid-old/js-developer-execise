const expect = require('chai').expect
const resolve = require('path').resolve
const utils = require(resolve('src/utils/exercise'))

describe('Intern Testing', () => {
    it('------- A -------', () => {
        expect(utils.sum(1, 2, 3, 4, 5)).to.equal(15)
        expect(utils.sum(1, 2, 3, 4, 5, 6)).to.equal(21)
        expect(utils.sum(1, 2, 3, 4, 5, 6, 7)).to.equal(28)
        expect(utils.sum(1, 2, 3, 4, 5, 6, 7, 8)).to.equal(36)
    })

    it('------- B -------', () => {
        const emptyArray = []
        const expectData = utils.insertData(emptyArray, 'A')
        expect(emptyArray).to.deep.equal([])
        expect(utils.insertData(expectData, 'B')).to.deep.equal(['A', 'B'])
        expect(expectData).to.deep.equal(['A'])
    })

    it('------- C -------', () => {
        expect(utils.fizzBuzz(3)).to.equal('Fizz')
        expect(utils.fizzBuzz(5)).to.equal('Buzz')
        expect(utils.fizzBuzz(15)).to.equal('FizzBuzz')
    })

    it('------- D -------', () => {
        expect(utils.isPrime(3)).to.equal(true)
        expect(utils.isPrime(5)).to.equal(true)
        expect(utils.isPrime(8)).to.equal(false)
        expect(utils.isPrime(15)).to.equal(false)
    })

    it('------- E -------', () => {
        const calculator = utils.calculator(1, 2)
        expect(calculator.add()).to.equal(3)
        expect(calculator.sub()).to.equal(-1)
        expect(calculator.div()).to.equal(0.5)
        expect(calculator.multi()).to.equal(2)
    })
})