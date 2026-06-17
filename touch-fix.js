document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('drawCanvas');
  
  if (canvas) {
    // Se não vamos usar caneta no celular, vamos garantir que o canvas
    // não capture nenhum evento de toque.
    canvas.style.pointerEvents = 'none';
    canvas.style.touchAction = 'auto';
  }
});
