export function sum(array) {
  return (propToSum) => {
    return array.reduce((acc, cur) => {
      return acc + cur[propToSum];
    }, 0).toFixed(2);
  }
}