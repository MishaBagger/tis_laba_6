// module.exports.multiply = function (x, y) {
//     return x * y;
// };
module.exports.multiply = function (x, y) {
    return x * y;
};
module.exports.add = function (x, y) {
    return x + y;
};

module.exports.multiplyAsync = function (a, b, callback) {
    setTimeout(function () {
        callback(a * b);
    }, 1000);
};

var assert = require('assert');
var operations = require('./operations');

// it('should multiply two numbers', function () {
//     var expected = 15;
//     var result = operations.multiply(3, 5);
//     assert.equal(result, expected);
// });

it('should multiply two numbers', function () {
    var expected = 15;
    var result = operations.multiply(3, 5);
    assert.notEqual(result, expected);
});
