const express = require('express')
const router = express.Router()
const tweetController = require('./controllers/tweet-controller')
const likeController = require('./controllers/like-controller')

router.get('/tweets', tweetController.index)
router.post('/tweets', tweetController.store)

router.post('/likes/:id', likeController.store)

module.exports = router
