import { printReview } from '../../Review/Review'
import './Research.css'

export const printResearch = (parent) => {
    

    
    const mainResearch = document.createElement('main')
    mainResearch.className = 'mainresearch'
    const research = document.createElement('div')
    research.className = 'research'

    printReview('Research article',  'mRNAs biotinylated within the 5´cao and protected against decapping: new tools to capture RNA - protein complexes', 'Published in (Journal/Editorial):' ,mainResearch, 'green', '/medioResearch.png')
    

    research.innerHTML = `

    <img class='imgresearch' src='/Research.png' alt=''>
    <div class='contenedortextos'>
    <p>Journal figure from review: <em><strong>Philos Trans R Soc Lond B Biol Sci.</strong></em> 2018 Dec 19; 373(1762): 201801167.</p>
    <p>http://dx.doi.org/10.1098/rstb.2018.0167</p>
    <p><strong>Figure 7. Study of protein-RNA interactions by UV-cross-linking and affinity capture of single-biotin- capped RNA.</strong></p>
    <p>(a) Schematic of RNA-binding protein recovery using biotinilated RNA.</p>
    <p>(b) eGFP (control) or hnRNPC-eGFP (c) interaction with biotinylated RNA measure by western blot.</p>
    <p>Created by Vanesa Madan.</p>
    </div>

    
    `

    
    mainResearch.append(research)
    

    parent.append(mainResearch)
}