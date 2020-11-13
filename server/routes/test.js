/**
 * ====================================================
 *
 * Created by anele on 2020/08/13.
 *
 * ====================================================
 */

var express = require('express');
var router = express.Router();

var data = require('../data/testdata.json');

router.get('/', function (req, res, next) {
    res.json(data);
});


module.exports = router;