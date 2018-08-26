'use strict';
const express = require('express');
const router = express.Router();
const osmosis = require('osmosis');

const fetchPrefecturesInfo = () => {
  return new Promise((resolve, reject) => {
    let result = [],
        url = 'https://www.benricho.org/chimei/latlng_data.html';
    osmosis
      .get(url)
      .find('#inner tr:gt(1)')
      .set({
        prefecture: 'td[1] a[2]',
        latlon: 'td[4] div:first'
      })
      .data(data => result.push(data))
      .error(() => reject(err))
      .done(() => resolve(result));
  });
};

router.get('/', function(req, res, next) {
  // fetchPrefecturesInfo().then(data => {
  //   console.log('--------success------');
  //   console.log(data);
  // }).catch(err => {
  //   console.log('--------error------');
  //   console.log(err);
  // });
});

module.exports = router;
