import './Mockup.css'

export const printMockup = (parent) => {

    const mainMockup = document.createElement('main')
    mainMockup.className = 'mainmockup'
    const mockup = document.createElement('div')
    mockup.className = 'mockup'


    mockup.innerHTML = `

    
    <img class='imgmockup' src='/Mockup.png' alt=''>

    <div class='contenedortextos'>
    
    <p><strong>Web design</strong> (content and layout) <strong>mockup</strong> for fictitious biopharmaceutical company "BioViRNA" (2024).</p>
    <p>Created using Photoshop (image generation, image editing) and illustrator (layout, mockup and logo).</p>
    <p>"BioViRNA" represents a leader pharmaceutical company that develops new medicines based on messenger ribonucleic acid (mRNA) for use as protein replacement therapies for rare diseases, as immunotherapies, and as vaccines against infectious diseases.</p>
    
    <p>Created by Vanesa Madan.</p>
    
`

mainMockup.append(mockup)
parent.append(mainMockup)
}