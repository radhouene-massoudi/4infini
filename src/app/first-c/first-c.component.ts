import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-c',
  templateUrl: './first-c.component.html',
  styleUrls: ['./first-c.component.css']
})
export class FirstCComponent implements OnInit {
title:String="testtsssssssssssssssssssss";
color="green"
  constructor() { }

  ngOnInit(): void {
  }
getColor(){
  if(this.color==='green'){
    return 'red';
  }else {return 'pink';}
}
}
