// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"1AQo":[function(require,module,exports) {

},{}],"E1IZ":[function(require,module,exports) {
'use strict';

require('./queue.css');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var divScreen = document.querySelector('#screen'),
    btnCreateNumber = document.querySelector('#createNumber'),
    btnCallNumber = document.querySelector('#callNumber'),
    spanNewNumber = document.querySelector('#newNumber'),
    spanQueue = document.querySelector('#queue');

var queue = new Set(),
    n1 = 0;
btnCreateNumber.onclick = function () {
  n1++;
  queue.add.call(queue, n1);
  spanNewNumber.innerHTML = n1.toString();
  spanQueue.innerHTML = JSON.stringify([].concat(_toConsumableArray(queue)));
};

btnCallNumber.onclick = function () {
  if (queue.size === 0) {
    return;
  }
  var m = [].concat(_toConsumableArray(queue)).shift();
  queue.delete.call(queue, m);
  divScreen.innerHTML = '\u8BF7 ' + m + ' \u53F7\u5C31\u9910';
  spanQueue.innerHTML = JSON.stringify.call(JSON, [].concat(_toConsumableArray(queue)));
};
},{"./queue.css":"1AQo"}],"FShQ":[function(require,module,exports) {
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var spanStack = document.querySelector('#stack'),
    btnEnter = document.querySelector('#enter'),
    btnExit = document.querySelector('#exit');

var stack = new Set(),
    n2 = 0;
btnEnter.onclick = function () {
  if (stack.size === 0) {
    n2 = 0;
  }
  n2++;
  stack.add.call(stack, n2);
  spanStack.innerHTML = JSON.stringify.call(JSON, [].concat(_toConsumableArray(stack)));
};
btnExit.onclick = function () {
  if (stack.size === 0) {
    return;
  }
  var m2 = [].concat(_toConsumableArray(stack)).pop();
  console.log(m2);
  stack.delete.call(stack, m2);
  spanStack.innerHTML = JSON.stringify.call(JSON, [].concat(_toConsumableArray(stack)));
};
},{}],"VxK2":[function(require,module,exports) {
var createNode = function createNode(value) {
  return {
    data: value,
    next: null
  };
};

var createList = function createList(value) {
  return createNode(value);
};

var appendList = function appendList(list, value) {
  var node = createNode(value);
  var x = list;
  while (x.next) {
    x = x.next;
  }
  x.next = node;
  return node;
};

var removeFromList = function removeFromList(list, node) {
  var x = list;
  var pre = node;
  while (x !== node && x !== null) {
    pre = x;
    x = x.next;
  }
  if (x === null) {
    return false;
  } else if (x === pre) {
    pre = x.next;
    return pre;
  } else {
    pre.next = x.next;
    return list;
  }
};

var travelList = function travelList(list, fn) {
  var x = list;
  while (x) {
    fn(x);
    x = x.next;
  }
};

var get = function get(list, index) {
  var x = list,
      n = 0;
  while (x) {
    if (n === index) {
      return x;
    }
    x = x.next;
    n++;
  }
  return false;
};

var list = createList(10);
var node = list;
var node2 = appendList(list, 20);
// const node3 = appendList(list, 30)
// const node4 = appendList(list, 40)
// const node5 = appendList(list, 50)
// const node6 = appendList(list, 60)

var newList = removeFromList(list, node);
// console.log(newList)
// console.log(list)

// travelList(list, console.log)


// console.log(get(list, 2))
},{}],"veD7":[function(require,module,exports) {
var createNode = function createNode(value) {
  return {
    data: value,
    children: null,
    parent: null
  };
};
var createTree = function createTree(value) {
  return createNode(value);
};

var addChild = function addChild(node, value) {
  var newNode = createNode(value);
  newNode.parent = node;
  node.children = node.children || [];
  node.children.push(newNode);
  return newNode;
};

var travel = function travel(tree, fn) {
  fn(tree);
  if (tree.children) {
    tree.children.forEach(function (child) {
      travel(child, fn);
    });
  }
};

var removeNode = function removeNode(node) {
  var index = 0;
  node.parent.children.forEach(function (child) {
    if (child === node) {
      node.parent.children.splice(index);
    }
    index++;
  });
};

var tree = createTree(10),
    child1 = addChild(tree, 20),
    child2 = addChild(tree, 30),
    subChild1 = addChild(child2, 15);
// console.log(tree)
// removeNode(subChild1)
// console.log(tree)

// travel(tree, (value) => console.log(value))
},{}],"epB2":[function(require,module,exports) {
'use strict';

require('./reset.css');

require('./global.css');

require('./queue.js');

require('./stack.js');

require('./linked-list.js');

require('./tree.js');
},{"./reset.css":"1AQo","./global.css":"1AQo","./queue.js":"E1IZ","./stack.js":"FShQ","./linked-list.js":"VxK2","./tree.js":"veD7"}]},{},["epB2"], null)
//# sourceMappingURL=main.e1a07fcc.map