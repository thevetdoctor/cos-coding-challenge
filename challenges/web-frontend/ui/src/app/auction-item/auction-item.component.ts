import { Component, Input, OnInit } from '@angular/core';
import { Auction } from '../types/auction';
import { timeFormat } from '../utils';

@Component({
  selector: 'app-auction-item',
  templateUrl: './auction-item.component.html',
  styleUrls: ['./auction-item.component.css']
})
export class AuctionItemComponent implements OnInit {
@Input() auction: Auction = new Auction;
  timeLeft: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.timeLeft = timeFormat(this.auction.remainingTimeInSeconds)
  }

}
