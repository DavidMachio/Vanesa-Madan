

import './Footerpdf.css'


export const printFooterPdf = (parent) => {
    const footer = document.createElement('footer')
    footer.className = 'footerpdf'

    footer.innerHTML = `
    <img class='imgcientifica' src='/cientifica.png' alt=''>
    <div class='info'>
    <h4>E-mail: vmadanr@gmail.com</h4>
    <h4>Movile: 07474993188</h4>
    <h4>Cambridge 2024</h4>
    </div>
    `

    parent.append(footer)
}