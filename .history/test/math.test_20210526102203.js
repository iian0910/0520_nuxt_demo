import { add, subtract } from '../math'

test('Should get current sum of number', () => {
  expect(add(2, 3)).toBe(5)
})

test('Should not get zero', () => {
  expect(subtract(2, 3)).not.toBe(0)
})
