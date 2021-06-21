import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service';
import { Auction } from '../types/auction';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})

export class AuctionsComponent implements OnInit {
  auctions: Auction[] = [];
  auctionsUrl:string = 'public/preview/auctions';
  getAuctionsError = ''

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
       this.auctionService.getAuctions(this.auctionsUrl).subscribe(auctions => {
      // console.log(auctions);
      if(auctions) {
        this.auctions = auctions;
      } else {
        this.getAuctionsError = 'Auctions not found'
      }
      return;
    });
  }

}
