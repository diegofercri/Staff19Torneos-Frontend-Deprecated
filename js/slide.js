// Obtienes el id del body
const bodyId = document.body.id;
// Creas un nuevo elemento 'style'
const style = document.createElement('style');

// Añades la regla @keyframes al elemento 'style'
style.innerHTML = `
  @keyframes animate {
    20% {
        background-image: url(../${bodyId}/img/slide/5.jpg);
    }
    40% {
        background-image: url(../${bodyId}/img/slide/4.jpg);
    }
    60% {
        background-image: url(../${bodyId}/img/slide/3.jpg);
    }
    80% {
        background-image: url(../${bodyId}/img/slide/2.jpg);
    }
    100% {
        background-image: url(../${bodyId}/img/slide/1.jpg);
    }
  }

  .slide {
    background-image: url(../${bodyId}/img/slide/1.jpg);
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    animation: animate 10s infinite;
  }
`;

// Añades el elemento 'style' al documento
document.head.appendChild(style);