import { printReview } from '../../Review/Review'
import './Conection.css'

export const printConection = (parent) => {

    const mainConection = document.createElement('main')
        mainConection.className = 'mainconection'
        const conection = document.createElement('div')
        conection.className = 'conection'
    
        printReview('Review',  'Hepatitis C virus and host cell lipids: An intimate connection', 'Published in (Journal/Editorial):' ,mainConection, 'gold', '/mediosConection.png')
        
    
        conection.innerHTML = `

        <img class='imgconection' src='/Conection.png' alt=''>
        <div class='contenedortextos'>
        <p>Journal figure from review: <strong>RNA Biology.</strong> 2011. 8:2, 258-269, DOI: 10.4161/rna.8.2.15011.</p>
        <p>Link to this article : https://doi.org/10.4161/rna.8.2.15011</p>
        <p><strong>Figure 1.</strong> Schematic of Hepatitis C virus (HCV) genome organisation, polyprotein end membrane topology of viral proteins</p>
        <p>Schematic representation of HCV RNA genome in blue is shown at the top.</p>
        <p>Genome translation produces a viral polyprotein precursor (middle) which is cleaved by viral and cellular proteases releasing 10 viral proteins.</p>
        <p>Membrane topology  of the viral proteins is depicted showing protein helices inserted in the membrane and globular regions facing the ER (endoplasmic reticulum) lumen and the cytosol.</p>
        <p>Black and green scissors indicate cellular proteases. Blue and red scissors indicate viral proteases.</p>
        <p>Glycosilation sites in E1 and E2 are depicted as sugar chain.</p>
        <p>Palmitoylation of NS4B is represented by a black zig-zag line.</p>
        <p>Phosphorylation of NS5A is represented by encircled "P".</p>
        <p>Created by Vanesa Madan.</p>
        <p>Review written by Vanesa Madan, Gualtiero Alvisi and Ralf Bartenschlager.</p>
        </div>

        <img class='imgconection' src='/Conection2.png' alt=''>

        <div class='contenedortextos'>
        <p>Journal figure from review: <strong>RNA Biology.</strong> 2011. 8:2, 258-269, DOI: 10.4161/rna.8.2.15011.</p>
        <p><strong>Figure 2.</strong> The Hepatitis C virus (HCV) replication cycle</p>
        <p>(1) Attachment of HCV to the cell surface.</p>
        <p>(2) Receptor-mediated endocytosis. Internalisation of HCV in a clathrin-dependent manner. Low pH in the endosome triggers fusion of viral and endosome membranes, and consequent release of viral RNA genome into the cytoplasm.</p>
        <p>(3) Viral proteins synthesis at the endoplasmic reticulum (ER).</p>
        <p>(4) HCV genome replication at themembranous web (virus-induced vesicles in black).</p>
        <p>(5) Virus release through the secretory pathway.</p>
        <p>Created by Vanesa Madan.</p>
        <p>Review written by Vanesa Madan, Gualtiero Alvisi and Ralf Bartenschlager.</p>
        </div>`

        mainConection.append(conection)
        
    
        parent.append(mainConection)
        
}