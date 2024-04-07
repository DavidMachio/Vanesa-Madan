import './Review.css'

export const printReview = (type, titleReview, medio, parent, color, img1) => {
    const divReviews = document.createElement('div');
    divReviews.className = 'divReviews'

    divReviews.innerHTML = 
    `<div class='izquierdo'>
        <div class='labelReview ${color}'></div>
        <div class='reviewDiv'>
            <h3 class='review'>${type}</h3>
            <h2 class='titleReview'>${titleReview}</h2>
        </div>
    </div>
    <div class='derecho'>
    <h3 class='medio'>${medio}</h3>
    <img class='logomedio' src='${img1}' alt=''>
    </div>
    `
    

    parent.append(divReviews)

}