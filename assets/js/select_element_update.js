// The possible colours for each type of vehicle
const COLOURS = {
    car: [
        "Dusky Rose", "Moonlit Pearl", "Lavender Mist", "Burgundy Bliss",
        "Sapphire Gleam", "Tangerine Dream", "Mystic Teal", "Golden Ember",
    ],
    van: ["White", "Navy"],
};

// Event listener fires when the HTML content has loaded.
document.addEventListener("DOMContentLoaded", () => {

    // Get references to the vehicle radio buttons and the select element
    const vehicleButtons = document.getElementsByName("vehicle-type");
    const colourSelector = document.getElementById("colour-selector");

    // Add an event listener, listening for the 'change' event, to each button
    for (let button of vehicleButtons) {
        button.addEventListener("change", () => {
            const vehicle = button.id.split("-")[0];
            updateColourOptions(vehicle);
        });
    }

    /**
     * A function that accepts a vehicle and populates the select options
     * 
     * @param {string} vehicle 
     */
    const updateColourOptions = (vehicle) => {

        // Remove all but the first (informational) option
        const colours = COLOURS[vehicle];
        while (colourSelector.options.length > 1) {
            colourSelector.remove(1);
        }

        // Iterate through the list of colours, and add a new option to the
        // select element for each one.
        for (let colour of colours) {
            const option = document.createElement("option");
            option.value = colour;
            option.text = colour;
            colourSelector.add(option, null);
        }

        // Update the vehicle name in the first option (the info option)
        const infoOption = colourSelector.options[0];
        infoOption.text = "Choose a colour for your " + vehicle;
    }

    // Run our function when the page loads to first populate the select element
    updateColourOptions("car");
});
