export const remConfig = (fontSize, width) => {
  const screenWidth = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = (screenWidth / width) * fontSize + 'px';
}