const convertToCelsius = function(temp) {
  return parseFloat((Math.round((temp-32)*50/9)/10).toFixed(1));
};

const convertToFahrenheit = function(temp) {
  return parseFloat((Math.round(18*temp+320)/10).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
