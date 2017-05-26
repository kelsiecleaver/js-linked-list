/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
var head = null;
var tail = null;

function getHead(){
  return head;

}
function getTail(){
  return tail;
}
function add(value){
  if(head === null){
    head = {
    value: value,
    next: null,
    };
    tail = head;
  }else{
    tail.next = {
      value: value,
      next: null,
    };
    tail = tail.next;
  }
  return tail;
}


function get(number){
  var count = 0;
  var currentNode = head;
  if(head === null){
      return false;
  }
  while(count != number){
    if(currentNode.next === null){
      return false;
    }
    currentNode = currentNode.next;
    count++;
  }
  return currentNode;
}

function remove(number){
  var currentNode = get(number);
  var previousNode = get(number - 1);
  if(currentNode === false){
    return false;
  }else if(number === 0){
    head = currentNode.next;
  }
  if(currentNode.next === null){
    tail = previousNode;
  }
  previousNode.next = currentNode.next;
}

function insert(value, number){
  var currentNode = get(number);
  var nextNode = currentNode.next;

  if(number === 0){
    head = {
      value: value,
      next: head,
    };
  }
  if(currentNode === false){
    return false;
  }

}
return{
  getHead: getHead,
  getTail: getTail,
  add: add,
  get: get,
  remove: remove,
  insert: insert

};

}