import './Poster.css'

export const printPoster = (parent) => {

    const mainPoster = document.createElement('main')
    mainPoster.className = 'mainposter'
    const poster = document.createElement('div')
    poster.className = 'poster'


    poster.innerHTML = `

    <h2 class='postertitle'>Scientific Poster Design</h2>
    <img class='imgposter' src='/Poster.png' alt=''>
`

mainPoster.append(poster)
parent.append(mainPoster)
}