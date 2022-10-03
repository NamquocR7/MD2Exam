"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.listProduct = [];
    }
    ProductManager.prototype.add = function (t) {
        this.listProduct.push(t);
    };
    ProductManager.prototype["delete"] = function (id) {
        var index = this.findById(id);
        if (this.findById(id) == -1) {
            return ('<<<<<Không tồn tại mã hàng>>>>>');
        }
        else {
            this.listProduct.splice(index, 1);
        }
    };
    ProductManager.prototype.edit = function (id, t) {
        var index = this.findById(id);
        this.listProduct[index] = t;
    };
    ProductManager.prototype.findById = function (id) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (id == this.listProduct[i].id) {
                return i;
            }
        }
        return -1;
    };
    ProductManager.prototype.showAll = function () {
        if (this.listProduct.length == 0) {
            return ('<<<<<không có hàng>>>>>');
        }
        else {
            return this.listProduct;
        }
    };
    ProductManager.prototype.showProductFind = function (id) {
        var index = this.findById(id);
        return this.listProduct[index];
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
