const express = require('express');
const router  = express.Router();
const loginController = require('./controllers/loginController');
const postsController = require('./controllers/postsController');

router.post('/login', loginController.login);
router.post('/posts', postsController.postForGroups);

module.exports = router;
