import { printReview } from '../../Review/Review'
import './Funciones.css'

export const printFunciones = (parent) => {

    const mainFunciones = document.createElement('main')
        mainFunciones.className = 'mainfunciones'
        const funciones = document.createElement('div')
        funciones.className = 'funciones'
    
        printReview('Review',  'Hepatitis C virus and host cell lipids: An intimate connection', 'Published in (Journal/Editorial):' ,mainFunciones, 'violet', '/medioFunciones.png')

        const separador = document.createElement('div')
        separador.className = 'separador'
        
    
        funciones.innerHTML = `


        <img class='imgfunciones' src='/Funciones.png' alt=''>
        <div class='contenedortextos'>
        <div class='separadornature'>
        <div class='separador2'></div>
        <img class='imgnature' src='/natureRevies.png' alt=''>
        </div>
        <p><strong>Visual concept and sketch.</strong> for figure desing and ilustration in: <strong>Nature Reviews Microbiology.</strong> 2012 Jul 2;10(8):563-74.doi:10.1038/nrmicro2820.</p>
        
        <p><strong>Figure 2.</strong> Cytophatic effects of viroporins and their functions during the viral life cycle.</p>
        <p>The main host cell organelles targeted by viroporins, and cytopathic effects and viroporins functions are represented.</p>
        <p>(A) Alteration of plasma membrane potential (b) Alteration of calcium homeostasis (c) Virus-induced membranes (viroplasm) (d) Dissipation of proton gradient in the Golgi apparatus (e) Virus budding and release.</p>
        <p>Sketch created by Vanesa Madan. Digital ilustration created by Narture creative team.</p>
        <p>Review written by Vanesa Madan, JL Nieva and Luis Carrasco.</p>
        </div>

       `

       mainFunciones.append(separador)
        mainFunciones.append(funciones)
        
    
        parent.append(mainFunciones)
        
}