// Generated by CoffeeScript 1.6.3
define(['data/source', 'cityView', 'situationView', 'lib/jquery'], function(data, cityView, situationView, $) {
  var currentCityIndex, currentSectionIndex, currentSituationIndex;
  currentSectionIndex = 0;
  currentCityIndex = 0;
  currentSituationIndex = 0;
  this.setCity = function(city) {
    cityView.template(city);
    situationView.template(city);
  };
  this.onSectionLeave = function(index, direction) {
    if (direction === 'down') {
      currentSectionIndex++;
      switch (index) {
        case 2:
          this.setCity(data[currentCityIndex]);
      }
    }
    if (direction === 'up') {
      currentSectionIndex--;
    }
  };
  this.onSlideLeave = function(anchorLink, index, slideIndex, direction) {
    if (currentSectionIndex === 1) {
      if (direction === "right") {
        currentCityIndex++;
      }
      if (direction === "left") {
        currentCityIndex--;
      }
    }
    currentCityIndex = currentCityIndex % data.length;
  };
  return this;
});
