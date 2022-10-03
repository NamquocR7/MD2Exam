import {Manage} from "./service";
import {Product} from "./product";

export class ProductManager implements Manage<Product> {
    listProduct: Product[] = [];

    add(t: Product) {
        this.listProduct.push(t);
    }

    delete(id: number) {
        let index = this.findById(id);
        if(this.findById(id) == -1){
            return ('<<<<<Không tồn tại mã hàng>>>>>');
        }
        else {
            this.listProduct.splice(index, 1);
        }
    }

    edit(id: number, t: Product) {
        let index = this.findById(id);
        this.listProduct[index] = t;
    }

    findById(id: number) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (id == this.listProduct[i].id) {
                return i;
            }
        }
        return -1;
    }

    showAll() {
        if (this.listProduct.length == 0) {
            return ('<<<<<không có hàng>>>>>');
        } else {
            return this.listProduct;
        }
    }

    showProductFind(id: number) {
        let index = this.findById(id);
        return this.listProduct[index];
    }
}