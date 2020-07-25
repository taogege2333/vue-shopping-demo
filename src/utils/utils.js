export const throttle = (fn, delay) => {
  let timer = null;
  return function () {
    if(timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  }
}
export const realPx = px => {
  const screenWidth = document.documentElement.clientWidth;
  return px * screenWidth / 375;
}