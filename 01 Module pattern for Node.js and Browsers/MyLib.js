function MyLib() {}

MyLib.prototype.add = function (x, y) {
    return x + y;
}

this.MyLib = MyLib;