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


  }

}
function get(number){

}
function remove(){

}
function insert(){

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