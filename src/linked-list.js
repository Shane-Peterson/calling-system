const createNode = value => {
  return {
    data: value,
    next: null
  }
}

const createList = value => {
  return createNode(value)
}


const appendList = (list, value) => {
  const node = createNode(value)
  let x = list
  while (x.next) {
    x = x.next
  }
  x.next = node
  return node
}

const removeFromList = (list, node) => {
  let x = list
  let pre = node
  while (x !== node && x !== null) {
    pre = x
    x = x.next
  }
  if(x === null){
    return false
  }else if(x === pre){
    pre = x.next
    return pre
  }else {
    pre.next = x.next
    return list
  }
}

const travelList = (list, fn) => {
  let x = list
  while (x) {
    fn(x)
    x = x.next
  }
}

const get = (list, index) => {
  let x = list,
    n = 0
  while (x) {
    if (n === index) {
      return x
    }
    x = x.next
    n++
  }
  return false
}

const list = createList(10)
const node = list
const node2 = appendList(list, 20)
// const node3 = appendList(list, 30)
// const node4 = appendList(list, 40)
// const node5 = appendList(list, 50)
// const node6 = appendList(list, 60)

const newList = removeFromList(list, node)
// console.log(newList)
// console.log(list)

// travelList(list, console.log)


// console.log(get(list, 2))

