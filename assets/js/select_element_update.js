const COLOURS = {
    car: [
        "Dusky Rose", "Moonlit Pearl", "Lavender Mist", "Burgundy Bliss",
        "Sapphire Gleam", "Tangerine Dream", "Mystic Teal", "Golden Ember",
    ],
    van: ["White", "Navy"],
};

document.addEventListener("DOMContentLoaded", () => {
    const vehicleButtons = document.getElementsByName("vehicle-type");
    const colourSelector = document.getElementById("colour-selector");

    for (let button of vehicleButtons) {
        button.addEventListener("change", () => {
            const vehicle = button.id.split("-")[0];
            updateColourOptions(vehicle);
        });
    }

    const updateColourOptions = (vehicle) => {

        const colours = COLOURS[vehicle];
        while (colourSelector.options.length > 1) {
            colourSelector.remove(1);
        }

        for (let colour of colours) {
            const option = document.createElement("option");
            option.value = colour;
            option.text = colour;
            colourSelector.add(option, null);
        }

        const infoOption = colourSelector.options[0];
        infoOption.text = "Choose a colour for your " + vehicle;
    }

    updateColourOptions("car");
});
