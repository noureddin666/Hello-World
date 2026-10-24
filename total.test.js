import { test } from 'node:test'
import assert from 'node:assert/strict'
import { total } from './total.js'

test('sums quantities and prices', () => {
  assert.equal(total([{ price: 3, quantity: 2 }, { price: 4, quantity: 1 }]), 10)
})

test('empty orders total zero', () => {
  assert.equal(total([]), 0)
})
