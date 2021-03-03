const express = require('express');
const {
  getOverview,
  getTour,
  getLoginForm,
} = require('../controllers/viewController');

const { isLoggedIn } = require('../controllers/authController');

const router = express.Router();

router.use(isLoggedIn);

router.get('/', getOverview);
router.get('/tour/:slug', getTour);
// router.get('/tour/:id', getTourId);

router.get('/login', getLoginForm);

// /login

module.exports = router;
