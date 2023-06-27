const express = require('express');
const request = require('supertest');
const assert = require('node:assert');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// TJABA aaaaawdawdawdw
//
// request('/')
//   .get('/')
//   .expect(200)
//   // .expect((res) => {
//     // assert(res.body.hasOwnProperty('message'));
//   // })
//   .end(function(err, res) {
//     if (err) throw err;
//   });

app.listen(process.env.PORT, () => {
  console.log('LISTENING ON PORT 8000');
});
