import './queue.css'
const divScreen = document.querySelector('#screen'),
  btnCreateNumber = document.querySelector('#createNumber'),
  btnCallNumber = document.querySelector('#callNumber'),
  spanNewNumber = document.querySelector('#newNumber'),
  spanQueue = document.querySelector('#queue')


let queue = new Set(),
  n1 = 0
btnCreateNumber.onclick = () => {
  n1++
  queue.add.call(queue, n1)
  spanNewNumber.innerHTML = n1.toString()
  spanQueue.innerHTML = JSON.stringify([...queue])
}

btnCallNumber.onclick = () => {
  if (queue.size === 0) {
    return
  }
  const m = [...queue].shift()
  queue.delete.call(queue, m)
  divScreen.innerHTML = `请 ${m} 号就餐`
  spanQueue.innerHTML = JSON.stringify.call(JSON, [...queue])
}

