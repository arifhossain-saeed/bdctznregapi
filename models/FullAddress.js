import mongoose from 'mongoose';

const fullAddressSchema = mongoose.Schema({
    address: String,
    citizen_id: String
}, {collection: 'fullAddresses'});

const FullAddress = mongoose.model('FullAddress', fullAddressSchema);

export default FullAddress;