import { server } from '../app/server';
import request from 'supertest';
import { expect } from 'chai';

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

