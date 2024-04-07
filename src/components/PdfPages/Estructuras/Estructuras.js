import { printReview } from '../../Review/Review'
import './Estructuras.css'

export const printEstructuras = (parent) => {

    
    const mainEstructuras = document.createElement('main')
    mainEstructuras.className = 'mainestructuras'
    const estructuras = document.createElement('div')
    estructuras.className = 'estructuras'

    printReview('Review', 'Structural and Functional Properties of the Hepatitis C Virus p7 Viroporin', 'Published in (Journal/Editorial):' ,mainEstructuras, 'red', '/mediosEstructuras.png')
    

    estructuras.innerHTML = `

    <img class='imgestructuras' src='/estructuras.png' alt=''>
    <div class='contenedortextos'>
    <p>Journal figure from review: <em>Viruses</em>. 2015 Aug; 7(8): 4461-4481: doi:10.3390/v7082826</p>
    <p><strong>Figure 2</strong>. Molecular structure of p7 monomer and hexamer.</p>
    <p>(A) Membrane topology of Hepatitis C virus p7 proteins</p>
    <p>(B) Structure of p7 hexamer. Side orientation (in the membrane) and top views are represented.</p>
    <p>(C) Multiple sequence aligment of p7 proteins and schematic representatiopn of structured regions.</p>
    <p>Created by Vanesa Madan. Review written by Vanesa Madan and Ralf Bartenschlager.</p>
    </div>
    
    `

    
    mainEstructuras.append(estructuras)
    

    parent.append(mainEstructuras)
}