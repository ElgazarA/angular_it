import { Component } from '@angular/core';
import { Store } from '../models/store';
import { IProducts } from '../models/i-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  prod:Store = new Store("Ahmed Hani",[],"assets/images/four.avif")
  ClientName:string="";
  ProductList:IProducts[]=[];
  apiData:string[]=[];
  buyMode:boolean = false;
  productsToShow:IProducts[] =[];
  //for heigligt dirctive custom 
  color = 'pink';
  constructor() { 
    this.getApiData();
    this.apiData.length = 10;
    this.ProductList=[
      {
          id: 1,
          name: "Product 1",
          price: 10.99,
          quantity: 20,
          image: "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg",
          categoryID: 1,
          material: "Cotton"
      },
      {
          id: 2,
          name: "Product 2",
          price: 19.99,
          quantity: 0,
          image: "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
          categoryID: 2,
          material: "Wool"
      },
      {
          id: 3,
          name: "Product 2",
          price: 19.99,
          quantity: 1,
          image: "https://m.media-amazon.com/images/M/MV5BOWM4NTY2NTMtZDZlZS00NTgyLWEzZDMtODE3ZGI1MzI3ZmU5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg",
          categoryID: 2,
          material: "Wool"
      },
      {
          id: 4,
          name: "Product 2",
          price: 19.99,
          quantity: 15,
          image: "https://m.media-amazon.com/images/M/MV5BOWM4NTY2NTMtZDZlZS00NTgyLWEzZDMtODE3ZGI1MzI3ZmU5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg",
          categoryID: 3,
          material: "Wool"
      },
      {
          id: 5,
          name: "Product 2",
          price: 19.99,
          quantity: 0,
          image: "https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
          categoryID: 3,
          material: "Wool"
      },
      {
          id: 6,
          name: "Product 2",
          price: 19.99,
          quantity: 15,
          image: "https://m.media-amazon.com/images/M/MV5BY2UwYWI3MTktM2MxNC00MjRhLTlkMWEtYTNjMjRkOTIwOTkyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
          categoryID: 4,
          material: "Wool"
      },
      {
          id: 7,
          name: "Product 10",
          price: 29.99,
          quantity: 30,
          image: "https://m.media-amazon.com/images/M/MV5BYjJiMjE1ODUtOWEwOS00N2YyLWE4YmQtOWNmZTA2Y2I4OWVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          categoryID: 4,
          material: "Leather"
      }
  ];
  this.productsToShow = this.ProductList;
}

fireBuyProd(){
  this.buyMode=!this.buyMode;
  console.log(this.buyMode);
}

set productsFilter(categoryID:number){
  console.log("test")
   this.productsToShow = this.filterProductByCategory(categoryID)
}

filterProductByCategory(catId:number){
    return this.ProductList.filter(prod=> prod.categoryID == catId);
}

quantity_after_buy(id:number){
    for(let i of this.ProductList){
      if(i.id == id){
        i.quantity = i.quantity - 1;
      }  
    }      
    this.productsToShow = this.ProductList;
}

async getApiData() {
  try {
    const response = await fetch('https://api.sampleapis.com/movies/horror');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    this.apiData = await response.json();
    console.log(this.apiData); // You can do something with the data here
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

}
