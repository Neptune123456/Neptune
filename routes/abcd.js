var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('abcd',{abcd:"my abcd"});
});

module.exports = router;