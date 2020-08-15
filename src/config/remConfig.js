import { throttle } from "../utils/utils";

export const remConfig = (fontSize, width) => {
  // 更新html的font-size
  function updateFontSize() {
    const screenWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize =
      (screenWidth / width) * fontSize + "px";
  }

  // 绑定事件
  document.addEventListener("DOMContentLoaded", updateFontSize);
  window.addEventListener("resize", throttle(updateFontSize, 500));
};
