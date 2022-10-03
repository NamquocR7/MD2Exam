"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, type, price, quantity, dateCreated) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._quantity = quantity;
        this._dateCreated = dateCreated;
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        set: function (value) {
            this._quantity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "dateCreated", {
        get: function () {
            return this._dateCreated;
        },
        set: function (value) {
            this._dateCreated = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
