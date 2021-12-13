import mongoose from 'mongoose';

const loSchema = mongoose.Schema({
    previous_rental: String,
    name: String,
    nid: String,
    phone: String,
    email: String
}, {collection: 'landOwners'});

const LandOwner = mongoose.model('LandOwner', loSchema);

export default LandOwner;