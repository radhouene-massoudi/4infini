import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
msg='bonjour';
color='red';
ecole="esprit";
listProdcut=[
  {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
  {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
  ];
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  showMsg(){
    alert("4infi1");
  }

  test(){
    alert('bonjour');
  }
  changeColor(){
    this.color="blue";
  }
}
