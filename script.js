let input = document.getElementById('input')
let spans = document.querySelectorAll('span')
let bar = document.querySelector('.bar')
let random = 0





spans.forEach(span => {
    span.addEventListener('click', (e) => {
        let number = e.target.textContent
        if (number == "✖") {
            input.value = input.value.slice(0, -1)
        } else if (number == "✓") {
            showResult()
        } else {
            input.value += number
        }

    })
})


function showResult() {
    if (!input.value) return
    let accuracy = 100 - Math.abs(input.value - random)

    if(input.value>100) {
        alert('Your input should be within 100')
    }else {
        alert("Your Accuracy is " + accuracy + "%\n" + "You have enterd " + input.value + " but Acctual value is " + random)
    }
    // alert("Your Accuracy is " + accuracy + "%\n" + "You have enterd " + input.value + " but Acctual value is " + random)
    FillAccuarium()
}


function FillAccuarium() {

    input.value = null
    random = Math.floor(Math.random() * 100)

    bar.style.height = `${random}%`
}





FillAccuarium()