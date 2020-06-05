import { Component, OnInit } from '@angular/core';
import {Products} from "../../models/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  apples = [
    new Products(101,'iPhone 8', 60000,'Apple'),
    new Products(102,'iPhone 10', 98000,'Apple')
  ]

  public backToProducts(){
    this._router.navigate(['products']);
  }

}
