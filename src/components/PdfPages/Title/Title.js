import './Title.css'

export const printTitle = (text, img, parent) => {
    const titleDiv = document.createElement('div')
    titleDiv.className = 'titleDiv'

    const title = document.createElement('h2')
    title.textContent = text;
    title.className = 'title'

    const imagen = document.createElement('img')
    imagen.className = 'titleImagen'
    imagen.src = img


    titleDiv.append(title, imagen)
    parent.append(titleDiv)

}