const router = require('express').Router();
const appointmentRoutes = require('./appointments');
const doctorRoutes = require('./doctors');
const medicationRoutes = require('./medications');
const authRoutes = require('./auth');

// Book routes
router.use('/auth', authRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/doctors', doctorRoutes);
router.use('/medications', medicationRoutes);

module.exports = router;
