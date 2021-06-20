import { Component, OnInit } from '@angular/core';
import { data } from '../data';
import { Auction } from '../types/auction';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {
  auctions: Auction[] = [];

  constructor() { }

  ngOnInit(): void {
    this.auctions = data;
    console.log(this.auctions);
  }

}
