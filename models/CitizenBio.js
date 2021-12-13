import mongoose from 'mongoose';

const cbSchema = mongoose.Schema({
    name: String,
    birth_day: String,
    birth_month: String,
    birth_year: String,
    father: String,
    mother: String,
    nid: String,
    religion: String,
    gender: String,
    marital_status: String,
    passport_no: String,
    driving_license: String,
    email: String,
    phone: String,
    alternate_phone: String,
    image: String,
    status: String
}, {collection: 'citizenBios'});

const CitizenBio = mongoose.model('CitizenBio', cbSchema);

export default CitizenBio;