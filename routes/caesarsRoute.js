const express = require('express');
const {
  cipherMethod,
 
} = require('../controllers/caesarsController');



const router = express.Router();

router.post('/', cipherMethod);


module.exports = router;
