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
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur unde porro omnis accusantium dolores laudantium minima itaque mollitia quam iure, ullam blanditiis sapiente quas perspiciatis recusandae ea rerum culpa!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur unde porro omnis accusantium dolores laudantium minima itaque mollitia quam iure, ullam blanditiis sapiente quas perspiciatis recusandae ea rerum culpa!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur unde porro omnis accusantium dolores laudantium minima itaque mollitia quam iure, ullam blanditiis sapiente quas perspiciatis recusandae ea rerum culpa!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur unde porro omnis accusantium dolores laudantium minima itaque mollitia quam iure, ullam blanditiis sapiente quas perspiciatis recusandae ea rerum culpa!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur unde porro omnis accusantium dolores laudantium minima itaque mollitia quam iure, ullam blanditiis sapiente quas perspiciatis recusandae ea rerum culpa!</p>
    <p>Sincerely</p>
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