
const assert = require('chai').assert;
const middle = require("../middle");



describe('middle', function() {
  it('returns [2,3]  from [1, 2, 3, 4]', function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2 ,3]);
  });

  it('returns [] from [1]', function() {
    assert.deepEqual(middle([1]), []);
  });

  it('returns [3, 4] from [1, 2, 3, 4, 5, 6]', function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });

  
});
