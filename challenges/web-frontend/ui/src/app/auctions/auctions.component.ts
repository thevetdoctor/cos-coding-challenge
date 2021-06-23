import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuctionService } from '../auction.service';
import { Auction } from '../types/auction';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})

export class AuctionsComponent implements OnInit {
  auctions: Auction[] = [];
  auctionsUrl:string = 'auction/buyer/';
  getAuctionsError = '';
  userId:string = window.localStorage.getItem('userId') || '';
  authtoken:string = window.localStorage.getItem('authtoken') || '';
  httpOptions = {
    'Content-Type': 'application/json',
    'userId': `${this.userId}`,
    'authtoken': `${this.authtoken}`
}

@Output() updatedUserId: EventEmitter<string> = new EventEmitter<string>();

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    if(this.userId.includes('dealer')) {
      this.auctionsUrl = `auction/seller/${this.userId}/running`
    }
    console.log(this.userId);
    localStorage.setItem('userId', this.userId);
    this.updatedUserId.emit(this.userId);

    this.auctionService.getAuctions(this.auctionsUrl, this.httpOptions).subscribe(auctions => {
      // console.log(auctions);
      if(auctions.items) {
        this.auctions = auctions.items;
      } else {
        // console.log(auctions);
        this.getAuctionsError = 'Auctions not found, try again'
      }
      return;
    });
  }

}
