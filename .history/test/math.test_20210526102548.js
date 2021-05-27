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
