const expect = require('chai').expect
const resolve = require('path').resolve
const utils = require(resolve('src/utils/exercise'))

describe('Intern Testing', () => {
    it('------- A -------', () => {
        /* 
            - จงเขียน function เพื่อหาผลลัพธ์ 
            - ซึ่งจำนวน parameters ที่ส่งเข้าไปจะมีจำนวนไม่เท่ากัน 
        */
        expect(utils.sum(1, 2, 3, 4, 5)).to.equal(15)
        expect(utils.sum(1, 2, 3, 4, 5, 6)).to.equal(21)
        expect(utils.sum(1, 2, 3, 4, 5, 6, 7)).to.equal(28)
        expect(utils.sum(1, 2, 3, 4, 5, 6, 7, 8)).to.equal(36)
    })

    it('------- B -------', () => {
        /*
            - จงเขียน function เพื่อเพิ่มสมาชิกให้ array
            - โดยสมาชิกที่ array ตัวเดิมต้องไม่เปลี่ยนแปลง
        */
        const emptyArray = []
        const expectData = utils.insertData(emptyArray, 'A')
        expect(emptyArray).to.deep.equal([])
        expect(utils.insertData(expectData, 'B')).to.deep.equal(['A', 'B'])
        expect(expectData).to.deep.equal(['A'])
    })

    it('------- C -------', () => {
        /* 
            - จงเขียน function เพื่อหาผลลัพธ์ 
            - โดยมีเงื่อนไขโดยการส่งตัวเลขเข้าไปใน function
            - ตัวเลขที่หาร 3 ลงตัวให้ return คำว่า 'Fizz'
            - ตัวเลขที่หาร 5 ลงตัวให้ return คำว่า 'Buzz'
            - ตัวเลขที่หาร 15 ลงตัวให้ return คำว่า 'FizzBuzz'
            - ตัวเลขอื่น ๆ ให้ return ค่าเดิม
        */
        expect(utils.fizzBuzz(1)).to.equal(1)
        expect(utils.fizzBuzz(2)).to.equal(2)
        expect(utils.fizzBuzz(3)).to.equal('Fizz')
        expect(utils.fizzBuzz(4)).to.equal(4)
        expect(utils.fizzBuzz(5)).to.equal('Buzz')
        expect(utils.fizzBuzz(15)).to.equal('FizzBuzz')
    })

    it('------- D -------', () => {
        /*
            - จงเขียน function เพื่อหาผลลัพธ์ 
            - ส่งตัวเลขเข้าไป 1 ตัวเพื่อตรวจสอบว่าเป็นเลขเฉพาะหรือไม่
            - ถ้าเป็นเลขเฉพาะให้ return true
            - ถ้าไม่ใช่ให้ return false
        */
        expect(utils.isPrime(3)).to.equal(true)
        expect(utils.isPrime(5)).to.equal(true)
        expect(utils.isPrime(8)).to.equal(false)
        expect(utils.isPrime(15)).to.equal(false)
    })

    it('------- E -------', () => {
        /*
            - จงเขียน function เพื่อ return function เพื่อให้ได้ผลลัพธ์ตามโค้ดด้านล่าง
        */
        const calculator = utils.calculator(1, 2)
        expect(calculator.add()).to.equal(3)
        expect(calculator.sub()).to.equal(-1)
        expect(calculator.div()).to.equal(0.5)
        expect(calculator.multi()).to.equal(2)

        const calculator = utils.calculator(8, 4)
        expect(calculator.add()).to.equal(12)
        expect(calculator.sub()).to.equal(4)
        expect(calculator.div()).to.equal(2)
        expect(calculator.multi()).to.equal(32)
    })
})