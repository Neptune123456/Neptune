var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('shopping',{test:"test"});
});

module.exports = router;