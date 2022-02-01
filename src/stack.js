const spanStack = document.querySelector('#stack'),
  btnEnter = document.querySelector('#enter'),
  btnExit = document.querySelector('#exit')

let stack = new Set(),
  n2 = 0
btnEnter.onclick = () => {
  if (stack.size === 0) {
    n2 = 0
  }
  n2++
  stack.add.call(stack, n2)
  spanStack.innerHTML = JSON.stringify.call(JSON, [...stack])
}
btnExit.onclick = () => {
  if (stack.size === 0) {
    return
  }
  const m2 = [...stack].pop()
  console.log(m2)
  stack.delete.call(stack, m2)
  spanStack.innerHTML = JSON.stringify.call(JSON, [...stack])
}