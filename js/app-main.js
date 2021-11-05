// Pseudo code
// --------------------------------------------------
// 1. Sellect the HTML elements needed 
// 2. Get the start and end values from the the UI
// 3. Generate numbers from the start value to the end value
// 4. Display numbers in in the HTML table
// 5. Display all even numbers in bold
// 6. Run the Program after the button is pushed
// --------------------------------------------------


// 1. Sellect the HTML elements needed 
// -----------------------------------
// let resultTable = document.getElementById('results');
const resultsBtn = document.getElementById('btn-submit');


// 2. Get the start and end values from the the UI
// --------------------------------------------------
function getValues() {

    // Geting the values from start value and parse int
    let startNumValue = document.getElementById('start-value').value;

    // Geting the values from End value and parse int
    let endNumValue = document.getElementById('end-value').value;

    // Parse int on both inputs
    startNumValue = parseInt(startNumValue);
    endNumValue = parseInt(endNumValue);

    // Catch error ut the user entering anything other then a interger 
    if (Number.isInteger(startNumValue) && Number.isInteger(endNumValue)) {

        // 3. Generate numbers from the start value to the end value
        // ---------------------------------------------------------
        let number = 0;
        let tmpRows = '';

        for (let i = startNumValue; i <= endNumValue; i++) {

            number = i;
            console.log(number);

            // 4. Display numbers in in the HTML table 
            if (number % 2 == 0) {

                // 5. Display all even numbers in bold
                tmpRows += `<tr><td><b>${number}</b></td></tr>`;
                document.getElementById('results').innerHTML = tmpRows;
            } else {

                // Displaying numbers in in the HTML table 
                tmpRows += `<tr><td>${number}</td></tr>`;
                document.getElementById('results').innerHTML = tmpRows;
            }
        }
        return number;

    } else {
        alert("Please Use Number only");
    }
}


// 6. Run the Program after the button is pushed
// ----------------------------------------------
resultsBtn.addEventListener('click', () => {
    getValues();
})