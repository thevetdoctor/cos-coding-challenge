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

        const userId = 'salesman@random.com';
        const token = process.env.TEST_TOKEN;
    
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
                if(apiResponse.data) {
                    // console.log(apiResponse)
                    return {success: true, count: apiResponse.data.items.length, auctions: apiResponse.data.items};
                } else {
                    // console.log(apiResponse)
                    return {success: false, error: apiResponse};
                }
            } catch(e) {
                return {success: false, error: e.message};
            }
        }
        const result =  await fetchByAxios();
        console.log(result);
        return result;
    }

}