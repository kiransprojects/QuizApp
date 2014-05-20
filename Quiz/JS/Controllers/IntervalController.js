App.IntervalController = Ember.ObjectController.extend({
  secondsBinding: 'clock.pulse',
  fullSecond: function () {
    return (this.get('seconds') % 1 === 0);
  }.property('seconds'),
  quarterSecond: function () {
    return (this.get('seconds') % 1 === 1/4);
  }.property('seconds'),
  halfSecond: function () {
    return (this.get('seconds') % 1 === 1/2);
  }.property('seconds'),
  threeQuarterSecond: function () {
    return (this.get('seconds') % 1 === 3/4);
  }.property('seconds')
});
