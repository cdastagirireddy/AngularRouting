import { Component, OnInit } from '@angular/core';
import {Products} from "../../models/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  googles = [
    new Products(101,'Pixel 2', 53000,'Google'),
    new Products(102,'Pixel 3', 95000,'Google')
  ]

  public backToProducts(){
    this._router.navigate(['products']);
  }

}
