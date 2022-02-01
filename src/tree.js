const createNode = (value) => {
  return {
    data: value,
    children: null,
    parent: null
  }
}
const createTree = (value) => {
  return createNode(value)
}


const addChild = (node, value) => {
  const newNode = createNode(value)
  newNode.parent = node
  node.children = node.children || []
  node.children.push(newNode)
  return newNode
}

const travel = (tree, fn) => {
  fn(tree)
  if (tree.children) {
    tree.children.forEach((child) => {
      travel(child, fn)
    })
  }
}

const removeNode = (node) => {
  let index = 0
  node.parent.children.forEach((child)=>{
    if (child === node){
      node.parent.children.splice(index)
    }
    index++
  })
}



const tree = createTree(10),
      child1 = addChild(tree, 20),
      child2 = addChild(tree, 30),
      subChild1 = addChild(child2, 15)
// console.log(tree)
// removeNode(subChild1)
// console.log(tree)

// travel(tree, (value) => console.log(value))