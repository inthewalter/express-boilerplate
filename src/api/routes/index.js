const express = require('express');
const router = express.Router();
const userRoutes = require('./user.route');

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/user', userRoutes);

router.get('/', (req, res) => {
  res.render('index');
})
module.exports = router;