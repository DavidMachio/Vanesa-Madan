import './Portada.css'

export const printPortada = (parent) => {

    
    const portada = document.createElement('section');
    portada.className = 'portada'

    portada.innerHTML = `
    <div class="general">
    <div class="datos">
  <h2 class="nombre">Vanesa Madan</h2>
  <h3 class="profesion">Scientific Visual Communicator</h3>
  <div class="portfolioDiv">
    <h3 class="portfolio">Portfolio</h3>
    <h4 class="fecha">2024</h4>
  </div>
</div>
<img class="fotoPortada" src="/fotoPortada.png" alt="Imagen de cientifica">
</div>
    `
parent.append(portada)
}