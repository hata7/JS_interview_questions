function max1() {
  const nums = Array.prototype.slice.call(arguments);
  let max = 0;
  nums.forEach( n => {
    if(n > max) {
      max = n
    }
  })
  return max
}