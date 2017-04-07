/**
 * Created by lenovo on 2017/4/7.
 */


var express = require('express');
var User = require('../db/User');
var router = express.Router();



router.post('/', function (req, res, next) {

    var userName = req.body.userName;
    if(userName) {
        User.searchFriend({userName:userName}, function (data) {
            res.send(data);
        })
    }
});

module.exports = router;
