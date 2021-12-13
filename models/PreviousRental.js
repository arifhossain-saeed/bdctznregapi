import mongoose from 'mongoose';

const prSchema = mongoose.Schema({
    citizen_id: String,
    land_owner: String,
    land_owner_nid: String,
    land_owner_phone: String,
    address: String,
    leaving_reason: String
}, {collection: 'previousRentals'});

const PreviousRental = mongoose.model('PreviousRental', prSchema);

export default PreviousRental;