const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = require('../controllers/tourController');

const { protect, restrictTo } = require('./../controllers/authController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();

// POST / tour/23rfsdf3/reviews/3123fs
// tour/:id/reviews/:id
router.use('/:tourId/reviews', reviewRouter);

router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);
router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/').get(protect, getAllTours).post(createTour);
router
  .route('/:id')
  .get(getTourStats)
  .patch(updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
