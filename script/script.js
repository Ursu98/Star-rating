//JS este facut de domnishoara Corina
const stars = document.querySelectorAll('i');
const text = document.querySelector('.text')
console.log(stars)
stars.forEach((item, index) => {
    item.addEventListener('click', () => {
        console.log(index)
        getFullStars(index);
        changeTextForStar(index);
        changeColor(stars, item, index)

    })

})
//function for changing empty stars into full ones
const getFullStars = (nr) => {
    for (let i = 0; i <= nr; i++) {

        stars[i].textContent = "★"

    }
    for (let i = nr + 1; i < stars.length; i++) {
        stars[i].textContent = "☆"
    }
}
//function for text on click
const changeTextForStar = (nr) => {
    if (nr === 0) {
        text.textContent = "Groaznic de rau!"

    } else if (nr === 1) {
        text.textContent = "Rau!"
    } else if (nr === 2) {
        text.textContent = "Acceptabil!"
    } else if (nr === 3) {
        text.textContent = "Bine!"
    } else if (nr === 4) {
        text.textContent = "Excelent!"
    }
}
//function for changing color
const changeColor = (arr, item, i) => {
    console.log(arr);
    console.log(item);
    console.log(i);
    if (i === 0) {
        for (let j = 0; j < arr.length; j++) {
            if (j <= i) {
                arr[j].style.color = "red"
                arr[j].style.textShadow = "2px 4px 20px red"
                arr[j].classList.add("animated")
            } else {
                arr[j].style.color = "#222"
                arr[j].style.textShadow = "none";
                arr[j].classList.remove("animated")
            }

        }
    } else if (i === 1 || i ===2 ) {
        for (let j = 0; j < arr.length; j++) {
            if (j <= i) {
                arr[j].style.color = "orange"
                arr[j].style.textShadow = "2px 4px 20px orange"
                arr[j].classList.add("animated")
            } else {
                arr[j].style.color = "#222"
                arr[j].style.textShadow = "none";
                arr[j].classList.remove("animated")
            }

        }
    }else if (i === 3 || i ===4 ) {
        for (let j = 0; j < arr.length; j++) {
            if (j <= i) {
                arr[j].style.color = "yellow"
                arr[j].style.textShadow = "2px 4px 20px yellow"
                arr[j].classList.add("animated")
            } else {
                arr[j].style.color = "#222"
                arr[j].style.textShadow = "none";
                arr[j].classList.remove("animated")
            }

        }
    }
}
