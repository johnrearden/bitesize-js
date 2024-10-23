
// Event listener fires when the HTML content has loaded.
document.addEventListener("DOMContentLoaded", () => {

    const secret_key = process.env.API_KEY;
    const secret_variable = process.env.API_VARIABLE;
    console.log('secrets', secret_key, secret_variable);

    const inputs = document.getElementsByClassName("base-input");
    for (let input of inputs) {

        // Add an event listener to each input in turn
        input.addEventListener('input', (e) => {

            // Look up the base that this particular input (e.target) is using, and convert to int
            const base = parseInt(e.target.getAttribute('data-base'));

            // Look up the valid digits for this base from the element's data attr.
            const validChars = e.target.getAttribute('valid-chars');
            
            // Turn the current value of the input into an array of characters
            const currentText = e.target.value.split("");

            // Iterate through this array, checking if the characters the user has typed
            // are valid, and if not, setting them to the empty string
            for (let i = 0; i < currentText.length; i++) {

                const element = currentText[i];

                const isValid = validChars.includes(element);

                if (!isValid) {
                    currentText[i] = "";
                }
            }

            // reassemble a string from the valid characters typed by the user
            const newValue = currentText.join("");
            const intValue = parseInt(newValue, base);

            // Update all the inputs with their new values
            updateAllInputs(intValue);
        })
    }

    /**
     * Accepts an intValue and iterates through the inputs, converting the intValue
     * into a string representation of the number in each base. Updates the input
     * values
     * 
     * @param {Integer} intValue 
     */
    const updateAllInputs = (intValue) => {

        if (isNaN(intValue)) {
            intValue = 0;
        }
        
        for (let input of inputs) {
            const base = parseInt(input.getAttribute('data-base'));
            const newValue = intValue.toString(base);
            input.value = newValue;
        }
    }

});