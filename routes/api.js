var express = require('express');
var router = express.Router();

/* POST process_listener*/
/*router.post('/process', function(req, res, next){
	console.log('processed');
	console.log('');
	res.status(200).send();
});*/

/* POST xml parser*/
router.post('/process', function(req, res, next){

    // req.body is an object, so we'll check if it has any (enumerable) properties
    if (Object.keys(req.body).length) {
        console.log('Parsed XML', req.body);
        res.send('OK!');
    } else {
        res.send('Not OK :(');
    }
});

module.exports = router;