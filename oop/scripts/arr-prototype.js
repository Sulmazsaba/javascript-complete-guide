const arr = [2, 1, 3, 2, 5, 4, 3, 2];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique=function(){
  return [...new Set(this)];
}
console.log(arr.unique());
