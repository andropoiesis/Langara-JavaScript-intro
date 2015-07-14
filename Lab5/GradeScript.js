
function displayResult() {
    var input = document.getElementById("gradein").value;
    var message; // Message to be displayed on web page
    var output; // Obtained from converting input to a number

    if (input === "") {
        // Will display a message if there is no input percentage (empty string)
        message = "You have not entered a grade percentage. Please try again.";
    } else {
        // Convert input to a number and store in output if the input string is not empty
        output = Number(input);

        if (output < 50 && output >= 0) {
            // Will display F if the grade is 0 or greater and less than 50
            message = "Your letter grade is F";
        } else if (output >= 50 && output < 60) {
            // Will display D if the grade is 50 or greater and less than 60
            message = "Your letter grade is D";
        } else if (output >= 60 && output < 70) {
            // Will display C if the grade is 60 or greater and less than 70
            message = "Your letter grade is C";
        } else if (output >= 70 && output < 90) {
            // Will display B if the grade is 70 or greater and less than 90
            message = "Your letter grade is B";
        } else if (output >= 90 && output <= 100) {
            // Will display A if the grade is 90 or greater and 100 or less than 100.
            message = "Your letter grade is A";
        } else {
            // Will display a message if the converted number is NaN (non-numeric characters) or if the grade
            // is outside the range of 0 to 100
            message = "Your input is invalid and could not be processed. Please try again.";
        }
    }
    document.getElementById("output").innerHTML = message;
}