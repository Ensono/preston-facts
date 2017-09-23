const vars = require('../constants');

function getType(which){
  if(which.includes('asteroid')){
    return 'asteroid';
  }
  return 'preston';
}

module.exports = function () {
  const slot = this.event.request.intent.slots.which;
  const whichPreston = (slot ? slot.value : null) || this.attributes['whichPreston'];

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