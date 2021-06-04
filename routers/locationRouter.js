import express from 'express';
const router = new express.Router();

import locationController from '../controllers/locationController';
import userAuth from '../middleware/userAuth';
import checkUsererHasLocation from '../middleware/checkUserHasLocation';

//create location
router.post('/', userAuth, locationController.create_location);

//get single location
router.get(
  '/:id',
    userAuth,
  // checkUsererHasLocation,
  locationController.get_location
);

//update location info
router.patch(
  '/:id/update',
    userAuth,
  // checkUsererHasLocation,
  locationController.update_location
);

//invite employee
router.post('/:id/invite', userAuth, locationController.invite_employee);

module.exports = router;
