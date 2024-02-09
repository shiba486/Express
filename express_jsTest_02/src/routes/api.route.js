const apiRouter = require('express').Router();
const apiKeyMiddleware = require('../middleware/apiKey.middleware')

apiRouter.get('/api/product/',(req,res)=>{
    res.json([
        {
            id: '123',
            name: 'chrome'
        },
        {
            id: '124',
            name: 'Firefox'
        },
        {
            id: '125',
            name: 'safari'
        }
    ])
})





module.exports = apiRouter;