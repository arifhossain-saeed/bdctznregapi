import mongoose from 'mongoose';

const ecSchema = mongoose.Schema({
    citizen_id: String,
    name: String,
    relation: String,
    phone: String,
    email: String,
    address: String
}, {collection: 'emergencyContacts'});

const EmergencyContact = mongoose.model('EmergencyContact', ecSchema);

export default EmergencyContact;