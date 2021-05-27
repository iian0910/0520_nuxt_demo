import { add, bankAccount, subtract } from '../math'

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
  expect(add(20, 10)).toBeLessThan(50)
})

// toBeLessThenOrEqual
test('Should get current sum less than or equal 50', () => {
  expect(add(20, 30)).toBeLessThanOrEqual(50)
})

// toBeTruthy
test('Username should be admin', () => {
  const username = 'admin'
  expect(username === 'admin').toBeTruthy()
})

// toBeFalsy
test('Username should be admin', () => {
  const username = 'admina'
  expect(username === 'admin').toBeFalsy()
})

// toEqual
test('Balance equal 500', () => {
  expect(bankAccount.getBalance()).toEqual({ balance: 500 })
})

// toContain
test('Admin should be in usernames', () => {
  const usernames = ['John', 'Admin', 'Ian']
  expect(usernames).toContain('admin')
})
