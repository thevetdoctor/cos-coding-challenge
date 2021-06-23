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

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    if(this.userId.includes('dealer')) {
      this.auctionsUrl = `auction/seller/${this.userId}/running`
    }
    console.log(this.userId);
    localStorage.setItem('userId', this.userId);

    if(!this.userId) {
      this.getAuctionsError = 'Login required';
    } else {
        this.auctionService.getAuctions(this.auctionsUrl, this.httpOptions).subscribe(auctions => {
          if(auctions.items) {
          this.auctions = auctions.items;
        } else {
          this.getAuctionsError = 'Auctions not found, try again'
        }
        return;
      });
    }
  }

}
