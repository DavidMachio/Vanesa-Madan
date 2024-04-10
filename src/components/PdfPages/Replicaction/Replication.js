import { printReview } from '../../Review/Review'
import './Replication.css'

export const printReplication = (parent) => {
    

    
        const mainReplication = document.createElement('main')
        mainReplication.className = 'mainreplication'
        const replication = document.createElement('div')
        replication.className = 'replication'
    
        printReview('Review',  'Hepatitis C Virus RNA Replication and Assembly:', 'Living onthe Fat if the Land', 'Published in (Journal/Editorial):' ,mainReplication, 'blue', '/mediosReplication.png')
        
    
        replication.innerHTML = `

        <img class='imgreplication' src='/Replication1.png' alt=''>
        <div class='contenedortextos'>
        <p>Journal figure from review: <em><strong>Cell Host Microbe</strong></em>. 2014 Nov; 12; 16(5): 569-579. http://dx.doi.org/10.1016/j.chom.2014.10.008</p>
        <p><strong>Figure 1.</strong> Schematic representation of Hepatitis C virus genome organisation, polyprotein processing and viral proteins function.</p>
        <p>The single-strand (ss) HCV RNA genome is shown on the top.</p>
        <p>The viral polyprotein is represented in yellow.</p>
        <p>The cleavage of the viral polyprotein by cellular (SPP and SP) and viral proteases (NS4 and NS3/4A) is indicated by scissors.</p>
        <p>Functions of cleavage products are indicated below each viral protein.</p>
        <p>Created by Vanesa Madan.</p>
        <p>Review written by Vanesa Madan, David Paul and Ralf Bartenschlager.</p>
        </div>

        <div class='separadorfotos'></div>

        <img class='imgreplication' src='/Replication2.png' alt=''>

        <div class='contenedortextos'>
        <p><strong>Figure 2.</strong> Model of Hepatitis C Virus-Induced Double-Membrane Vesicle (left) and Hypothetical 3D Structures of Membrane-Associated Hepatitis C virus proteins (in boxes).</p>
        <p>Virus-induced double-membrane vesicles (DMVs) contain viral nonstructural proteins and RNA.</p>
        <p>Viral DMVs are sites of active viral RNA replication.</p>
        <p>Created by Vanesa Madan.</p>
        </div>

        <div class='separadorfotos'></div>


        <img class='imgreplication' src='/Replication3.png' alt=''>

        <div class='contenedortextos'>
        <p><strong>Figure 3.</strong> Model of Hepatitis C Virus Particle Production.</p>
        <p>(A) Hypothetical model of Hepatitis C virus assembly (left side).</p>
        <p>Viral RNA (HCV RNA in red) is shuttled from replication sites to cytosolic lipid droplets.</p>
        <p>Core protein on lipid droplets and at the ER membrane (lipid bilayer) is thought to trigger nucleocapsid formation and budding into the ER (endoplasmic reticulum) lumen.</p>
        <p>(B) Models of viral particle lipidation (right side).</p>
        <p>In the hybrid model, cellular lipoproteins are incorporated to nascent virions during budding.</p>
        <p>In the two particle model, lipidation occurs during virus eggress via interaction between the virion and lipoprotein particles.</p>
        <p>Created by Vanesa Madan and David Paul.</p>
        </div>
        `
    
        
        mainReplication.append(replication)
        
    
        parent.append(mainReplication)
    }
