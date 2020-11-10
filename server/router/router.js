const router = require('express').Router();

router.get('/', (req,res) => {
    res.send('Server Running')
})

module.exports = router;