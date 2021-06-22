import { IRunningAuction, ICarOnSaleClient } from "../interface/ICarOnSaleClient";
import {injectable} from "inversify";
import "reflect-metadata";
import axios from 'axios';
import { config } from 'dotenv'

config();

@injectable()
export class CarOnSaleClient implements ICarOnSaleClient {

    public constructor() {
    }

    public async getRunningAuctions(): Promise<Promise<IRunningAuction>[] | Record<any, any>> {

        // Required credentials stored in the .env file
        // The 'buyer credentials (mail ID and password) are used to extract the token by Postman'
        const userId = process.env.USER_ID;
        const token = process.env.TEST_TOKEN;
    
        // The credentials are included as userId and authtoken in the headeers as specified in the Swagger documentation
        const apiHeaders = {
            'Content-Type': 'application/json',
            'userId': `${userId}`,
            'authtoken': `${token}`
        };

        const url = 'https://api-core-dev.caronsale.de/api/v2/auction/buyer/'

        const fetchByAxios = async() => {

            try {
                const apiResponse = await axios.get(url, {headers: apiHeaders})
                                               .then(res => res)
                                               .catch(err => err.message);

                // the data property is found on the successful API response by Axios
                if(apiResponse.data) {
                    return {success: true, count: apiResponse.data.items.length, auctions: apiResponse.data.items};
                } else {
                    // a failed API response is returned as an error
                    return {success: false, error: apiResponse};
                }
            } catch(e) {
                // Any other error is handled here
                return {success: false, error: e.message};
            }
        }
        const result: Record<any, any> =  await fetchByAxios();

        // trimmedAuctions is used to reduce the object size of each auction to only 'numBids, minimumRequiredAsk, and others
        let trimmedAuctions: Promise<IRunningAuction> | Record<any, any> = {};

        // WHen the response has valid auctions
        if(Array.isArray(result.auctions)) {
            trimmedAuctions = result.auctions.map((item: IRunningAuction) => ({
                numBids: item.numBids,
                minimumRequiredAsk: item.minimumRequiredAsk,
                currentHighestBidValue: item.currentHighestBidValue,
                averageAuctionProgressInPercent: (item.currentHighestBidValue / item.minimumRequiredAsk) * 100
            }));
            console.log({ numberOfAuctions: result.auctions.length, auctions: trimmedAuctions });
            return { numberOfAuctions: result.auctions.length, auctions: trimmedAuctions };
        } else {
            // WHen the response has an error property
            console.log(result);
            return result;
        }
    }

}