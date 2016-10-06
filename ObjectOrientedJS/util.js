(function () {
    var users = [0, 1, 2, 3, 4, 5, 6];

    Array.prototype.even = function () {
        var result = [];
        for (var i = 0; i < this.length; i++) {
            if (i % 2 == 0) {
                result.push(this[i]);
            }
        }
        return result;
    };
    console.log(users.even());

})();
