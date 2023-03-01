// Function for calculating grades
const calculate = () => {

    // Getting input from user into height variable.
    let OS = document.querySelector("#OS").value;
    let php = document.querySelector("#php").value;
    let Cplusplus = document.querySelector("#Cplusplus").value;
    let Java = document.querySelector("#Java").value;
    let grades = "";
    
    // Input is string so typecasting is necessary. */
    let totalgrades =
        parseFloat(OS) +
        parseFloat(php) +
        parseFloat(Cplusplus) +
        parseFloat(Java);
    
    // Checking the condition for the providing the
    // grade to student based on percentage
    let percentage = (totalgrades / 400) * 100;
    if (percentage <= 100 && percentage >= 80) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }
    if (OS == "" || php == ""
                || Cplusplus == "" || Java == "") {
        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
    } else {
        if (percentage >= 39.5) {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` Out of 400 your total is ${totalgrades}
            and percentage is ${percentage}%. <br>
            Your grade is ${grades}. You are Pass. `;
        } else {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` Out of 400 your total is ${totalgrades}
            and percentage is ${percentage}%. <br>
            Your grade is ${grades}. You are Fail. `;
        }
    }
    };
    