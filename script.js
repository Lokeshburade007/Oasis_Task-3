
// Auto Text Type 
var type = new Typed(".auto-input", {
    strings: ["Celsius into Fahrenheit.", "Fahrenheit  into Celsius."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});


const calTemp = () => {
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    //Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }
    //Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if( valueTemp == 'cel'){
        document.getElementById('resultbox').innerHTML = celToFah (inputTemp) + 
        "&#176; Fahrenheit" ;

    }
    else{
        document.getElementById('resultbox').innerHTML = fahToCel(inputTemp) + 
        "&#176; Celsius";
    }
}


