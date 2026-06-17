document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('drawCanvas');

  if (canvas) {
    canvas.addEventListener('touchstart', (e) => {
      // SÓ bloqueamos o scroll se o usuário estiver com a ferramenta ativa
      if (window.tool && window.tool !== 'none') {
        e.preventDefault();
        drawing = true;
        draw(e);
      }
      // Se window.tool for 'none', não fazemos nada. 
      // O evento de toque passará naturalmente para a coluna (col-esquerda/direita)
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
      if (window.tool && window.tool !== 'none') {
        e.preventDefault();
        draw(e);
      }
    }, { passive: false });
  }
});
