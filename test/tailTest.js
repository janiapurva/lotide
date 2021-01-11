const assert = require('chai').assert;
const tail = require('../tail');



describe('tail', function() {
  it('returns ["Lighthouse", "Labs"] from ["Hello", "Lighthouse", "Labs"]', function() {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns ["Man", "Labs"] from ["Yo Yo", "Man", "Labs"]', function() {
    assert.deepEqual(tail(["Yo Yo", "Man", "Labs"]), ["Man", "Labs"]);
  });

  
});