import { add, subtract } from '../math'

// toBe
test('Should get current sum of number', () => {
  expect(add(2, 3)).toBe(5)
})

// not toBe
test('Should not get zero', () => {
  expect(subtract(2, 3)).not.toBe(0)
})

// toBeNull
test('Should get null', () => {
  const number = null
  expect(number).toBeNull()
})

// toBeLessThen
test('Should get current sum less than 50', () => {
  expect(add(20, 30)).toBeLessThen(50)
})

// toBeLessThenOrEqual
test('Should get current sum less than or equal 50', () => {
  expect(add(20, 30)).toBeLessThenOrEqual(50)
})

// toBeTruthy
test('Username should be admin', () => {
  const username = 'admin'
  expect(username === 'admin').toBeTruthy()
})
