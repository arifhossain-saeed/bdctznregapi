import mongoose from 'mongoose';

const coSchema = mongoose.Schema({
    citizen_id: String,
    occupation: String,
    organization: String,
    employer: String,
    org_address: String,
    org_phone: String,
    org_email: String,
    start_month: String,
    start_year: String,
    occupation_status: String,
    end_date: String,
    leaving_reason: String
}, {collection: 'citizenOccupations'});

const CitizenOccupation = mongoose.model('CitizenOccupation', coSchema);

export default CitizenOccupation;