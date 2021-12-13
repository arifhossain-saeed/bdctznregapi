import mongoose from 'mongoose';

const helpingHandSchema = mongoose.Schema({
    citizen_id: String,
    name: String,
    father: String,
    mother: String,
    birth_date: String,
    nid: String,
    gender: String,
    religion: String,
    marital_status: String,
    education: String,
    phone: String,
    alternate_phone: String,
    email: String,
    passport_no: String,
    driving_license: String,
    occupation: String,
    address: String
}, {collection: 'helpingHands'});

const HelpingHand = mongoose.model('HelpingHand', helpingHandSchema);

export default HelpingHand;