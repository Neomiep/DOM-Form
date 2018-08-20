const validate = function () {
    let name = document.getElementById("name1").value
    let salary = document.getElementById("salary1").value
    let bDay = document.getElementById("bDay1").value
    let phoneNum = document.getElementById("phoneNum1").value
    const miss = document.getElementById("text")
    const displayMessage = function(text,colorInput){
        miss.style.color = colorInput
        miss.style.fontSize = "15px"
        miss.innerHTML = text
    } 
    const red = "red"
    if (name.length ==0) {
        text = "Name is missing!"
        displayMessage(text,red)
    }
    else if(name.length <= 2) {
        text = "Name must be longer than two letters!"
        displayMessage(text,red)
    }
    else if (salary < 10000 || salary > 16000 ) {
        text = "Your desired salary must be between 10,000 and 16,000!!"
        displayMessage(text,red)
    }
    else if (!bDay) {
        text = "Please fill in your birthday!"
        displayMessage(text,red)

    }
    else if (phoneNum.toString().length !== 10) {
        text = "Your phone number must have 10 digits!"
        displayMessage(text,red)

    }
    else{
        color = "green"
        text = "Congratulations! Your form has been submitted."
        displayMessage(text,color)
    }

}