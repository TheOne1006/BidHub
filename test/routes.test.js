import { expect } from 'chai';
import request from 'supertest';
import cheerio from 'cheerio';
import app from '../src/server.js';

describe('API request GET /', () => {
  // afterAll(() => setTimeout(() => process.exit(), 1000));

  describe('GET /', () => {
    it('should render properly', async () => {
      await request(app).get('/').expect(200);
    });
  });

  describe('GET /list', () => {
    it('should render product list', async () => {
      const Response = await request(app).get('/list');
      const $ = cheerio.load(Response.res.text);
      const title = cheerio.text($('title'));

      expect(200).to.equal(Response.status);
      expect(title).to.be.equal('product list for BidHub');

      return Response;
    });
  });

  describe('GET /404', () => {
    it('should return 404 for non-existent URLs', async () => {
      await request(app).get('/404').expect(404);
      await request(app).get('/notfound').expect(404);
    });
  });
});
