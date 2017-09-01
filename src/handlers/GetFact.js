const vars = require('./constants');

module.exports = function () {
  const factIndex = Math.floor(Math.random() * vars.prestonFacts.length);
  const randomFact = vars.prestonFacts [factIndex];
  const anotherFact = 'Would you like another fact about Preston?';
  this.emit(':ask', `${randomFact}, ${anotherFact}`, anotherFact);
};