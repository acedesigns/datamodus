/* =======================================================
 *
 * Created by anele on 2020/11/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

var express = require('express');
var NewsAPI = require('newsapi');
var newsapi = new NewsAPI('7a587199331544c2a5f9d630cd0e8bc2');


var router = express.Router();


router.get('/sources', function (req, res, next) {

    var source = newsapi.v2.sources({
        //category: ['technology', 'general']
    });
    (function () {
        Promise.all( [source] )
            .then( function (values) {
                res.json( values[0] );
            })
    })();

});


router.get('/search', function (req, res, next) {

    var data = newsapi.v2.everything({
        q: req.query.searchTerm,
        from: req.query.dateFrom,
        sortBy: 'relevancy',
        language: 'en'
    });

    Promise.all( [data] )
        .then(
            function (values) {
                res.json( values[0] );
            }
        )
        .catch(
            function(error) {
                res.status(500).end(error);
            }
        );

});


router.get('/categories', function (req, res, next) {

    var headlines = newsapi.v2.topHeadlines({
        category: req.query.category,
        language: 'en'
    });
    (function () {
        Promise.all( [headlines] )
            .then(
                function (values) {
                    res.json( values[0] );
                }
            )
    })();

});

module.exports = router;