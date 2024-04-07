import { laboratorios } from '../../../Datas/logosHola'
import './Hola.css'

export const printHola = (parent) => {

    const seccionHola = document.createElement('section')
    seccionHola.className = 'seccionHola'

    

    const presentacion = document.createElement('div')
    presentacion.innerHTML = `
    <div class='titleHello'>
    <div class="label-hello"></div>
    <h2>Hello!</h2>
    </div>
    <p>I am Vanessa Madan, a biologist with a passinon for scientific ilustration. In my scientific joumey I have had the pleasure to conduct challenging research projects in the cell and mollecular biology fields in three different countries. An important part in my life as a scientist is to communicate not only orally but also visually my new findings. I  have always enjoyed getting involved in the process of creating schematics and ilustrations that give support and clarify a complex message in a presentation. I find very gratifying when the message reaches your audience.</p>



    <p>In this portfolio, I have collected a series of <em>journal figures</em> (including schematics and models to explain virology concepts) that were published during my PhD and postdoctoral work in peer-reviewed journals. You can also find a <em>scientific poster</em> on "molecular motors" that I created and presented in a virtual Cell Biology conference. Finally, I show a recent prouect that includes a web desing mockup and logo for a ficticious biopharmaceutical company.</p>



    <p>Thank you very much for giving me the opportunity to show and share my portfolio</p>
    <p>Sincerely,</p>
    <h3>Vanesa Madan</h3>
    `

    const laboratoriosDiv = document.createElement('div')
    laboratoriosDiv.className = 'laboratoriosDiv'
    const descripcion = document.createElement('p')
    for (const laboratorio of laboratorios) {
        const laboratorioDiv = document.createElement('div')
        laboratorioDiv.className = 'laboratorioDiv'
        const imagen = document.createElement('img')
        const lugar = document.createElement('h2')
        imagen.src = laboratorio.img;
        imagen.alt = laboratorio.imgAlt
        imagen.className = laboratorio.clase
        lugar.textContent = laboratorio.lugar

        laboratorioDiv.append(imagen, lugar)
        laboratoriosDiv.append(laboratorioDiv)
    }




    presentacion.className = 'presentacion'
    laboratorios.className = 'laboratorios'
    descripcion.className = 'descripcion'


    seccionHola.append(presentacion)
    seccionHola.append(laboratoriosDiv)
    parent.append(seccionHola)
}