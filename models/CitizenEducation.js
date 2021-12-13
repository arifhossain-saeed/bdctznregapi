import mongoose from 'mongoose';

const ceSchema = mongoose.Schema({
    citizen_id: String,
    degree: String,
    institution: String,
    start_month: String,
    start_year: String,
    complete_month: String,
    complete_year: String,
    gap_reason: String
}, {collection: 'citizenEducations'});

const CitizenEducation = mongoose.model('CitizenEducation', ceSchema);

export default CitizenEducation;