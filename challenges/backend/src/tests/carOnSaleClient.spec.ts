import { server } from '../app/server';
import request from 'supertest';
import { expect } from 'chai';
// Import the AuctionMonitorApp for testing purpose
import { app } from '../app/main';


// This tests uses the express server for testing
describe('Sample test', () => {
    it('valid URL should return a response with status code of 200', async() => {
        const res = await request(server).get('/');
        console.log(res.status);
        expect(res.status).equal(200);
    });
});

describe('Sample test', () => {
    it('invalid URL should return a response with status code of 404', async() => {
        const res = await request(server).get('/auction');
        console.log(res.status);
        expect(res.status).equal(404);
    });
});

// This test uses the AuctionMonitorApp for testing
describe('CarOnSaleClient API Service Tests', () => {
    it('getRunningAuctions method should return a valid reposne', async() => {
   const res = await app.test();
        expect(res).to.be.a('object');
        // expect(res).to.have.property('success');
    });
});

