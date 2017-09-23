module.exports = function () {
  const whichPreston = this.event.request.intent.slots.which.value;

  if (!whichPreston) {
    this.emit(':ask', 'Which Preston do you mean?', 'I know facts about Preston, Lancashire as well as Preston the Asteroid');
  } 

  this.attributes['whichPreston'] = whichPreston
  this.emit('GetFact');;
};
