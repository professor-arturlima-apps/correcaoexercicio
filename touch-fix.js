document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia("(pointer: coarse)").matches) {
    const canvas = document.getElementById('drawCanvas');
    const toolbar = document.getElementById('drawing-toolbar');
    if (canvas) canvas.remove();
    if (toolbar) toolbar.remove();
  }
});
