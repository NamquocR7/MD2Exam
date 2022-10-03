import {Product} from "./product";
import {ProductManager} from "./productManager";

// @ts-ignore
let input = require('readline-sync');

let listProduct: ProductManager = new ProductManager();

function mainMenu() {
    let menu = `-----Menu-----\n1.Hien thi danh sach hang hoa\n2.Tim kiem mat hang\n3.Them moi mat hang\n4.Chinh sua thong tin hang hoa\n5.Xoa hang`
    let choice;
    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                showListProduct();
                break;
            case 2:
                findProduct();
                break;
            case 3:
                addProduct();
                break;
            case 4:
                editProduct();
                break;
            case 5:
                deleteProduct();
                break;
        }
    } while (choice)
}

function addProduct() {
    let id = +input.question('Nhap id san pham: ');
    let name = input.question('Nhap te san pham: ');
    let type = input.question('Nhap loai hang: ');
    let price = +input.question('Nhap gia: ');
    let quantity = +input.question('Nhap so luong: ');

    let time = new Date();
    let today = `${time.getDate()}/${time.getMonth() + 1}`;

    let product = new Product(id, name, type, price, quantity, today);
    listProduct.add(product);
}

function findProduct() {
    let id = +input.question('Nhap id san pham ban muon tim: ');
    if (listProduct.findById(id) == -1) {
        console.log('---Khong co du lieu phu hop---')
    }
    else {
        console.log(listProduct.showProductFind(id));
    }
}

function showListProduct() {
    console.log(listProduct.showAll());
}

function deleteProduct() {
    let id = +input.question('Nhap id san pham ban muon xoa: ');
    if(listProduct.findById(id) == -1) {
        console.log('---Khong ton tai mat hang can xoa---')
    }
    else {
        listProduct.delete(id);
    }
}

function editProduct() {
    let id = +input.question('Nhap id san pham ban muon sua: ');

    if (listProduct.findById(id) == -1) {
        console.log('------Khong ton tai mat hang can sua-----')
    } else {
        console.log('Ban can nhap nhung thong tin sau de sua san pham')

        let name = input.question('Nhap ten san pham: ');
        let type = input.question('Nhap loai san pham: ');
        let price = +input.question('Nhap gia san pham: ');
        let quantity = +input.question('Nhap so luong san pham: ');

        let time = new Date();
        let today = `${time.getDate()}/${time.getMonth() + 1}`;

        let newProduct = new Product(id, name, type, price, quantity, today);
        listProduct.edit(id, newProduct);
    }
}

mainMenu();

