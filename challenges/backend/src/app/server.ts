import express, { Application, Request, Response } from 'express';
import axios from 'axios';
import { config } from 'dotenv';

config();

const server: Application = express();

server.get('/', async (_req: Request, res: Response) => {
 
    const userId = 'salesman@random.com';
    const token = process.env.TEST_TOKEN;
    
    const apiHeaders = {
        'Content-Type': 'application/json',
        'userId': `${userId}`,
        'authtoken': `${token}`
    };

    const url = 'https://api-core-dev.caronsale.de/api/v2/auction/buyer/'
   try {
       const apiResponse = await axios.get(url, {headers: apiHeaders})
                                .then(res => res)
                                .catch(err => err.message);
        if(apiResponse.data) {
            return res.status(200).json({success: true, count: apiResponse.data.items.length, auctions: apiResponse.data.items});
        } else {
            return res.status(404).json({success: false, error: apiResponse});
        }
    } catch(e) {
        return res.status(500).json({success: false, error: e.message});
    }
});

server.listen(8080, () => console.log('Server running on port 8080'))

export { server };