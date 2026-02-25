const department = require('../Controller/department.js')

const express = require('express');

const router = express.Router();

router.get('/',department.getdepartment);
router.get('/:dept_id',department.getdepartments);

router.post('/',department.insetDepartment);
router.put('/:dept_id',department.updateDepartment);
router.delete('/:dept_id',department.deleteDepartment);

module.exports = router;