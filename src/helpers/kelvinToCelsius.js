import React from 'react';

// export default (kelvin) => `${Math.round(kelvin - 273.15)}° C`;
//snellere variant met arrow functie
function KelvinToCelsius(kelvin) {
    return `${Math.round(kelvin - 273.15)}° C`;

}

export default KelvinToCelsius;