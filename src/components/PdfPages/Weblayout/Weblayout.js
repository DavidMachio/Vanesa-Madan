import './Weblayout.css'

export const printWeblayout = (parent) => {

    const mainWeblayout = document.createElement('main')
    mainWeblayout.className = 'mainweblayout'
    const weblayout = document.createElement('div')
    weblayout.className = 'weblayout'


    weblayout.innerHTML = `

    <h2 class='weblayouttitle'>Web layout</h2>
    <img class='imgweblayout' src='/Weblayout.png' alt=''>
`

mainWeblayout.append(weblayout)
parent.append(mainWeblayout)
}