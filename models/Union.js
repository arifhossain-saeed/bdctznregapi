import mongoose from 'mongoose';

const unionSchema = mongoose.Schema({
    name: String,
    sub_district: String,
    police_station: String,
    district: String
}, {collection: 'users'});

const Union = mongoose.model('Union', unionSchema);

export default Union;