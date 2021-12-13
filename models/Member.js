import mongoose from 'mongoose';

const memberSchema = mongoose.Schema({
    citizen_id: String,
    name: String,
    member_type: String,
    family_type: String,
    father: String,
    mother: String,
    birth_date: String,
    nid: String,
    gender: String,
    religion: String,
    marital_status: String,
    education: String,
    phone: String,
    email: String,
    passport_no: String,
    driving_license: String,
    occupation: String,
    organization: String,
    org_phone: String,
    org_email: String
}, {collection: 'members'});

const Member = mongoose.model('Member', memberSchema);

export default Member;