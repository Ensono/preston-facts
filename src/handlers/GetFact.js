const vars = require('./constants');

function getType(which){
  if(which.includes('asteroid')){
    return 'asteroid';
  }
  return 'preston';
}

module.exports = function () {
  const whichPreston = this.attributes['whichPreston'] || this.event.request.intent.slots.which.value;

  if (!whichPreston) {
    this.emit('WhichPreston');
  } 

  const factType = getType(whichPreston);
  const randomFacts = vars[`${factType}Facts`]; 
  const factIndex = Math.floor(Math.random() * randomFacts.length);
  const randomFact = randomFacts[factIndex];
  const anotherFact = 'Would you like another fact about Preston?';
  this.emit(':ask', `${randomFact}, ${anotherFact}`, anotherFact);
};