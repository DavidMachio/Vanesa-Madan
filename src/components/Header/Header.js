import './Header.css'

const app = document.querySelector('#app')

export const printHeader = () => {

    const header = document.createElement('header')
    header.className = 'header'
    const h1 = document.createElement('h1');
    h1.textContent = 'Vanesa Madan'
    header.append(h1)

    app.append(header)

}