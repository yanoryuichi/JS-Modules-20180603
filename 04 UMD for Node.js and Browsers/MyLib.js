(function (root, factory) {
    // AMD (Browsers)
    if (typeof define === 'function' && define.amd) {
        define(['MyLib'], factory);
    // CommonJS (Node.js)
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(root);
    // Browser Global (root is window)
    } else {
        root.MyLib = factory(root.MyLib);
    }
}(this, function () {
    var api = {};
    api.add = function (x, y) {
        return x + y;
    };
    return api;
}));