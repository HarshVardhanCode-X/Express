const express = require('express');
const { addassignment, getSingleAssignment, getAllAssignments, deleteAssignments } = require('../Controller/Controller');
const router = express.Router();


router.post('/add',addassignment)
router.get('/single-assi/:id',getSingleAssignment)
router.get('/get',getAllAssignments)
router.delete('/delete',deleteAssignments)


module.exports = {
router
}
