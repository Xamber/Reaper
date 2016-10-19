import { Component } from '@angular/core';

export class Product {
  id: number;
  name: string;
  calories: number;
  image: string;
}

const ICONPATH: string = "/static/images/diet/";

const Products: Product[] = [
    {id: 1,  name: 'Apple',     calories: 30, image: ICONPATH + 'apple.svg'},
    {id: 2,  name: 'Aubergine', calories: 30, image: ICONPATH + 'aubergine.svg'},
    {id: 3,  name: 'Bacon',     calories: 30, image: ICONPATH + 'bacon.svg'},
    {id: 4,  name: 'Banana',    calories: 30, image: ICONPATH + 'banana.svg'},
    {id: 5,  name: 'Boiled',    calories: 30, image: ICONPATH + 'boiled.svg'},
    {id: 6,  name: 'Bread',     calories: 30, image: ICONPATH + 'bread.svg'},
    {id: 7,  name: 'Broccoli',  calories: 30, image: ICONPATH + 'broccoli.svg'},
    {id: 8,  name: 'Orange',    calories: 30, image: ICONPATH + 'orange.svg'},
    {id: 9,  name: 'Pasta',     calories: 30, image: ICONPATH + 'pasta.svg'},
    {id: 10, name: 'Steak',     calories: 30, image: ICONPATH + 'steak.svg'}
];



@Component({
    selector: 'diet',
    template: require('./template.html'),
    styles: [require('./styles.css')]
})
export class DietComponent {
    products = Products;
    selected: Product;

    onClick(product: Product): void {
      this.selected = product;
    }
}
