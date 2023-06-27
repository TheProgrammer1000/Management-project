const assert = require('assert');
const request = require('supertest');

const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

const axios = require('axios');

async function wins() {
  return 'Winner';
}

describe('Random Dog Image', () => {
  it('responds with expected JSON structure', (done) => {
    request('https://avancera.app/cities')
      .get('/')
      .set('Accept', 'application/json')
      .expect((res) => {
        if (!res.statusCode == 200) throw new Error('Expected status code 200');
      })
      .end((err, res) => {
        if (err) {
          throw err;
        }
        done();
      });
  });
});

describe('Looking for cities value', () => {
  it('wins() returns Winner', async () => {
    await expect(wins()).to.eventually.equal('Winner');
  });
});
