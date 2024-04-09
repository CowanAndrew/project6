/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: 
      Date:   

      Filename: script.js
 */


      function FahrenheitToCelsius(degree) {
            return (degree - 32) / 1.8;
        }
        
        let fahrenheitTemperature = 68;
        let celsiusTemperature = FahrenheitToCelsius(fahrenheitTemperature);
        console.log(celsiusTemperature); // Output will be 20

        function CelsiusToFahrenheit(degree) {
            return degree * 1.8 + 32;
        }

        function convertToFahrenheit() {
            var cDegree = document.getElementById("cValue").value;
            var fValue = document.getElementById("fValue");
            fValue.value = CelsiusToFahrenheit(cDegree);
        }
        
        function CelsiusToFahrenheit(celsius) {
            return (celsius * 9 / 5) + 32;
        }
