import mongoose from 'mongoose';

const caSchema = mongoose.Schema({
    citizen_id: String,
    address_id: String,
    start_month: String,
    start_year: String,
    nearest_landmark: String,
    land_owner: String,
    land_owner_father: String,
    land_owner_nid: String,
    land_owner_phone: String
}, {collection: 'citizenAddresses'});

const CitizenAddress = mongoose.model('CitizenAddress', caSchema);

export default CitizenAddress;







