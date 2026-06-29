document.getElementById('convert-btn').addEventListener('click', function() {
    // 1. Grab values from the DOM
    const degreesInput = document.getElementById('degrees').value;
    const typeFrom = document.getElementById('type-from').value;
    const typeTo = document.getElementById('type-to').value;
    const resultDisplay = document.getElementById('result');

    // 2. Validate Input
    if (degreesInput === "") {
        alert("Please enter a valid number.");
        return;
    }

    const degrees = parseFloat(degreesInput);
    let convertedTemp = 0;
    let unitSymbol = "";

    // 3. Prevent redundant conversion
    if (typeFrom === typeTo) {
        convertedTemp = degrees;
    } else {
        // 4. Perform Conversions including the Kelvin challenge
        if (typeFrom === 'F') {
            if (typeTo === 'C') convertedTemp = (degrees - 32) * 5/9;
            if (typeTo === 'K') convertedTemp = (degrees - 32) * 5/9 + 273.15;
        } 
        else if (typeFrom === 'C') {
            if (typeTo === 'F') convertedTemp = (degrees * 9/5) + 32;
            if (typeTo === 'K') convertedTemp = degrees + 273.15;
        } 
        else if (typeFrom === 'K') {
            if (typeTo === 'C') convertedTemp = degrees - 273.15;
            if (typeTo === 'F') convertedTemp = (degrees - 273.15) * 9/5 + 32;
        }
    }

    // 5. Determine the correct unit symbol for the display
    if (typeTo === 'C') unitSymbol = '°C';
    else if (typeTo === 'F') unitSymbol = '°F';
    else if (typeTo === 'K') unitSymbol = 'K';

    // 6. Format to 4 decimal places (stripping trailing zeroes if unnecessary) and display
    // Using parseFloat ensures 22.0000 becomes 22, but 22.2222 stays intact
    const finalResult = parseFloat(convertedTemp.toFixed(4));
    resultDisplay.value = `${finalResult} ${unitSymbol}`;
});