const mongoose = require('mongoose');
const { assignmentSchema } = require('../Schema/Schema');


let assignmentModel=mongoose.model('Assignment', assignmentSchema);

module.exports={
    assignmentModel
}