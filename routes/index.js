'use strict';

const express = require('express');
const router = express.Router();
const osmosis = require('osmosis');

router.get('/', function(req, res, next) {

  // sample url
  let url = 'https://en.wikipedia.org/wiki/The_Avengers';
  osmosis
    .get(url)
    .set({
      heading: 'h1',
      title: 'title'
    })
    .data(item => {
      console.log(item);
    })
    .done(() => {
    });

});

module.exports = router;
