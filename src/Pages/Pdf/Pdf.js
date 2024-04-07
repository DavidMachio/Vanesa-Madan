import { printArticulo } from '../../components/PdfPages/Articulo/Articulo';
import { printConection } from '../../components/PdfPages/Conection/Conection';
import { printEstructuras } from '../../components/PdfPages/Estructuras/Estructuras';
import { printFunciones } from '../../components/PdfPages/Functiones/Funciones';
import { printHola } from '../../components/PdfPages/Hola/Hola';
import { printMockup } from '../../components/PdfPages/Mockup/Mockup';
import { printPortada } from '../../components/PdfPages/Portada/Portada';
import { printPoster } from '../../components/PdfPages/Poster/Poster';
import { printReplication } from '../../components/PdfPages/Replicaction/Replication';
import { printResearch } from '../../components/PdfPages/Research/Research';
import { printTitle } from '../../components/PdfPages/Title/Title';
import { printWeblayout } from '../../components/PdfPages/Weblayout/Weblayout';
import './Pdf.css'

const app = document.querySelector('#app')




export const printPdf = () => {
    const mainPdf = document.createElement('main');
    mainPdf.className = 'main-pdf'


    


    printPortada(mainPdf)
    printHola(mainPdf)
    printTitle('Journal Figures and Graphical Abstracts', '/ImagenTitle.png', mainPdf)
    printEstructuras(mainPdf)
    printReplication(mainPdf)
    printConection(mainPdf)
    printResearch(mainPdf)
    printFunciones(mainPdf)
    printPoster(mainPdf)
    printArticulo(mainPdf)
    printWeblayout(mainPdf)
    printMockup(mainPdf)

    app.append( mainPdf)
}



