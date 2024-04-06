import { printConection } from '../../components/PdfPages/Conection/Conection';
import { printEstructuras } from '../../components/PdfPages/Estructuras/Estructuras';
import { printHola } from '../../components/PdfPages/Hola/Hola';
import { printPortada } from '../../components/PdfPages/Portada/Portada';
import { printReplication } from '../../components/PdfPages/Replicaction/Replication';
import { printTitle } from '../../components/PdfPages/Title/Title';
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

    app.append( mainPdf)
}



