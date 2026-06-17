document.addEventListener('DOMContentLoaded', () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    // 1. Esconde o menu e desativa o canvas completamente no celular
    const toolbar = document.getElementById('drawing-toolbar');
    const canvas = document.getElementById('drawCanvas');
    
    if (toolbar) toolbar.style.display = 'none';
    if (canvas) {
      canvas.style.display = 'none';
      canvas.style.pointerEvents = 'none';
    }

    // 2. Garante que as colunas permitam o scroll nativo (sem forçar posição)
    const cols = document.querySelectorAll('.col-esquerda, .col-direita');
    cols.forEach(col => {
      col.style.overflowY = 'auto';
      col.style.webkitOverflowScrolling = 'touch';
      col.style.touchAction = 'auto';
    });
  }
});
