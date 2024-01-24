// Obtienes el id del body
const bodyId = document.body.id;
// Creas un nuevo elemento 'style'
const style = document.createElement('style');

// Añades la regla @keyframes al elemento 'style'
style.innerHTML = `
  @keyframes animate {
    25% {
        background-image: url(../${bodyId}/img/slide/8.jpg);
    }
    50% {
        background-image: url(../${bodyId}/img/slide/7.jpg);
    }
    75% {
        background-image: url(../${bodyId}/img/slide/6.jpg);
    }
    100% {
        background-image: url(../${bodyId}/img/slide/5.jpg);
    }
  }

  .slide {
    background-image: url(../${bodyId}/img/slide/5.jpg);
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    animation: animate 10s infinite;
  }
`;

// Añades el elemento 'style' al documento
document.head.appendChild(style);