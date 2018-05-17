import {Component} from '@angular/core';

export class Product {
    id: number;
    name: string;
    image: string;
}

const ICONPATH: string = "/static/images/products/";
import './styles.css';

const Products: Product[] = [
    {id: 1, name: 'Apple', image: ICONPATH + 'apple.svg'},
    {id: 2, name: 'Aubergine', image: ICONPATH + 'aubergine.svg'},
    {id: 3, name: 'Bacon', image: ICONPATH + 'bacon.svg'},
    {id: 4, name: 'Banana', image: ICONPATH + 'banana.svg'},
    {id: 5, name: 'Steak', image: ICONPATH + 'steak.svg'},
    {id: 6, name: 'Bread', image: ICONPATH + 'bread.svg'},
    {id: 7, name: 'Broccoli', image: ICONPATH + 'broccoli.svg'},
    {id: 8, name: 'Orange', image: ICONPATH + 'orange.svg'},
    {id: 9, name: 'Pasta', image: ICONPATH + 'pasta.svg'},
    {id: 10, name: 'Boiled', image: ICONPATH + 'boiled.svg'},
];

@Component({
    selector: 'shop',
    template: require('./template.html'),
})
export class ProductsComponent {
    products = Products;
    selected: Product;

    onClick(product: Product): void {
        this.selected = product;
    }
}


