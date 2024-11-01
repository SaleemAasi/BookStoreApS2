const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  fatherName: { type: String, required: true },
  guidance: { type: String, required: true },
  teacherGender: { type: String, required: true },
  studentGender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  course: { type: String, required: true },
  desiredTiming: { type: String, required: true },
  reference: { type: String, required: true },
  country: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model('Registration', registrationSchema);
