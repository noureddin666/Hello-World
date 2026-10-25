export function total(items) {
  let amount = 0
  for (const item of items) amount += item.price * item.quantity
  return amount
}
