import './Title.css'

export const printTitle = (text, text2, img, parent) => {
    const titleDiv = document.createElement('div')
    titleDiv.className = 'titleDiv'

    const title = document.createElement('h2')
    title.textContent = text;
    title.className = 'title'

    const title2 = document.createElement('h2')
    title2.textContent = text2;
    title2.className = 'title'

    const imagen = document.createElement('img')
    imagen.className = 'titleImagen'
    imagen.src = img


    titleDiv.append(title, title2, imagen)
    parent.append(titleDiv)

}