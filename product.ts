export class Product {
    private _id: number;
    private _name: string;
    private _type: string;
    private _price: number;
    private _quantity: number;
    private _dateCreated: string;

    constructor(id: number, name: string, type: string, price: number,quantity: number, dateCreated: string) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._quantity= quantity;
        this._dateCreated = dateCreated;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }


    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get dateCreated(): string {
        return this._dateCreated;
    }

    set dateCreated(value: string) {
        this._dateCreated = value;
    }
}