const stars = document.querySelectorAll('i');
const text = document.querySelector('.text')
console.log(stars)
stars.forEach((item,index) =>{
    item.addEventListener('click',()=>{
        console.log(index)
        getFullStars(index);
        changeTextForStar(index);

    })

})
//function for changing empty stars into full ones
const getFullStars = (nr) => {
    for (let i = 0; i <= nr; i++) {

        stars[i].textContent = "★"
        stars[i].style.color = "yellow"

    }
    for (let i = nr+1; i < stars.length ; i++) {
        stars[i].textContent = "☆"
        stars[i].style.color = "#222"
    }
}
//function for text on click
const changeTextForStar = (nr) => {
    if(nr === 0){
        text.textContent = "Groaznic de rau!"

    }else if(nr === 1 ){
        text.textContent = "Rau!"
    }else if(nr === 2 ){
        text.textContent = "Acceptabil!"
    }else if(nr === 3 ){
        text.textContent = "Bine!"
    }else if(nr === 4 ){
        text.textContent = "Excelent!"
    }
}