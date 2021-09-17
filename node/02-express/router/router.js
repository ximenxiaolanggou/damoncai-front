const express = require('express')

let router = express.Router();

router.get('/', (req,res) => {
    console.log(req.query);
})


module.exports = router
