import mongoose from 'mongoose';

const addressSchema = mongoose.Schema({
    citizen_id: String,
    division: String,
    district: String,
    sub_district: String,
    police_station: String,
    post_office: String,
    city_village: String,
    area: String,
    sect: String,
    block: String,
    road: String,
    house: String,
    flat_apartment: String,
    is_permanent: Boolean,
    is_owner: Boolean
}, {collection: 'addresses'});

const Address = mongoose.model('Address', addressSchema);

export default Address;