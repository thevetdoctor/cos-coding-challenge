import { IAuction, ICarOnSaleClient } from "../interface/ICarOnSaleClient";
import {injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class CarOnSaleClient implements ICarOnSaleClient {

    public constructor() {
    }
    auctions = []

    public getRunningAuctions(): Promise<IAuction>[] {
        console.log(this.auctions);
        return this.auctions;
    }

}