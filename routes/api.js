var express = require('express');
var router = express.Router();

/* POST process_listener*/
router.post('/process', function(req, res, next){
	console.log('processed');
	res.status(200).send();
});

module.exports = router;