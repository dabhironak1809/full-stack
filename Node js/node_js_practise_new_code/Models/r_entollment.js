const enrollment = require('../Controller/entollment.js');

const express = require('express');

const router = express.Router();

router.get('/', enrollment.getenrollment);
router.get('/:enrollment_id', enrollment.getenrollments);
router.post('/', enrollment.insertenrollment);
router.put('/:enrollment_id', enrollment.updateenrollment);
router.delete('/:enrollment_id', enrollment.deleteenrollment);

module.exports=router;
