import './Articulo.css'

export const printArticulo = (parent) => {

    const mainArticulo = document.createElement('main')
    mainArticulo.className = 'mainarticulo'
    const articulo = document.createElement('div')
    articulo.className = 'articulo'


    articulo.innerHTML = `

    
    <img class='imgarticulo' src='/Articulo.png' alt=''>

    <div class='contenedortextos'>
    <p><strong>SCIENTIFIC POSTER DESIGN</strong></p>
    <p><strong>Scientific poster</strong> presented at the virtual Dynein 2021 International Workshop hold online on 8th/9th September 2021.</p>
    <p>Poster title: "Heatr5b is a new dynamic-associated protein that mediates AP-1 vesicle transport".</p>
    <p>Research topic: Molecular motors (Cell Biology).</p>
    <p>The molecular motor dynein/dynactin is a protein complex that transports different cell components in our cells.</p>
    <p>Intracellular transport is crucial for many cellular functions, and defects in transport can cause neurological diseases.</p>
    <p>Dynein/Dynactin uses adaptors to link the motor to different cargos. Many of these adaptors have not been identified yet.</p>
    <p>In this work we identified a new adaptor that allows dynein/Dynactin motor transport a specific cell organelle called AP-1 vesicle.</p>
    <p>The poster shows research data obtained from biochemical assays, fluorescence microscopy, live cell imaging and experiments using the fruit fly, <em>Drosophila melanogaster</em>.</p>
    <p>Poster created by Vanesa Madan.</p>
    <p>Experiments conduced by: Vanesa Madan, Li Jin, Lucas Albacete, Joseph Watson, Emmanuel Derivery and Simon Bullock in the MRC Laboratory of Molecular Biology, Cambridge, UK.</p>
    </div>
`

mainArticulo.append(articulo)
parent.append(mainArticulo)
}